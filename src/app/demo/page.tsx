'use client'

import dynamic from 'next/dynamic'
import { DemoSkeleton } from '@/components/loading/component-skeleton'

const DemoShowcase = dynamic(() => import('@/components/demo-showcase'), {
  loading: () => <DemoSkeleton />,
  ssr: false // This is a heavy interactive component
})

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <DemoShowcase />
    </main>
  )
}