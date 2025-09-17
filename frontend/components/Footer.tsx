'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Footer() {
  const [language, setLanguage] = useState('English')
  const [isHindi, setIsHindi] = useState(false)

  const toggleLanguage = () => {
    setIsHindi(!isHindi)
    setLanguage(isHindi ? 'English' : 'हिंदी')
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Language Toggle Bar */}
      <div className="bg-slate-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-sm text-gray-300">
              <span className="text-orange-400 font-medium">
                {isHindi ? 'भाषा चुनें:' : 'Select Language:'}
              </span>
              <div className="flex items-center bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => { setIsHindi(false); setLanguage('English') }}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                    !isHindi 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => { setIsHindi(true); setLanguage('हिंदी') }}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                    isHindi 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>{isHindi ? 'राष्ट्रीय पोर्टल' : 'National Portal'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              {isHindi ? 'उपयोगी लिंक' : 'Useful Links'}
            </h3>
            <div className="space-y-2">
              <Link href="/event-calendar" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'कार्यक्रम कैलेंडर' : 'Event Calendar'}
              </Link>
              <Link href="/website-policies" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'वेबसाइट नीतियां' : 'Website Policies'}
              </Link>
              <Link href="/whats-new" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'क्या नया है' : "What's New"}
              </Link>
              <Link href="/archive" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'संग्रहालय' : 'Archive'}
              </Link>
              <Link href="/related-links" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'संबंधित लिंक' : 'Related Links'}
              </Link>
              <Link href="/sitemap" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'साइट मैप' : 'Site Map'}
              </Link>
            </div>
          </div>

          {/* Ministry Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              {isHindi ? 'आयुष मंत्रालय' : 'Ministry of AYUSH'}
            </h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'मंत्रालय के बारे में' : 'About Ministry'}
              </Link>
              <Link href="/acts-rules" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'अधिनियम और नियम' : 'Acts & Rules'}
              </Link>
              <Link href="/guidelines" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'दिशानिर्देश' : 'Guidelines'}
              </Link>
              <Link href="/notifications" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'अधिसूचनाएं' : 'Notifications'}
              </Link>
              <Link href="/tenders" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'निविदाएं' : 'Tenders'}
              </Link>
              <Link href="/recruitment" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'भर्ती' : 'Recruitment'}
              </Link>
            </div>
          </div>

          {/* HerbX Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              {isHindi ? 'हर्बएक्स सेवाएं' : 'HerbX Services'}
            </h3>
            <div className="space-y-2">
              <Link href="/register" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'जड़ी-बूटी पंजीकरण' : 'Herb Registration'}
              </Link>
              <Link href="/track" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'आपूर्ति श्रृंखला ट्रैकिंग' : 'Supply Chain Tracking'}
              </Link>
              <Link href="/verify" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'क्यूआर सत्यापन' : 'QR Verification'}
              </Link>
              <Link href="/certificates" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'डिजिटल प्रमाणपत्र' : 'Digital Certificates'}
              </Link>
              <Link href="/compliance" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'अनुपालन डैशबोर्ड' : 'Compliance Dashboard'}
              </Link>
              <Link href="/help" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'सहायता और समर्थन' : 'Help & Support'}
              </Link>
            </div>
          </div>

          {/* Contact & Accessibility */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              {isHindi ? 'संपर्क और सहायता' : 'Contact & Support'}
            </h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
              </Link>
              <Link href="/accessibility" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'पहुँच विवरण' : 'Accessibility Statement'}
              </Link>
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'उपयोग की शर्तें' : 'Terms of Use'}
              </Link>
              <Link href="/screen-reader" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {isHindi ? 'स्क्रीन रीडर पहुँच' : 'Screen Reader Access'}
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                {isHindi ? 'फीडबैक' : 'Feedback'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Government Emblem & Social Links */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Government Emblem */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-orange-400">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-blue-800">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
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
                  <circle cx="50" cy="50" r="6" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  {isHindi ? 'हर्बएक्स पोर्टल' : 'HerbX Portal'}
                </h4>
                <p className="text-gray-400 text-sm">
                  {isHindi ? 'आयुष मंत्रालय, भारत सरकार' : 'Ministry of AYUSH, Government of India'}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/moayush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/moayush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/moayush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.455.596 1.164.985 1.676.985.512 0 1.221-.389 1.676-.985l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529zm7.098 0c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.455.596 1.164.985 1.676.985s1.221-.389 1.676-.985l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/moayush" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Credits */}
      <div className="border-t border-gray-700 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="text-gray-400 mb-2 md:mb-0">
              {isHindi 
                ? <>© कॉपीराइट <span className="text-white font-semibold">आयुष मंत्रालय</span>। सभी अधिकार सुरक्षित</>
                : <>© Copyright <span className="text-white font-semibold">Ministry of AYUSH</span>. All Rights Reserved</>
              }
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>
                {isHindi 
                  ? <>द्वारा डिज़ाइन <span className="text-white">आयुष मंत्रालय</span></>
                  : <>Designed by <span className="text-white">Ministry of AYUSH</span></>
                }
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400">
                  {isHindi ? 'सिस्टम ऑनलाइन' : 'System Online'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
