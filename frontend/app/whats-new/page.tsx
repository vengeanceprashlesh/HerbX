'use client'

import { PageLayout } from '@/components/PageLayout'
import { SparklesIcon, MegaphoneIcon, DocumentIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function WhatsNewPage() {
  const updates = [
    {
      id: 1,
      title: 'HerbX Digital Certification System Launch',
      titleHindi: 'हर्बएक्स डिजिटल प्रमाणीकरण प्रणाली लॉन्च',
      date: '2024-03-10',
      category: 'Platform Update',
      categoryHindi: 'प्लेटफॉर्म अपडेट',
      description: 'New blockchain-based digital certification system for herbal medicines and Ayurvedic products.',
      descriptionHindi: 'हर्बल दवाओं और आयुर्वेदिक उत्पादों के लिए नई ब्लॉकचेन-आधारित डिजिटल प्रमाणीकरण प्रणाली।',
      impact: 'High',
      featured: true
    },
    {
      id: 2,
      title: 'New Quality Standards for Traditional Medicines',
      titleHindi: 'पारंपरिक दवाओं के लिए नए गुणवत्ता मानक',
      date: '2024-03-05',
      category: 'Policy Update',
      categoryHindi: 'नीति अपडेट',
      description: 'Updated quality control parameters and testing protocols for traditional medicine manufacturing.',
      descriptionHindi: 'पारंपरिक दवा निर्माण के लिए अद्यतन गुणवत्ता नियंत्रण पैरामीटर और परीक्षण प्रोटोकॉल।',
      impact: 'Medium',
      featured: false
    },
    {
      id: 3,
      title: 'AI-Powered Herb Authentication Module',
      titleHindi: 'एआई-संचालित जड़ी-बूटी प्रमाणीकरण मॉड्यूल',
      date: '2024-02-28',
      category: 'Technology',
      categoryHindi: 'प्रौद्योगिकी',
      description: 'Advanced machine learning algorithms for automated herb species identification and quality assessment.',
      descriptionHindi: 'स्वचालित जड़ी-बूटी प्रजाति पहचान और गुणवत्ता मूल्यांकन के लिए उन्नत मशीन लर्निंग एल्गोरिदम।',
      impact: 'High',
      featured: true
    },
    {
      id: 4,
      title: 'Mobile App Version 2.0 Released',
      titleHindi: 'मोबाइल ऐप संस्करण 2.0 रिलीज़',
      date: '2024-02-20',
      category: 'Mobile Update',
      categoryHindi: 'मोबाइल अपडेट',
      description: 'Enhanced user interface with offline functionality and improved performance.',
      descriptionHindi: 'ऑफलाइन कार्यक्षमता और बेहतर प्रदर्शन के साथ बेहतर उपयोगकर्ता इंटरफ़ेस।',
      impact: 'Medium',
      featured: false
    }
  ]

  const categoryColors = {
    'Platform Update': 'bg-blue-100 text-blue-800',
    'Policy Update': 'bg-green-100 text-green-800',
    'Technology': 'bg-purple-100 text-purple-800',
    'Mobile Update': 'bg-orange-100 text-orange-800'
  }

  const impactColors = {
    'High': 'bg-red-100 text-red-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Low': 'bg-gray-100 text-gray-800'
  }

  return (
    <PageLayout
      title="What's New"
      titleHindi="क्या नया है"
      subtitle="Latest updates, announcements, and improvements to HerbX and AYUSH services"
      subtitleHindi="हर्बएक्स और आयुष सेवाओं में नवीनतम अपडेट, घोषणाएं और सुधार"
      breadcrumbs={[
        { name: 'Updates', href: '/whats-new' }
      ]}
    >
      <div className="space-y-8">
        {/* Featured Updates */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8">
          <div className="flex items-center space-x-3 mb-4">
            <SparklesIcon className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Featured Updates</h2>
          </div>
          <p className="text-blue-100 mb-6">
            Discover the most significant enhancements and new features that are transforming 
            traditional medicine management and quality assurance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {updates.filter(update => update.featured).map(update => (
              <div key={update.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
                <p className="text-blue-100 text-sm mb-3">{update.titleHindi}</p>
                <p className="text-sm text-blue-50">{update.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Updates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                All Categories
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Platform
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Policy
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {updates.map(update => (
              <div key={update.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[update.category as keyof typeof categoryColors]}`}>
                        {update.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${impactColors[update.impact as keyof typeof impactColors]}`}>
                        {update.impact} Impact
                      </span>
                      {update.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {update.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-3">
                      {update.titleHindi}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(update.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-2">{update.description}</p>
                <p className="text-gray-600 text-sm mb-4">{update.descriptionHindi}</p>
                
                <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Updated */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <MegaphoneIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-700 mb-4">
                Subscribe to our newsletter to receive the latest updates about HerbX platform enhancements,
                policy changes, and new features directly in your inbox.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Subscribe to Newsletter
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors border border-gray-300">
                  RSS Feed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Archive Link */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <DocumentIcon className="w-5 h-5" />
            <span>View Update Archive</span>
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
