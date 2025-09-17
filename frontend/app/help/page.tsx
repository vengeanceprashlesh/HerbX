'use client'

import { PageLayout } from '@/components/PageLayout'
import { QuestionMarkCircleIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon, VideoCameraIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function HelpPage() {
  const helpCategories = [
    {
      title: 'Getting Started',
      titleHindi: 'आरंभ करना',
      icon: '🚀',
      articles: [
        { title: 'How to Register on HerbX', titleHindi: 'हर्बएक्स पर पंजीकरण कैसे करें' },
        { title: 'Account Setup Guide', titleHindi: 'खाता सेटअप गाइड' },
        { title: 'First Time User Tutorial', titleHindi: 'पहली बार उपयोगकर्ता ट्यूटोरियल' }
      ]
    },
    {
      title: 'Herb Registration',
      titleHindi: 'जड़ी-बूटी पंजीकरण',
      icon: '🌿',
      articles: [
        { title: 'How to Register New Herbs', titleHindi: 'नई जड़ी-बूटी कैसे पंजीकृत करें' },
        { title: 'Required Documentation', titleHindi: 'आवश्यक दस्तावेज' },
        { title: 'Quality Standards Guide', titleHindi: 'गुणवत्ता मानक गाइड' }
      ]
    },
    {
      title: 'Certification Process',
      titleHindi: 'प्रमाणीकरण प्रक्रिया',
      icon: '🏆',
      articles: [
        { title: 'Digital Certificate Generation', titleHindi: 'डिजिटल प्रमाणपत्र निर्माण' },
        { title: 'Certificate Verification', titleHindi: 'प्रमाणपत्र सत्यापन' },
        { title: 'Renewal Process', titleHindi: 'नवीकरण प्रक्रिया' }
      ]
    },
    {
      title: 'Technical Support',
      titleHindi: 'तकनीकी सहायता',
      icon: '🔧',
      articles: [
        { title: 'System Requirements', titleHindi: 'सिस्टम आवश्यकताएं' },
        { title: 'Browser Compatibility', titleHindi: 'ब्राउज़र संगतता' },
        { title: 'Troubleshooting Guide', titleHindi: 'समस्या निवारण गाइड' }
      ]
    }
  ]

  const supportOptions = [
    {
      title: 'Live Chat',
      titleHindi: 'लाइव चैट',
      description: 'Get instant help from our support team',
      descriptionHindi: 'हमारी सहायता टीम से तत्काल सहायता प्राप्त करें',
      icon: ChatBubbleLeftRightIcon,
      availability: '9 AM - 6 PM IST',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      titleHindi: 'फोन सपोर्ट',
      description: 'Call us for immediate assistance',
      descriptionHindi: 'तत्काल सहायता के लिए हमें कॉल करें',
      icon: PhoneIcon,
      availability: '+91-11-2649-4200',
      action: 'Call Now'
    },
    {
      title: 'Email Support',
      titleHindi: 'ईमेल सपोर्ट',
      description: 'Send us detailed queries via email',
      descriptionHindi: 'ईमेल के माध्यम से हमें विस्तृत प्रश्न भेजें',
      icon: EnvelopeIcon,
      availability: 'herbx@ayush.gov.in',
      action: 'Send Email'
    },
    {
      title: 'Video Tutorials',
      titleHindi: 'वीडियो ट्यूटोरियल',
      description: 'Watch step-by-step video guides',
      descriptionHindi: 'चरण-दर-चरण वीडियो गाइड देखें',
      icon: VideoCameraIcon,
      availability: '50+ Videos Available',
      action: 'Watch Videos'
    }
  ]

  const faqs = [
    {
      question: 'How do I register a new herbal product?',
      questionHindi: 'मैं एक नया हर्बल उत्पाद कैसे पंजीकृत करूं?',
      answer: 'To register a new herbal product, log into your HerbX account, navigate to "Register New Product", fill in the required details including product composition, manufacturing details, and upload necessary certificates.',
      answerHindi: 'एक नया हर्बल उत्पाद पंजीकृत करने के लिए, अपने हर्बएक्स खाते में लॉग इन करें, "नया उत्पाद पंजीकृत करें" पर जाएं, उत्पाद संरचना, निर्माण विवरण सहित आवश्यक विवरण भरें और आवश्यक प्रमाणपत्र अपलोड करें।'
    },
    {
      question: 'What documents are required for herb registration?',
      questionHindi: 'जड़ी-बूटी पंजीकरण के लिए कौन से दस्तावेज आवश्यक हैं?',
      answer: 'Required documents include: Manufacturing license, Product composition details, Quality test certificates, Ayurvedic/Traditional medicine practitioner certificate, and Company registration documents.',
      answerHindi: 'आवश्यक दस्तावेजों में शामिल हैं: निर्माण लाइसेंस, उत्पाद संरचना विवरण, गुणवत्ता परीक्षण प्रमाणपत्र, आयुर्वेदिक/पारंपरिक चिकित्सा चिकित्सक प्रमाणपत्र, और कंपनी पंजीकरण दस्तावेज।'
    },
    {
      question: 'How long does the certification process take?',
      questionHindi: 'प्रमाणीकरण प्रक्रिया में कितना समय लगता है?',
      answer: 'The certification process typically takes 7-14 business days after all required documents are submitted and verified. Emergency certifications can be processed within 24-48 hours.',
      answerHindi: 'आमतौर पर सभी आवश्यक दस्तावेज जमा और सत्यापित होने के बाद प्रमाणीकरण प्रक्रिया में 7-14 कार्य दिवस लगते हैं। आपातकालीन प्रमाणीकरण 24-48 घंटों के भीतर संसाधित किया जा सकता है।'
    }
  ]

  return (
    <PageLayout
      title="Help & Support"
      titleHindi="सहायता और समर्थन"
      subtitle="Find answers to your questions and get the support you need for HerbX"
      subtitleHindi="अपने प्रश्नों के उत्तर खोजें और हर्बएक्स के लिए आवश्यक सहायता प्राप्त करें"
      breadcrumbs={[
        { name: 'Help', href: '/help' }
      ]}
    >
      <div className="space-y-8">
        {/* Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{option.titleHindi}</p>
              <p className="text-gray-700 text-sm mb-2">{option.description}</p>
              <p className="text-xs text-gray-500 mb-3">{option.availability}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Help Categories */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Help Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.titleHindi}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="border-l-2 border-blue-200 pl-4 py-2 hover:border-blue-400 transition-colors cursor-pointer">
                      <p className="text-gray-800 font-medium">{article.title}</p>
                      <p className="text-sm text-gray-600">{article.titleHindi}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-8">
            <QuestionMarkCircleIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h3>
                <p className="text-gray-600 mb-3">{faq.questionHindi}</p>
                <p className="text-gray-700 mb-2">{faq.answer}</p>
                <p className="text-gray-600 text-sm">{faq.answerHindi}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View All FAQs
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg font-medium transition-colors border border-gray-300 flex items-center space-x-2">
              <DocumentTextIcon className="w-5 h-5" />
              <span>Download User Manual</span>
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg font-medium transition-colors border border-gray-300 flex items-center space-x-2">
              <VideoCameraIcon className="w-5 h-5" />
              <span>Watch Tutorial Videos</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">HerbX Platform</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-600 text-sm font-medium">Operational</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Certification Services</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-600 text-sm font-medium">Operational</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Mobile App</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-600 text-sm font-medium">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
