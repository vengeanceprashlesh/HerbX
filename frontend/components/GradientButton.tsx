'use client'

import { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function GradientButton({ 
  children, 
  onClick, 
  className = '', 
  size = 'md', 
  variant = 'primary',
  disabled = false,
  type = 'button'
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3 text-sm'
  }

  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-medium rounded-md
        transition-all duration-200 ease-out
        hover:transform hover:-translate-y-0.5
        active:transform active:translate-y-0
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:transform-none
        focus:outline-none focus:ring-2 focus:ring-white/50
        ${className}
      `}
    >
      {children}
    </button>
  )
}
