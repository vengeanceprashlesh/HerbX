import { HerbRegistrationForm } from '@/components/HerbRegistrationForm'
import { WalletConnection } from '@/components/WalletConnection'
import { HerbList } from '@/components/HerbList'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AyurTrace
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 max-w-3xl mx-auto">
              Blockchain-powered traceability for Ayurvedic herbs from farm to formulation
            </p>
            <div className="flex justify-center">
              <WalletConnection />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div className="lg:order-1">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                  Register New Herb Batch
                </h2>
                <HerbRegistrationForm />
              </div>
            </div>

            {/* Herb List */}
            <div className="lg:order-2">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white text-lg font-bold">#</span>
                  </div>
                  Your Registered Herbs
                </h2>
                <HerbList />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose AyurTrace?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Verified</h3>
              <p className="text-gray-700 leading-relaxed">Immutable records ensure complete transparency and trust in the supply chain.</p>
            </div>
            
            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Geo-Tagged</h3>
              <p className="text-gray-700 leading-relaxed">GPS coordinates track herbs from their exact collection point to final product.</p>
            </div>
            
            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">QR Code Access</h3>
              <p className="text-gray-700 leading-relaxed">Consumers can verify authenticity by scanning QR codes on products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
