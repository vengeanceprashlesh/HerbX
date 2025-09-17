'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { QrCodeIcon, CheckCircleIcon, XCircleIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Header } from '@/components/Header'

interface HerbData {
  id: number
  name: string
  botanicalName: string
  quantity: number
  unit: string
  farmer: string
  location: {
    latitude: string
    longitude: string
    address: string
  }
  collectionDate: string
  txHash: string
  status: 'COLLECTED' | 'PROCESSED' | 'TESTED' | 'TRANSPORTED' | 'MANUFACTURED'
  supplyChain: Array<{
    stage: string
    date: string
    location: string
    handler: string
  }>
}

// Mock data for demonstration
const mockHerbData: HerbData = {
  id: 1,
  name: "Turmeric",
  botanicalName: "Curcuma longa",
  quantity: 50,
  unit: "kg",
  farmer: "Ravi Kumar",
  location: {
    latitude: "28.6139",
    longitude: "77.2090",
    address: "Organic Farm, Delhi, India"
  },
  collectionDate: "2024-01-15T10:30:00Z",
  txHash: "0x1234567890abcdef1234567890abcdef12345678",
  status: "TESTED",
  supplyChain: [
    {
      stage: "Collection",
      date: "2024-01-15T10:30:00Z",
      location: "Organic Farm, Delhi",
      handler: "Ravi Kumar (Farmer)"
    },
    {
      stage: "Processing",
      date: "2024-01-16T14:20:00Z",
      location: "Processing Unit, Ghaziabad",
      handler: "Green Processing Ltd."
    },
    {
      stage: "Quality Testing",
      date: "2024-01-18T09:15:00Z",
      location: "AYUSH Testing Lab, Delhi",
      handler: "Dr. Priya Sharma"
    }
  ]
}

const statusColors = {
  COLLECTED: 'bg-green-500/20 text-green-300 border-green-500/30',
  PROCESSED: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  TESTED: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  TRANSPORTED: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  MANUFACTURED: 'bg-red-500/20 text-red-300 border-red-500/30'
}

export default function VerifyPage() {
  const [herbId, setHerbId] = useState('')
  const [herbData, setHerbData] = useState<HerbData | null>(null)
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!herbId.trim()) {
      setError('Please enter a valid Herb ID')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Simulate API call to blockchain
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, we'll show success if ID is "1"
      if (herbId === '1') {
        setHerbData(mockHerbData)
        setIsVerified(true)
      } else {
        setIsVerified(false)
        setError('Herb batch not found or invalid')
      }
    } catch (err) {
      setError('Failed to verify herb batch')
      setIsVerified(false)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-6"
          >
            <QrCodeIcon className="w-10 h-10 text-black" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Verify Ayurvedic Herb Authenticity
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Enter the Herb ID from the QR code to verify its authenticity and trace its complete journey from farm to formulation.
          </p>
        </div>

        {/* Verification Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-8"
        >
          <form onSubmit={handleVerify} className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-3">
                Herb Batch ID
              </label>
              <input
                type="text"
                value={herbId}
                onChange={(e) => setHerbId(e.target.value)}
                placeholder="Enter Herb ID (e.g., 1)"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-center text-lg font-mono text-white placeholder-white/50"
                disabled={loading}
              />
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-white text-black py-4 px-6 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Verifying on Blockchain...
                </div>
              ) : (
                'Verify Herb Batch'
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Verification Results */}
        {isVerified !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isVerified ? (
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                {/* Success Header */}
                <div className="text-center mb-8">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Herb Verified Successfully!</h2>
                  <p className="text-gray-600">This herb batch is authentic and traceable on the blockchain.</p>
                </div>

                {/* Herb Information */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Herb Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Batch ID:</span>
                        <span className="font-mono font-semibold">#{herbData?.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold">{herbData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Scientific Name:</span>
                        <span className="italic">{herbData?.botanicalName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quantity:</span>
                        <span>{herbData?.quantity} {herbData?.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Farmer:</span>
                        <span>{herbData?.farmer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[herbData?.status || 'COLLECTED']}`}>
                          {herbData?.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Collection Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPinIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p className="text-gray-600 text-sm">{herbData?.location.address}</p>
                          <p className="text-gray-500 text-xs font-mono">
                            {herbData?.location.latitude}, {herbData?.location.longitude}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <ClockIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Collection Date</p>
                          <p className="text-gray-600 text-sm">
                            {herbData && formatDate(herbData.collectionDate)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium text-gray-900">Blockchain Hash</p>
                          <p className="text-gray-600 text-xs font-mono break-all">
                            {herbData?.txHash}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supply Chain Timeline */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Supply Chain Journey</h3>
                  <div className="space-y-4">
                    {herbData?.supplyChain.map((stage, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                            <span className="text-sm text-gray-500">
                              {formatDate(stage.date)}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">{stage.location}</p>
                          <p className="text-gray-500 text-sm">Handled by: {stage.handler}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center">
                <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-red-800 mb-2">Verification Failed</h2>
                <p className="text-gray-600 mb-4">
                  The herb batch could not be verified. This could mean:
                </p>
                <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Invalid or incorrect Herb ID
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Herb batch not registered on blockchain
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Counterfeit or fraudulent product
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 border border-gray-700 rounded-xl p-8 mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            How Verification Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Scan QR Code</h3>
              <p className="text-gray-300 text-sm">
                Scan the QR code on the product or enter the Herb ID manually
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Blockchain Query</h3>
              <p className="text-gray-300 text-sm">
                System queries the blockchain for authentic herb data
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">View Journey</h3>
              <p className="text-gray-300 text-sm">
                See the complete traceability from farm to final product
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
