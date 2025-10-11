# OpenAI Integration Setup

## 🚀 Quick Setup Instructions

### 1. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in to your OpenAI account
3. Click "Create new secret key"
4. Copy the API key (starts with `sk-`)

### 2. Configure Environment Variables
1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your credentials:
```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-your-actual-api-key-here

# Optional: OpenAI Configuration (if you have organization/project)
OPENAI_ORG_ID=your-org-id-here
OPENAI_PROJECT_ID=your-project-id-here

# Application Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3003
```

### 3. Restart Development Server
```bash
npm run dev
```

## 🎯 What You Get

### Without API Key (Current)
- ✅ Interactive demo still works
- ✅ Enhanced mock responses with greetings
- ✅ All visual features work
- ❌ Basic pattern matching only
- ❌ Limited conversation flow

### With API Key (Upgraded)
- ✅ **Natural conversations** - handles ANY user input
- ✅ **Context awareness** - remembers conversation
- ✅ **Indonesian language** - perfect Bahasa responses
- ✅ **Smart responses** - handles edge cases beautifully
- ✅ **Professional tone** - consistent brand voice

## 💰 Cost Estimation

**Model**: GPT-4o-mini (recommended for demos)
- **Cost**: ~$0.60 per 1M tokens
- **Demo interaction**: ~100 tokens average
- **1000 demo sessions**: ~$0.06 (very affordable!)

## 🧪 Test Commands

After setup, test these in interactive mode:

### Customer Service Demo:
```
"halo"
"order status saya gimana?"
"order #12345"
"saya lupa nomor order"
"kapan pesanan saya sampai?"
```

### Inventory Demo:
```
"hai"
"stok mie sedaap berapa?"
"mie indomie ada?"
"produk apa saja yang tersedia?"
"harga susu ultra berapa?"
```

## 🔧 Troubleshooting

### API Key Issues:
1. Make sure `.env.local` is in project root
2. Restart development server after adding key
3. Check OpenAI console for API usage/limits

### No Response:
1. Check browser console for errors
2. Verify API endpoint at `/api/chat`
3. Fallback to mock responses should work

## 🎨 Enhanced Features with Real AI

### 1. Smart Greetings
**Before**: Generic "data not found"
**After**: "Hai! Saya customer service AI OrchesAI. Ada yang bisa saya bantu? 😊"

### 2. Natural Conversations
**Before**: Must use exact keywords
**After**: "saya mau tanya order" → "Tentu! Bisa kasih nomor order nya?"

### 3. Edge Case Handling
**Before**: Breaks on unexpected input
**After**: "maaf saya lupa password" → "Untuk reset password, silakan hubungi admin..."

### 4. Context Memory
**Before**: Each message isolated
**After**: Remembers previous conversation context

## 🚨 Important Notes

- **.env.local** is gitignored (safe for credentials)
- **Fallback system** ensures demo always works
- **Enhanced mock** provides better experience without API key
- **Production ready** with proper error handling