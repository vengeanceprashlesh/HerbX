'use client'

import { Header } from '@/components/Header'
import { HerbList } from '@/components/HerbList'

export default function HerbsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Registered Herbs
            </h1>
            <p className="text-gray-300 text-lg">
              Track and manage your blockchain-verified herb batches
            </p>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <HerbList />
          </div>
        </div>
      </main>
    </div>
  )
}
