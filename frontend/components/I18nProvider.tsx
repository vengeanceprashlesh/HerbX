'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize i18n only on the client side
    if (typeof window !== 'undefined') {
      if (i18n.isInitialized) {
        setIsInitialized(true)
      } else {
        i18n.on('initialized', () => {
          setIsInitialized(true)
        })
      }
    }
  }, [])

  // Show loading state while i18n initializes
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}
