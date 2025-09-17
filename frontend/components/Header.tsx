'use client'

import Link from 'next/link'
import { WalletConnection } from './WalletConnection'

export function Header() {
  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              AyurTrace
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-gray-900 transition-colors font-semibold"
            >
              Register
            </Link>
            <Link 
              href="/track" 
              className="text-gray-800 hover:text-gray-900 transition-colors font-semibold"
            >
              Track Herbs
            </Link>
            <Link 
              href="/verify" 
              className="text-gray-800 hover:text-gray-900 transition-colors font-semibold"
            >
              Verify QR
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <WalletConnection />
          </div>
        </div>
      </div>
    </header>
  )
}
