# HerbX - Blockchain-Based Ayurvedic Herb Traceability System

![HerbX Logo](https://img.shields.io/badge/HerbX-Blockchain%20Traceability-green?style=for-the-badge)
![Blockchain](https://img.shields.io/badge/Blockchain-Ethereum-blue?style=flat-square)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-black?style=flat-square)
![Smart Contract](https://img.shields.io/badge/Smart%20Contract-Solidity-purple?style=flat-square)

## 🌿 Overview

HerbX is a revolutionary blockchain-based traceability system designed specifically for Ayurvedic herbs. Our platform ensures complete transparency and authenticity in the herb supply chain, from farm to consumer, leveraging the power of blockchain technology.

## ✨ Key Features

- **🔗 Blockchain Traceability**: Complete supply chain tracking using Ethereum blockchain
- **📱 QR Code Verification**: Easy verification through QR code scanning
- **👨‍🌾 Multi-Stakeholder Support**: Farmers, processors, manufacturers, and consumers
- **🔒 Immutable Records**: Tamper-proof tracking of herb journey
- **🎨 Accessible UI**: High contrast, accessible user interface
- **📍 Location Tracking**: GPS coordinates for origin verification
- **⏰ Real-time Updates**: Live status updates throughout the supply chain

## 🏗️ Architecture

### Smart Contract
- **Language**: Solidity
- **Network**: Ethereum (Sepolia testnet)
- **Features**: Herb registration, status tracking, ownership management

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Wallet Integration**: Wagmi + RainbowKit
- **QR Generation**: qrcode library
- **UI Components**: Framer Motion for animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MetaMask wallet
- Ethereum testnet ETH (Sepolia)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vengeanceprashlesh/HerbX.git
   cd HerbX
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file in root directory
   PRIVATE_KEY=your_ethereum_private_key
   SEPOLIA_RPC_URL=your_sepolia_rpc_url
   ```

4. **Deploy smart contract**
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

5. **Start the frontend**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Usage

### For Farmers
1. Connect your MetaMask wallet
2. Register herbs with location and details
3. Generate QR codes for tracking
4. Update herb status as it moves through supply chain

### For Consumers
1. Scan QR code on herb packaging
2. View complete traceability information
3. Verify authenticity and origin
4. Access farmer and processing details

### For Supply Chain Partners
1. Update herb status during processing
2. Add processing information
3. Transfer ownership in supply chain
4. Maintain transparent records

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Smart Contracts | Solidity | Blockchain logic and data storage |
| Backend | Hardhat | Smart contract deployment and testing |
| Frontend | Next.js 15 | Modern React framework |
| Styling | Tailwind CSS | Utility-first CSS framework |
| Wallet Integration | Wagmi + RainbowKit | Ethereum wallet connection |
| QR Codes | qrcode.js | QR code generation and scanning |
| Animations | Framer Motion | Smooth UI animations |
| Blockchain | Ethereum | Decentralized ledger |

## 📱 Screenshots

### Main Dashboard
- Clean, accessible interface with high contrast
- Herb registration and management
- Real-time status updates

### QR Code Generation
- Instant QR code generation for each herb batch
- Downloadable and shareable QR codes
- Direct blockchain verification links

### Verification Page
- Complete herb journey visualization
- Farmer information and location
- Processing history and current status

## 🔧 Smart Contract Functions

```solidity
// Register new herb batch
function registerHerb(
    string memory _name,
    string memory _botanicalName,
    uint256 _quantity,
    string memory _unit,
    string memory _latitude,
    string memory _longitude,
    string memory _address
) public

// Update herb status
function updateHerbStatus(uint256 _herbId, HerbStatus _status) public

// Get herb information
function getHerb(uint256 _herbId) public view returns (Herb memory)
```

## 🌍 Environmental Impact

HerbX contributes to sustainable Ayurvedic practices by:
- Preventing counterfeit herbs from entering the market
- Ensuring sustainable farming practices
- Reducing waste through better supply chain management
- Supporting small-scale farmers with direct market access

## 🛡️ Security Features

- **Immutable Records**: All data stored on blockchain
- **Multi-signature Validation**: Critical operations require multiple confirmations
- **Access Control**: Role-based permissions for different stakeholders
- **Audit Trail**: Complete history of all transactions

## 🚀 Future Roadmap

- [ ] Mobile application (iOS/Android)
- [ ] IoT sensor integration for real-time monitoring
- [ ] AI-powered quality assessment
- [ ] Integration with more blockchain networks
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Government regulatory compliance tools

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Prashlesh** - Lead Developer & Blockchain Architect
- GitHub: [@vengeanceprashlesh](https://github.com/vengeanceprashlesh)

## 📞 Support

For support and queries:
- Create an issue on GitHub
- Email: [your-email@domain.com]
- Join our Discord community

## 🙏 Acknowledgments

- Ethereum Foundation for blockchain infrastructure
- Next.js team for the amazing framework
- Tailwind CSS for styling utilities
- All contributors and testers

---

**Made with ❤️ for a transparent and authentic Ayurvedic ecosystem**

[![GitHub stars](https://img.shields.io/github/stars/vengeanceprashlesh/HerbX?style=social)](https://github.com/vengeanceprashlesh/HerbX/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/vengeanceprashlesh/HerbX?style=social)](https://github.com/vengeanceprashlesh/HerbX/network/members)
