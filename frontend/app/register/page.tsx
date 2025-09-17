'use client'

import { Header } from '@/components/Header'
import { HerbRegistrationForm } from '@/components/HerbRegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Register New Herb Batch
            </h1>
            <p className="text-gray-300 text-lg">
              Add your herbs to the blockchain for complete traceability
            </p>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <HerbRegistrationForm />
          </div>
        </div>
      </main>
    </div>
  )
}
