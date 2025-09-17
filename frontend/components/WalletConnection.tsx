'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

export function WalletConnection() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="bg-blue-50 border-2 border-blue-200 px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-mono text-blue-900 font-medium">
            {formatAddress(address)}
          </span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-bold">
            VERIFIED
          </span>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-3 py-2 text-xs font-medium text-red-600 hover:text-red-800 hover:bg-red-50 transition-all duration-200 border border-red-200 hover:border-red-300 rounded-lg"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => open()}
      className="gov-connect-wallet flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg border-2 border-blue-500 hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span>Secure Login</span>
      <span className="text-xs bg-white/20 px-2 py-1 rounded">
        🔒 GOI
      </span>
    </button>
  )
}
