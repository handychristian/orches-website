import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Mock database - same as frontend
const mockDatabases = {
  'customer-service': [
    { orderId: '#12345', customer: 'Sari Dewi', status: 'Dikirim', courier: 'JNE', resi: 'JNE123456789', estimasi: 'Besok sore' },
    { orderId: '#12346', customer: 'Budi Santoso', status: 'Dikemas', courier: '-', resi: '-', estimasi: '2-3 hari' },
    { orderId: '#12347', customer: 'Andi Wijaya', status: 'Pending', courier: '-', resi: '-', estimasi: '-' },
    { orderId: '#12348', customer: 'Maya Sari', status: 'Dikirim', courier: 'JNT', resi: 'JNT987654321', estimasi: 'Hari ini' },
    { orderId: '#12349', customer: 'Rina Dewi', status: 'Selesai', courier: 'SiCepat', resi: 'SC456789123', estimasi: 'Delivered' },
  ],
  'inventory-management': [
    { item: 'Mie Sedaap', stock: 8, minimum: 15, harga: 'Rp 2,500', supplier: 'PT Mie Nusantara' },
    { item: 'Mie Indomie', stock: 25, minimum: 20, harga: 'Rp 2,200', supplier: 'PT Indofood' },
    { item: 'Mie ABC', stock: 12, minimum: 10, harga: 'Rp 2,800', supplier: 'PT ABC Foods' },
    { item: 'Susu Ultra', stock: 5, minimum: 15, harga: 'Rp 4,500', supplier: 'PT Ultra Milk' },
    { item: 'Teh Botol', stock: 30, minimum: 25, harga: 'Rp 3,200', supplier: 'PT Sosro' },
  ],
  'multi-customer-advanced': [
    { orderId: '#12345', customer: 'Sari Dewi', status: 'Dikirim', courier: 'JNE', resi: 'JNE123456789', estimasi: 'Besok sore' },
    { orderId: '#12350', customer: 'Rudi Hartono', status: 'Pending', courier: '-', resi: '-', estimasi: 'Delayed', issue: 'supplier_delay' },
    { orderId: '#12351', customer: 'Maya Indira', status: 'Dikemas', courier: '-', resi: '-', estimasi: '1-2 hari' },
  ]
}

// Initialize OpenAI (will fallback to mock if no API key)
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null

export async function POST(request: NextRequest) {
  try {
    const { message, demoType, conversationHistory = [] } = await request.json()

    // Validate input
    if (!message || !demoType) {
      return NextResponse.json(
        { error: 'Message and demoType are required' },
        { status: 400 }
      )
    }

    // Get relevant database
    const database = mockDatabases[demoType as keyof typeof mockDatabases]
    if (!database) {
      return NextResponse.json(
        { error: 'Invalid demo type' },
        { status: 400 }
      )
    }

    // If no OpenAI API key, use enhanced mock logic
    if (!openai) {
      const mockResponse = generateMockResponse(message, database, demoType)
      return NextResponse.json({
        response: mockResponse.text,
        foundData: mockResponse.foundData,
        searchResult: mockResponse.searchResult
      })
    }

    // Use real OpenAI
    const systemPrompt = createSystemPrompt(database, demoType)

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 200,
    })

    const aiResponse = completion.choices[0]?.message?.content || "Maaf, saya tidak dapat memproses permintaan Anda saat ini."

    // Try to find relevant data for highlighting
    const searchResult = findRelevantData(message, database, demoType)

    return NextResponse.json({
      response: aiResponse,
      foundData: searchResult.result,
      searchResult: searchResult
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function createSystemPrompt(database: any[], demoType: string): string {
  const dbString = JSON.stringify(database, null, 2)

  if (demoType === 'customer-service' || demoType === 'multi-customer-advanced') {
    return `Kamu adalah AI customer service yang ramah untuk toko online Indonesia.

DATABASE ORDERS TERSEDIA:
${dbString}

ATURAN:
- Gunakan bahasa Indonesia yang ramah dan casual
- Selalu gunakan emoji yang sesuai (📦, ✅, 🚚, dll)
- Kalau user sapa (halo, hai, dll), respon dengan ramah dan tawarkan bantuan
- Kalau user tanya order, cari berdasarkan nomor order (#12345, dll)
- Kalau user tanya tanpa nomor order, minta nomor order atau nama penerima
- Berikan info lengkap: status, courier, resi, estimasi
- Kalau order tidak ditemukan, tawarkan bantuan lain
- Jaga percakapan tetap profesional tapi hangat
- Maksimal 2-3 kalimat per response

Contoh response bagus:
"Hai! Ada yang bisa saya bantu? Mau cek status order atau ada pertanyaan lain? 😊"
"Order #12345 sudah dikirim via JNE kemarin! Resi: JNE123456789, estimasi tiba besok sore 📦✨"`
  } else {
    return `Kamu adalah AI inventory management yang membantu cek stok barang untuk toko Indonesia.

DATABASE INVENTORY TERSEDIA:
${dbString}

ATURAN:
- Gunakan bahasa Indonesia yang ramah dan casual
- Selalu gunakan emoji yang sesuai (📋, ⚠️, ✅, dll)
- Kalau user sapa, respon ramah dan tawarkan bantuan
- Kalau user tanya stok, cari berdasarkan nama produk
- Berikan info: stock tersedia, harga, status (low stock warning jika di bawah minimum)
- Kalau stok rendah, beri tahu sudah auto-order ke supplier
- Kalau produk tidak ditemukan, tunjukkan produk yang tersedia
- Maksimal 2-3 kalimat per response

Contoh response bagus:
"Hai! Mau cek stok barang apa hari ini? 📋"
"Stok Mie Sedaap tersisa 8 pcs (di bawah minimum 15). Sudah auto-order ke supplier! Harga: Rp 2,500 ⚠️📋"`
  }
}

function generateMockResponse(message: string, database: any[], demoType: string) {
  const lowerMessage = message.toLowerCase()

  // Handle greetings
  if (lowerMessage.match(/^(hai|halo|hello|hi|selamat)/)) {
    if (demoType === 'customer-service') {
      return {
        text: "Hai! Saya customer service AI OrchesAI. Ada yang bisa saya bantu? Mau cek status order atau ada pertanyaan lain? 😊",
        foundData: null,
        searchResult: { result: null, searchTerm: message, type: 'greeting' }
      }
    } else {
      return {
        text: "Hai! Saya inventory assistant OrchesAI. Mau cek stok barang apa hari ini? 📋",
        foundData: null,
        searchResult: { result: null, searchTerm: message, type: 'greeting' }
      }
    }
  }

  // Search in database
  const searchResult = findRelevantData(message, database, demoType)

  if (searchResult.result) {
    if (demoType === 'customer-service') {
      const order = searchResult.result
      const statusText = order.status === 'Dikirim' ? 'sudah dikirim' :
                        order.status === 'Dikemas' ? 'sedang dikemas' :
                        order.status === 'Pending' ? 'masih dalam antrian' : 'telah selesai'

      if (order.status === 'Dikirim') {
        return {
          text: `Order ${order.orderId} ${statusText} via ${order.courier}! Resi: ${order.resi}, estimasi tiba ${order.estimasi} 📦✨`,
          foundData: order,
          searchResult
        }
      } else if (order.status === 'Dikemas') {
        return {
          text: `Order ${order.orderId} ${statusText} dan akan dikirim dalam 1-2 hari. Estimasi tiba: ${order.estimasi} 📦`,
          foundData: order,
          searchResult
        }
      } else {
        return {
          text: `Order ${order.orderId} ${statusText}. Status akan diupdate segera ya! 📋`,
          foundData: order,
          searchResult
        }
      }
    } else {
      const product = searchResult.result
      const lowStock = product.stock < product.minimum

      if (lowStock) {
        return {
          text: `Stok ${product.item} tersisa ${product.stock} pcs (di bawah minimum ${product.minimum}). Sudah auto-order ke ${product.supplier}! Harga: ${product.harga} ⚠️📋`,
          foundData: product,
          searchResult
        }
      } else {
        return {
          text: `Stok ${product.item} tersedia ${product.stock} pcs. Harga: ${product.harga}. Ready untuk order! ✅`,
          foundData: product,
          searchResult
        }
      }
    }
  }

  // No data found
  if (demoType === 'customer-service') {
    return {
      text: "Hmm, saya tidak menemukan order tersebut. Bisa kasih nomor order yang benar? Atau mau bantuan lain? 🔍",
      foundData: null,
      searchResult
    }
  } else {
    return {
      text: "Produk tidak ditemukan. Coba tanya 'mie sedaap', 'mie indomie', 'susu ultra', atau 'teh botol'? 🔍",
      foundData: null,
      searchResult
    }
  }
}

function findRelevantData(query: string, database: any[], demoType: string) {
  const lowerQuery = query.toLowerCase()

  if (demoType === 'customer-service') {
    // Search for order number
    const orderMatch = query.match(/#?(\d+)/)
    if (orderMatch) {
      const orderId = '#' + orderMatch[1]
      const result = database.find(item => item.orderId === orderId)
      return { result, searchTerm: orderId, type: 'order' }
    }
  } else if (demoType === 'inventory-management') {
    // Search for product name
    const result = database.find(item =>
      item.item.toLowerCase().includes(lowerQuery) ||
      lowerQuery.includes(item.item.toLowerCase().split(' ')[1]?.toLowerCase())
    )
    return { result, searchTerm: lowerQuery, type: 'inventory' }
  }

  return { result: null, searchTerm: query, type: 'unknown' }
}