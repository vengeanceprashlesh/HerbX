/**
 * IPFS Integration using Pinata
 * Handles uploading images and metadata to IPFS
 */

import { PinataSDK } from "pinata"

// Initialize Pinata SDK
const pinata = new PinataSDK({
    pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT || "",
    pinataGateway: process.env.NEXT_PUBLIC_PINATA_GATEWAY || "gateway.pinata.cloud"
})

export interface HerbMetadata {
    name: string
    botanicalName: string
    quantity: string
    unit: string
    location: {
        latitude: string
        longitude: string
        address: string
        region: string
    }
    description: string
    imageUrls: string[] // IPFS URLs of uploaded images
    uploadedAt: number
    farmerAddress: string
}

/**
 * Upload a single image to IPFS via Pinata
 */
export async function uploadImageToIPFS(file: File): Promise<string> {
    try {
        const upload = await pinata.upload.file(file)
        const ipfsUrl = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${upload.IpfsHash}`
        return ipfsUrl
    } catch (error) {
        console.error('Error uploading image to IPFS:', error)
        throw new Error('Failed to upload image to IPFS')
    }
}

/**
 * Upload multiple images to IPFS
 */
export async function uploadImagesToIPFS(files: File[]): Promise<string[]> {
    try {
        const uploadPromises = files.map(file => uploadImageToIPFS(file))
        const imageUrls = await Promise.all(uploadPromises)
        return imageUrls
    } catch (error) {
        console.error('Error uploading images to IPFS:', error)
        throw new Error('Failed to upload images to IPFS')
    }
}

/**
 * Upload herb metadata JSON to IPFS
 */
export async function uploadMetadataToIPFS(metadata: HerbMetadata): Promise<string> {
    try {
        const upload = await pinata.upload.json(metadata)
        return upload.IpfsHash
    } catch (error) {
        console.error('Error uploading metadata to IPFS:', error)
        throw new Error('Failed to upload metadata to IPFS')
    }
}

/**
 * Fetch metadata from IPFS using hash
 */
export async function fetchMetadataFromIPFS(ipfsHash: string): Promise<HerbMetadata | null> {
    try {
        const url = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${ipfsHash}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Failed to fetch metadata from IPFS')
        }

        const metadata: HerbMetadata = await response.json()
        return metadata
    } catch (error) {
        console.error('Error fetching metadata from IPFS:', error)
        return null
    }
}

/**
 * Get IPFS gateway URL for a hash
 */
export function getIPFSUrl(hash: string): string {
    return `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${hash}`
}
