'use client'

import Link from 'next/link'
import { WalletConnection } from './WalletConnection'

export function Header() {
  return (
    <header className="relative z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <span className="text-black font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-light text-white">
              HerbX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/register" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Register
            </Link>
            <Link 
              href="/herbs" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Track Herbs
            </Link>
            <Link 
              href="/verify" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Verify QR
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center">
            <WalletConnection />
          </div>
        </div>
      </div>
    </header>
  )
}
