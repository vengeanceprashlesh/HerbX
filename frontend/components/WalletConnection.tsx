'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'
import { motion } from 'framer-motion'
import { GradientButton } from './GradientButton'

export function WalletConnection() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <div className="bg-gray-900 border border-white/20 px-3 py-2 rounded-md flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs font-mono text-white">
            {formatAddress(address)}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => disconnect()}
          className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-all duration-200 border border-white/20 hover:border-white/40 rounded-md"
        >
          Disconnect
        </motion.button>
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <GradientButton
        onClick={() => open()}
        size="md"
        className="flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Connect Wallet
      </GradientButton>
    </motion.div>
  )
}
