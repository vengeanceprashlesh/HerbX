import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, polygonMumbai, hardhat } from 'wagmi/chains'

// Get projectId from environment variables
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'your-project-id'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'AyurTrace',
  description: 'Blockchain-based traceability system for Ayurvedic herbs',
  url: 'https://ayurtrace.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [sepolia, polygonMumbai, hardhat, mainnet] as const

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
})
