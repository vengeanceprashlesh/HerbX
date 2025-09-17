import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId from environment variables with fallback
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'

const metadata = {
  name: 'HerbX',
  description: 'Blockchain-based traceability system for Ayurvedic herbs',
  url: 'https://herbx-tracker.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Simple chain configuration - only essential chains
const chains = [sepolia, mainnet] as const

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})
