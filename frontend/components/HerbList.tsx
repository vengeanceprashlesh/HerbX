'use client'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { motion } from 'framer-motion'
import { QrCodeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { QRCodeDisplay } from './QRCodeDisplay'

interface Herb {
  id: number
  name: string
  botanicalName: string
  quantity: number
  unit: string
  location: {
    latitude: string
    longitude: string
    address: string
  }
  timestamp: string
  txHash: string
  farmer: string
  status: 'COLLECTED' | 'PROCESSED' | 'TESTED' | 'TRANSPORTED' | 'MANUFACTURED'
}

// Mock data for demonstration
const mockHerbs: Herb[] = [
  {
    id: 1,
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    quantity: 50,
    unit: "kg",
    location: {
      latitude: "28.6139",
      longitude: "77.2090",
      address: "Delhi, India"
    },
    timestamp: "2024-01-15T10:30:00Z",
    txHash: "0x1234567890abcdef1234567890abcdef12345678",
    farmer: "0x742d35Cc6C9BC3C2b5c3c2b5c3c2b5c3c2b5c3",
    status: "COLLECTED"
  },
  {
    id: 2,
    name: "Ashwagandha",
    botanicalName: "Withania somnifera",
    quantity: 25,
    unit: "kg",
    location: {
      latitude: "26.9124",
      longitude: "75.7873",
      address: "Rajasthan, India"
    },
    timestamp: "2024-01-14T08:15:00Z",
    txHash: "0xabcdef1234567890abcdef1234567890abcdef12",
    farmer: "0x742d35Cc6C9BC3C2b5c3c2b5c3c2b5c3c2b5c3",
    status: "PROCESSED"
  }
]

const statusColors = {
  COLLECTED: 'bg-green-100 text-green-800 border-green-200',
  PROCESSED: 'bg-blue-100 text-blue-800 border-blue-200',
  TESTED: 'bg-purple-100 text-purple-800 border-purple-200',
  TRANSPORTED: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  MANUFACTURED: 'bg-red-100 text-red-800 border-red-200'
}

export function HerbList() {
  const { isConnected } = useAccount()
  const [herbs, setHerbs] = useState<Herb[]>([])
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null)
  const [showQR, setShowQR] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isConnected) {
      // Simulate loading herbs from blockchain
      setTimeout(() => {
        setHerbs(mockHerbs)
        setLoading(false)
      }, 1000)
    } else {
      setHerbs([])
      setLoading(false)
    }
  }, [isConnected])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleShowQR = (herb: Herb) => {
    setSelectedHerb(herb)
    setShowQR(true)
  }

  if (!isConnected) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-gray-800 font-medium">Connect your wallet to view your registered herbs</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-gray-800 font-medium">Loading herbs...</span>
      </div>
    )
  }

  if (herbs.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <p className="text-gray-800 font-medium mb-2">No herbs registered yet</p>
        <p className="text-sm text-gray-700">Register your first herb batch to get started!</p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {herbs.map((herb, index) => (
          <motion.div
            key={herb.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900">{herb.name}</h3>
                {herb.botanicalName && (
                  <p className="text-sm text-gray-700 italic font-medium">{herb.botanicalName}</p>
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[herb.status]}`}>
                {herb.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="flex items-center text-sm text-gray-800 font-medium">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {herb.quantity} {herb.unit}
              </div>
              <div className="flex items-center text-sm text-gray-800 font-medium">
                <MapPinIcon className="w-4 h-4 mr-2 text-gray-700" />
                {herb.location.address}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-700 mb-3">
              <div className="flex items-center font-medium">
                <ClockIcon className="w-4 h-4 mr-1" />
                {formatDate(herb.timestamp)}
              </div>
              <div className="font-mono font-semibold text-gray-800">
                ID: #{herb.id}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-700 font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Verified on blockchain
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleShowQR(herb)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
              >
                <QrCodeIcon className="w-4 h-4" />
                View QR
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* QR Code Modal */}
      {showQR && selectedHerb && (
        <QRCodeDisplay 
          herb={selectedHerb} 
          onClose={() => {
            setShowQR(false)
            setSelectedHerb(null)
          }} 
        />
      )}
    </>
  )
}
