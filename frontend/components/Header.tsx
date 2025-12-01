'use client'

import Link from 'next/link'
import { useState } from 'react'
import { WalletConnection } from './WalletConnection'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isHindi } = useLanguage()

  return (
    <>
      {/* Government Authority Bar */}
      <div className="bg-slate-50 border-b border-gray-200 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3 text-gray-700">
              <span className="font-semibold text-blue-900">भारत सरकार | Government of India</span>
              <span className="text-gray-400">|</span>
              <span className="font-medium">आयुष मंत्रालय | Ministry of AYUSH</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-600 font-medium">🌿 Official Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Government Header with Tri-color */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-1"></div>

      <header className="bg-white shadow-md border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Government Logo with Emblem */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-orange-400">
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-800">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <g stroke="currentColor" strokeWidth="1">
                    {[...Array(24)].map((_, i) => {
                      const angle = (i * 15 - 90) * Math.PI / 180
                      const x1 = 50 + 18 * Math.cos(angle)
                      const y1 = 50 + 18 * Math.sin(angle)
                      const x2 = 50 + 38 * Math.cos(angle)
                      const y2 = 50 + 38 * Math.sin(angle)
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                    })}
                  </g>
                  <circle cx="50" cy="50" r="6" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-blue-900">
                    {isHindi ? 'हर्बएक्स पोर्टल' : 'HerbX Portal'}
                  </h1>
                </div>
                <p className="text-sm text-gray-600 font-medium -mt-1">
                  {isHindi ? 'आयुर्वेदिक जड़ी-बूटी प्रमाणीकरण प्रणाली' : 'Ayurvedic Herb Authentication System'}
                </p>
                <p className="text-xs text-blue-700 font-medium">
                  {isHindi ? 'आयुष मंत्रालय, भारत सरकार' : 'Ministry of AYUSH, Government of India'}
                </p>
              </div>
            </Link>

            {/* Simple Navigation for Farmers */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/register"
                className="text-gray-700 hover:text-orange-600 font-medium text-lg px-3 py-2 rounded"
              >
                {isHindi ? 'जड़ी-बूटी पंजीकरण' : 'Register Herbs'}
              </Link>
              <Link
                href="/track"
                className="text-gray-700 hover:text-orange-600 font-medium text-lg px-3 py-2 rounded"
              >
                {isHindi ? 'जड़ी-बूटी ट्रैक करें' : 'Track Herbs'}
              </Link>
              <Link
                href="/verify"
                className="text-gray-700 hover:text-orange-600 font-medium text-lg px-3 py-2 rounded"
              >
                {isHindi ? 'क्यूआर सत्यापित करें' : 'Verify QR'}
              </Link>
              <Link
                href="/help"
                className="text-gray-700 hover:text-orange-600 font-medium text-lg px-3 py-2 rounded"
              >
                {isHindi ? 'सहायता' : 'Help'}
              </Link>
            </nav>

            {/* Simple Actions */}
            <div className="flex items-center space-x-3">
              <WalletConnection />

              {/* Mobile Menu */}
              <button
                className="md:hidden p-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Simple Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/register"
                className="block text-gray-700 hover:text-orange-600 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isHindi ? 'जड़ी-बूटी पंजीकरण' : 'Register Herbs'}
              </Link>
              <Link
                href="/track"
                className="block text-gray-700 hover:text-orange-600 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isHindi ? 'जड़ी-बूटी ट्रैक करें' : 'Track Herbs'}
              </Link>
              <Link
                href="/verify"
                className="block text-gray-700 hover:text-orange-600 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isHindi ? 'क्यूआर सत्यापित करें' : 'Verify QR'}
              </Link>
              <Link
                href="/help"
                className="block text-gray-700 hover:text-orange-600 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isHindi ? 'सहायता' : 'Get Help'}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Government Status Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>{isHindi ? 'सिस्टम ऑनलाइन' : 'System Online'}</span>
              </span>
              <span className="hidden sm:inline">
                {isHindi ? 'अंतिम अपडेट:' : 'Last Updated:'} {new Date().toLocaleDateString('en-IN')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">
                🌿 {isHindi ? 'आयुष मंत्रालय द्वारा प्रमाणित' : 'Authenticated by Ministry of AYUSH'}
              </span>
              <span className="px-2 py-1 bg-orange-600 rounded text-xs font-bold">
                {isHindi ? 'सत्यापित' : 'VERIFIED'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
