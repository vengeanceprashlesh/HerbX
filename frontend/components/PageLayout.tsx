'use client'

import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface PageLayoutProps {
  title: string
  titleHindi?: string
  subtitle?: string
  subtitleHindi?: string
  children: React.ReactNode
  breadcrumbs?: { name: string, nameHindi?: string, href: string }[]
  showBackButton?: boolean
}

export function PageLayout({
  title,
  titleHindi,
  subtitle,
  subtitleHindi,
  children,
  breadcrumbs = [],
  showBackButton = true
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span>/</span>
                    <Link 
                      href={crumb.href} 
                      className="hover:text-white transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Back Button */}
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeftIcon className="w-4 h-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
          )}

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
              {titleHindi && (
                <span className="block text-xl md:text-2xl text-blue-200 mt-1 font-medium">
                  {titleHindi}
                </span>
              )}
            </h1>
            {subtitle && (
              <p className="text-lg text-blue-200 max-w-3xl">
                {subtitle}
                {subtitleHindi && (
                  <span className="block text-base text-blue-300 mt-1">
                    {subtitleHindi}
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
        
        {/* Decorative Border */}
        <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Government Branding Footer */}
      <div className="bg-slate-100 border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-blue-50 rounded-full flex items-center justify-center border border-orange-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-700">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
                <g stroke="currentColor" strokeWidth="0.5">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * Math.PI / 180
                    const x1 = 12 + 4 * Math.cos(angle)
                    const y1 = 12 + 4 * Math.sin(angle)
                    const x2 = 12 + 9 * Math.cos(angle)
                    const y2 = 12 + 9 * Math.sin(angle)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                  })}
                </g>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <span>Ministry of AYUSH, Government of India | आयुष मंत्रालय, भारत सरकार</span>
          </div>
        </div>
      </div>
    </div>
  )
}
