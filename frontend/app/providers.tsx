'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { State, WagmiProvider } from 'wagmi'
import { config, projectId } from '@/lib/wagmi'

// Setup queryClient
const queryClient = new QueryClient()

// Create modal with minimal config
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false,
  enableOnramp: false,
  themeMode: 'light'
})

export function Providers({ 
  children,
  initialState 
}: { 
  children: React.ReactNode
  initialState?: State 
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
