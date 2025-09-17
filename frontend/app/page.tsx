'use client'

import { Header } from '@/components/Header'
import { WalletConnection } from '@/components/WalletConnection'
import { GradientButton } from '@/components/GradientButton'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
              HerbX
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Blockchain-powered traceability for Ayurvedic herbs.
              <span className="block text-white mt-2">Transparent. Immutable. Verified.</span>
            </p>
          </div>

          {/* Central Connect Wallet Button */}
          <div className="mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <WalletConnection />
          </div>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Register New Herb Batch Card */}
            <Link href="/register" className="group">
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Register New Herb Batch
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Connect your wallet to register herbs on the blockchain
                </p>
                <div className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                  Get Started →
                </div>
              </div>
            </Link>

            {/* Your Registered Herbs Card */}
            <Link href="/herbs" className="group">
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Your Registered Herbs
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Connect your wallet to view your registered herbs
                </p>
                <div className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                  View Herbs →
                </div>
              </div>
            </Link>

            {/* Verify QR Card */}
            <Link href="/verify" className="group">
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4a2 2 0 002-2v-4h-6m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5.01M16 14V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  Verify QR
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Scan QR code to trace herb authenticity and origin
                </p>
                <div className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                  Scan QR →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm">
              Trusted by herb producers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl font-light text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Blockchain Verified</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Real-time Tracking</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">∞</div>
              <div className="text-gray-400 text-sm">Immutable Records</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
