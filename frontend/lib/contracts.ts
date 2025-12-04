/**
 * Smart Contract Integration Utilities
 * Handles interactions with the HerbTraceability contract
 */

import { ethers } from 'ethers'

// Contract ABI - only including the functions we need
export const HERB_TRACEABILITY_ABI = [
    {
        "inputs": [
            { "internalType": "string", "name": "_name", "type": "string" },
            { "internalType": "string", "name": "_botanicalName", "type": "string" },
            { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
            { "internalType": "string", "name": "_unit", "type": "string" },
            {
                "components": [
                    { "internalType": "string", "name": "latitude", "type": "string" },
                    { "internalType": "string", "name": "longitude", "type": "string" },
                    { "internalType": "string", "name": "address", "type": "string" },
                    { "internalType": "string", "name": "region", "type": "string" }
                ],
                "internalType": "struct HerbTraceability.Location",
                "name": "_location",
                "type": "tuple"
            },
            { "internalType": "string", "name": "_metadataURI", "type": "string" }
        ],
        "name": "registerHerb",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_herbId", "type": "uint256" }],
        "name": "getHerb",
        "outputs": [
            {
                "components": [
                    { "internalType": "uint256", "name": "id", "type": "uint256" },
                    { "internalType": "address", "name": "farmer", "type": "address" },
                    { "internalType": "string", "name": "name", "type": "string" },
                    { "internalType": "string", "name": "botanicalName", "type": "string" },
                    { "internalType": "uint256", "name": "quantity", "type": "uint256" },
                    { "internalType": "string", "name": "unit", "type": "string" },
                    {
                        "components": [
                            { "internalType": "string", "name": "latitude", "type": "string" },
                            { "internalType": "string", "name": "longitude", "type": "string" },
                            { "internalType": "string", "name": "address", "type": "string" },
                            { "internalType": "string", "name": "region", "type": "string" }
                        ],
                        "internalType": "struct HerbTraceability.Location",
                        "name": "collectionLocation",
                        "type": "tuple"
                    },
                    { "internalType": "uint256", "name": "collectionTimestamp", "type": "uint256" },
                    { "internalType": "enum HerbTraceability.SupplyChainStage", "name": "currentStage", "type": "uint8" },
                    { "internalType": "bool", "name": "isActive", "type": "bool" },
                    { "internalType": "string", "name": "metadataURI", "type": "string" }
                ],
                "internalType": "struct HerbTraceability.Herb",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalHerbs",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_farmer", "type": "address" }],
        "name": "getFarmerHerbs",
        "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
        "stateMutability": "view",
        "type": "function"
    }
] as const

export interface Location {
    latitude: string
    longitude: string
    address: string
    region: string
}

export interface HerbData {
    id: bigint
    farmer: string
    name: string
    botanicalName: string
    quantity: bigint
    unit: string
    collectionLocation: Location
    collectionTimestamp: bigint
    currentStage: number
    isActive: boolean
    metadataURI: string
}

/**
 * Register herb on blockchain with IPFS metadata hash
 */
export async function registerHerbOnBlockchain(
    signer: ethers.Signer,
    contractAddress: string,
    name: string,
    botanicalName: string,
    quantity: string,
    unit: string,
    location: Location,
    metadataURI: string
): Promise<{ herbId: number; txHash: string }> {
    try {
        const contract = new ethers.Contract(contractAddress, HERB_TRACEABILITY_ABI, signer)

        // Convert quantity to wei (assuming it's in the smallest unit)
        const quantityBigInt = ethers.parseUnits(quantity, 0)

        const tx = await contract.registerHerb(
            name,
            botanicalName,
            quantityBigInt,
            unit,
            location,
            metadataURI
        )

        const receipt = await tx.wait()

        // Extract herb ID from transaction events
        // The registerHerb function returns the herbId
        const herbId = Number(receipt.logs[0]?.topics[1] || 0)

        return {
            herbId,
            txHash: receipt.hash
        }
    } catch (error) {
        console.error('Error registering herb on blockchain:', error)
        throw new Error('Failed to register herb on blockchain')
    }
}

/**
 * Get herb data from blockchain
 */
export async function getHerbFromBlockchain(
    provider: ethers.Provider,
    contractAddress: string,
    herbId: number
): Promise<HerbData | null> {
    try {
        const contract = new ethers.Contract(contractAddress, HERB_TRACEABILITY_ABI, provider)
        const herbData = await contract.getHerb(herbId)
        return herbData as any as HerbData
    } catch (error) {
        console.error('Error fetching herb from blockchain:', error)
        return null
    }
}

/**
 * Get total number of herbs registered
 */
export async function getTotalHerbs(
    provider: ethers.Provider,
    contractAddress: string
): Promise<number> {
    try {
        const contract = new ethers.Contract(contractAddress, HERB_TRACEABILITY_ABI, provider)
        const total = await contract.getTotalHerbs()
        return Number(total)
    } catch (error) {
        console.error('Error fetching total herbs:', error)
        return 0
    }
}

/**
 * Get all herbs for a specific farmer
 */
export async function getFarmerHerbs(
    provider: ethers.Provider,
    contractAddress: string,
    farmerAddress: string
): Promise<number[]> {
    try {
        const contract = new ethers.Contract(contractAddress, HERB_TRACEABILITY_ABI, provider)
        const herbIds = await contract.getFarmerHerbs(farmerAddress)
        return herbIds.map((id: bigint) => Number(id))
    } catch (error) {
        console.error('Error fetching farmer herbs:', error)
        return []
    }
}
