'use client'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { MapPinIcon, CameraIcon } from '@heroicons/react/24/outline'

interface Location {
  latitude: string
  longitude: string
  address: string
  region: string
}

export function HerbRegistrationForm() {
  const { isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [locationLoading, setLocationLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    botanicalName: '',
    quantity: '',
    unit: 'kg',
    location: {
      latitude: '',
      longitude: '',
      address: '',
      region: ''
    } as Location,
    description: '',
    images: [] as File[]
  })

  const detectLocation = async () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by this browser.')
      return
    }

    setLocationLoading(true)
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        
        try {
          // Reverse geocoding to get address (you'd implement this with a real service)
          const address = `Coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          
          setFormData(prev => ({
            ...prev,
            location: {
              latitude: latitude.toString(),
              longitude: longitude.toString(),
              address: address,
              region: 'Auto-detected location'
            }
          }))
          
          toast.success('Location detected successfully!')
        } catch (error) {
          toast.error('Failed to get address information')
        } finally {
          setLocationLoading(false)
        }
      },
      (error) => {
        console.error('Error getting location:', error)
        toast.error('Failed to detect location. Please allow location access.')
        setLocationLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          [locationField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 3) // Limit to 3 images
    }))
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isConnected) {
      toast.error('Please connect your wallet first')
      return
    }

    // Validation
    if (!formData.name || !formData.quantity || !formData.location.latitude || !formData.location.longitude) {
      toast.error('Please fill in all required fields and detect location')
      return
    }

    setIsLoading(true)
    
    try {
      // Here you would integrate with your smart contract
      // For now, we'll simulate the transaction
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Herb batch registered successfully!')
      
      // Reset form
      setFormData({
        name: '',
        botanicalName: '',
        quantity: '',
        unit: 'kg',
        location: {
          latitude: '',
          longitude: '',
          address: '',
          region: ''
        },
        description: '',
        images: []
      })
      
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('Failed to register herb batch')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isConnected) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-white font-medium mb-4">Connect your wallet to register herbs</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Herb Name */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Herb Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g., Turmeric, Neem, Ashwagandha"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-white placeholder-gray-400"
          required
        />
      </div>

      {/* Botanical Name */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Botanical Name
        </label>
        <input
          type="text"
          name="botanicalName"
          value={formData.botanicalName}
          onChange={handleInputChange}
          placeholder="e.g., Curcuma longa, Azadirachta indica"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-white placeholder-gray-400"
        />
      </div>

      {/* Quantity */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Quantity *
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="100"
            min="0.01"
            step="0.01"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-white placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Unit
          </label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-white"
          >
            <option value="kg">Kilograms</option>
            <option value="grams">Grams</option>
            <option value="pieces">Pieces</option>
            <option value="bundles">Bundles</option>
          </select>
        </div>
      </div>

      {/* Location Detection */}
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-semibold text-white">
            Collection Location *
          </label>
          <button
            type="button"
            onClick={detectLocation}
            disabled={locationLoading}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <MapPinIcon className="w-4 h-4" />
            {locationLoading ? 'Detecting...' : 'Detect Location'}
          </button>
        </div>
        
        {formData.location.latitude && (
          <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-300">Location detected successfully!</span>
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Coordinates:</span> {formData.location.latitude}, {formData.location.longitude}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Address:</span> {formData.location.address}
            </p>
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Additional Notes
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Any additional information about collection conditions, quality, etc."
          rows={3}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 text-white placeholder-gray-400 resize-none"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Herb Images (up to 3)
        </label>
        <div className="border-2 border-dashed border-gray-600 hover:border-white rounded-lg p-6 transition-colors duration-200 bg-gray-800">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <CameraIcon className="w-10 h-10 text-gray-300 mb-2" />
            <span className="text-sm text-white font-medium">Click to upload images</span>
          </label>
          
          {formData.images.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
        className="w-full bg-white text-black py-4 px-6 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Registering on Blockchain...
          </div>
        ) : (
          'Register Herb Batch'
        )}
      </motion.button>
    </form>
  )
}
