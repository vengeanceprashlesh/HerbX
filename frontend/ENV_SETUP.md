# HerbX Environment Configuration

## Required Environment Variables

Create a `.env.local` file in the `frontend` directory with the following variables:

### 1. Pinata IPFS Configuration
```bash
NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt_here
NEXT_PUBLIC_PINATA_GATEWAY=your-gateway.mypinata.cloud
```

**Get your Pinata credentials:**
1. Sign up at https://app.pinata.cloud
2. Go to API Keys section
3. Create a new JWT key
4. Copy your dedicated gateway domain

### 2. Smart Contract Configuration
```bash
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
```

Deploy your contract and paste the address here.

### 3. Blockchain RPC (Optional)
```bash
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
```

For reading blockchain data without wallet connection.

### 4. WalletConnect Project ID
```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

Get this from https://cloud.walletconnect.com

## Example .env.local

```bash
NEXT_PUBLIC_PINATA_JWT=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_PINATA_GATEWAY=bronze-cheap-swan-420.mypinata.cloud
NEXT_PUBLIC_CONTRACT_ADDRESS=0x1234567890123456789012345678901234567890
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=abc123def456
```
