'use client'

import { PageLayout } from '@/components/PageLayout'
import { DocumentTextIcon, ShieldCheckIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function WebsitePoliciesPage() {
  const policies = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      titleHindi: 'गोपनीयता नीति',
      icon: ShieldCheckIcon,
      description: 'How we collect, use, and protect your personal information',
      descriptionHindi: 'हम आपकी व्यक्तिगत जानकारी कैसे एकत्रित, उपयोग और सुरक्षित करते हैं',
      lastUpdated: '2024-01-15'
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      titleHindi: 'सेवा की शर्तें',
      icon: DocumentTextIcon,
      description: 'Terms and conditions governing the use of our services',
      descriptionHindi: 'हमारी सेवाओं के उपयोग को नियंत्रित करने वाली शर्तें और नियम',
      lastUpdated: '2024-01-10'
    },
    {
      id: 'accessibility',
      title: 'Accessibility Policy',
      titleHindi: 'पहुंच नीति',
      icon: UserGroupIcon,
      description: 'Our commitment to making our website accessible to all users',
      descriptionHindi: 'हमारी वेबसाइट को सभी उपयोगकर्ताओं के लिए सुलभ बनाने की हमारी प्रतिबद्धता',
      lastUpdated: '2024-01-05'
    },
    {
      id: 'usage',
      title: 'Website Usage Policy',
      titleHindi: 'वेबसाइट उपयोग नीति',
      icon: GlobeAltIcon,
      description: 'Guidelines for appropriate use of government digital services',
      descriptionHindi: 'सरकारी डिजिटल सेवाओं के उचित उपयोग के लिए दिशानिर्देश',
      lastUpdated: '2024-01-01'
    }
  ]

  const guidelines = [
    'Information provided on this website is for informational purposes only',
    'Users must comply with all applicable laws and regulations',
    'Unauthorized access or misuse of systems is strictly prohibited',
    'Content accuracy is maintained to the best of our ability',
    'User data is processed in accordance with government data protection standards'
  ]

  const guidelinesHindi = [
    'इस वेबसाइट पर प्रदान की गई जानकारी केवल सूचनात्मक उद्देश्यों के लिए है',
    'उपयोगकर्ताओं को सभी लागू कानूनों और नियमों का पालन करना चाहिए',
    'सिस्टम का अनधिकृत पहुंच या दुरुपयोग सख्त वर्जित है',
    'हमारी सर्वोत्तम क्षमता के अनुसार सामग्री की सटीकता बनाए रखी जाती है',
    'उपयोगकर्ता डेटा सरकारी डेटा सुरक्षा मानकों के अनुसार संसाधित किया जाता है'
  ]

  return (
    <PageLayout
      title="Website Policies"
      titleHindi="वेबसाइट नीतियां"
      subtitle="Comprehensive policies governing the use of HerbX and Ministry of AYUSH digital services"
      subtitleHindi="हर्बएक्स और आयुष मंत्रालय डिजिटल सेवाओं के उपयोग को नियंत्रित करने वाली व्यापक नीतियां"
      breadcrumbs={[
        { name: 'Policies', href: '/website-policies' }
      ]}
    >
      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Overview</h2>
          <p className="text-gray-700 mb-4">
            The Ministry of AYUSH is committed to maintaining the highest standards of digital governance, 
            transparency, and user protection. Our policies ensure compliance with government regulations 
            and international best practices.
          </p>
          <p className="text-gray-600 text-sm">
            आयुष मंत्रालय डिजिटल गवर्नेंस, पारदर्शिता और उपयोगकर्ता सुरक्षा के उच्चतम मानकों को 
            बनाए रखने के लिए प्रतिबद्ध है। हमारी नीतियां सरकारी नियमों और अंतर्राष्ट्रीय सर्वोत्तम प्रथाओं के अनुपालन को सुनिश्चित करती हैं।
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy) => (
            <div key={policy.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <policy.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {policy.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">
                    {policy.titleHindi}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {policy.description}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {policy.descriptionHindi}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Last updated: {new Date(policy.lastUpdated).toLocaleDateString()}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View Policy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">English</h3>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">हिंदी</h3>
              <ul className="space-y-3">
                {guidelinesHindi.map((guideline, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Questions?</h2>
          <p className="text-gray-700 mb-4">
            For questions about our policies or to report policy violations, please contact our policy team.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Contact Policy Team
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Report Violation
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Disclaimer</h3>
          <p className="text-sm text-gray-600 mb-2">
            These policies are subject to change and are governed by the laws of India. 
            By using this website, you acknowledge that you have read and understood these policies.
          </p>
          <p className="text-sm text-gray-600">
            ये नीतियां परिवर्तन के अधीन हैं और भारत के कानूनों द्वारा शासित हैं। 
            इस वेबसाइट का उपयोग करके, आप स्वीकार करते हैं कि आपने इन नीतियों को पढ़ा और समझा है।
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
