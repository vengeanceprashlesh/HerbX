'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'

export default function TrackPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to herbs page after a brief moment
    const timer = setTimeout(() => {
      router.push('/herbs')
    }, 100)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Track Your Herbs
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Redirecting to your registered herbs...
          </p>
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
