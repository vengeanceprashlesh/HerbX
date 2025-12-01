'use client'

import { Header } from '@/components/Header'
import { WalletConnection } from '@/components/WalletConnection'
import { GradientButton } from '@/components/GradientButton'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { isHindi } = useLanguage()
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Indian Government styling */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(10, 61, 98, 0.05) 100%)' }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Indian flag gradient */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-gradient">
              HerbX
            </h1>
            <p className="text-lg font-light max-w-2xl leading-relaxed text-primary">
              {isHindi
                ? 'डिजिटल इंडिया की ब्लॉकचेन-संचालित आयुर्वेदिक जड़ी-बूटियों की ट्रेसेबिलिटी।'
                : "Digital India's blockchain-powered traceability for Ayurvedic herbs."}
              <span className="block mt-2 text-secondary font-medium">
                {isHindi ? 'पारदर्शी। अपरिवर्तनीय। सत्यापित। 🇮🇳' : 'Transparent. Immutable. Verified. 🇮🇳'}
              </span>
            </p>
          </div>

          {/* Central Connect Wallet Button */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-colors bg-primary text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-primary">
                  {isHindi ? 'नई जड़ी-बूटी बैच पंजीकृत करें' : 'Register New Herb Batch'}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-muted">
                  {isHindi ? 'ब्लॉकचेन पर जड़ी-बूटियों को पंजीकृत करने के लिए अपना वॉलेट कनेक्ट करें' : 'Connect your wallet to register herbs on the blockchain'}
                </p>
                <div className="text-xs font-medium transition-colors text-accent">
                  {isHindi ? 'शुरू करें →' : 'Get Started →'}
                </div>
              </div>
            </Link>

            {/* Your Registered Herbs Card */}
            <Link href="/herbs" className="group">
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-colors bg-secondary text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-primary">
                  {isHindi ? 'आपकी पंजीकृत जड़ी-बूटियाँ' : 'Your Registered Herbs'}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-muted">
                  {isHindi ? 'अपनी पंजीकृत जड़ी-बूटियों को देखने के लिए अपना वॉलेट कनेक्ट करें' : 'Connect your wallet to view your registered herbs'}
                </p>
                <div className="text-xs font-medium transition-colors text-accent">
                  {isHindi ? 'जड़ी-बूटियाँ देखें →' : 'View Herbs →'}
                </div>
              </div>
            </Link>

            {/* Verify QR Card */}
            <Link href="/verify" className="group">
              <div className="minimal-card p-8 text-left h-full animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6 transition-colors bg-accent text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4a2 2 0 002-2v-4h-6m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5.01M16 14V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-primary">
                  {isHindi ? 'क्यूआर सत्यापित करें' : 'Verify QR'}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-muted">
                  {isHindi ? 'जड़ी-बूटी की प्रामाणिकता और मूल को ट्रेस करने के लिए QR कोड स्कैन करें' : 'Scan QR code to trace herb authenticity and origin'}
                </p>
                <div className="text-xs font-medium transition-colors text-accent">
                  {isHindi ? 'QR स्कैन करें →' : 'Scan QR →'}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(10, 61, 98, 0.2)', backgroundColor: 'rgba(10, 61, 98, 0.03)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-muted">
              {isHindi ? 'डिजिटल इंडिया के जड़ी-बूटी उत्पादकों को राष्ट्रव्यापी सशक्त बनाना 🇮🇳' : "Empowering Digital India's herb producers nationwide 🇮🇳"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl font-light mb-2 text-accent">100%</div>
              <div className="text-sm text-primary">{isHindi ? 'ब्लॉकचेन सत्यापित' : 'Blockchain Verified'}</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 text-secondary">24/7</div>
              <div className="text-sm text-primary">{isHindi ? 'रीयल-टाइम ट्रैकिंग' : 'Real-time Tracking'}</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 text-primary">∞</div>
              <div className="text-sm text-primary">{isHindi ? 'अपरिवर्तनीय रिकॉर्ड' : 'Immutable Records'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
