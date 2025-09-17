'use client'

import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
  }

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-all ${
          i18n.language === 'en' 
            ? 'bg-white text-blue-900 shadow-sm' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('hi')}
        className={`px-3 py-1.5 text-sm font-medium transition-all ${
          i18n.language === 'hi' 
            ? 'bg-white text-blue-900 shadow-sm' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        हिं
      </button>
    </div>
  )
}
