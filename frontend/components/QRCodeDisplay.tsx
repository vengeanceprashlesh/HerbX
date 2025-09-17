'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'qrcode'
import { XMarkIcon, LinkIcon, ShareIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

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

interface QRCodeDisplayProps {
  herb: Herb
  onClose: () => void
}

export function QRCodeDisplay({ herb, onClose }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate verification URL
  const verificationUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/verify/${herb.id}?tx=${herb.txHash}`
  
  // Create blockchain explorer link
  const explorerUrl = `https://sepolia.etherscan.io/tx/${herb.txHash}`

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, verificationUrl, {
        width: 280,
        margin: 2,
        color: {
          dark: '#1f2937',
          light: '#ffffff',
        },
      })
    }
  }, [verificationUrl])

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(message)
    }).catch(() => {
      toast.error('Failed to copy to clipboard')
    })
  }

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a')
      link.download = `ayurtrace-herb-${herb.id}-qr.png`
      link.href = canvasRef.current.toDataURL()
      link.click()
      toast.success('QR code downloaded successfully!')
    }
  }

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AyurTrace - ${herb.name} Verification`,
          text: `Verify the authenticity of ${herb.name} on AyurTrace blockchain`,
          url: verificationUrl
        })
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error)
        }
      }
    } else {
      copyToClipboard(verificationUrl, 'Verification link copied to clipboard!')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Verification QR Code</h2>
            <p className="text-sm text-gray-600">{herb.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* QR Code */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center mb-6">
            <canvas 
              ref={canvasRef}
              className="mx-auto mb-4"
            />
            <p className="text-sm text-gray-800 font-medium mb-4">
              Scan this QR code to verify the authenticity and trace the complete journey of this herb batch
            </p>
          </div>

          {/* Herb Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Herb Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Batch ID:</span>
                <span className="font-mono font-bold text-gray-900">#{herb.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Name:</span>
                <span className="font-semibold text-gray-900">{herb.name}</span>
              </div>
              {herb.botanicalName && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Scientific Name:</span>
                  <span className="italic text-gray-800">{herb.botanicalName}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <span className="font-semibold text-gray-900">{herb.quantity} {herb.unit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Status:</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 border border-green-200 rounded-full text-xs font-bold">
                  {herb.status}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium">Location:</span>
                <span className="text-right max-w-[150px] font-medium text-gray-900">{herb.location.address}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadQR}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-7 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Download
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={shareQR}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
              >
                <ShareIcon className="w-4 h-4" />
                Share
              </motion.button>
            </div>

            <button
              onClick={() => copyToClipboard(verificationUrl, 'Verification link copied!')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              Copy Verification Link
            </button>

            <button
              onClick={() => window.open(explorerUrl, '_blank')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-xl font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              View on Blockchain Explorer
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
