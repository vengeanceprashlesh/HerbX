'use client'

import { PageLayout } from '@/components/PageLayout'
import { ShieldCheckIcon, EyeIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      titleHindi="गोपनीयता नीति"
      subtitle="How we collect, use, and protect your personal information on HerbX platform"
      subtitleHindi="हम हर्बएक्स प्लेटफॉर्म पर आपकी व्यक्तिगत जानकारी कैसे एकत्रित, उपयोग और सुरक्षित करते हैं"
      breadcrumbs={[
        { name: 'Privacy Policy', href: '/privacy-policy' }
      ]}
    >
      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Privacy & Data Protection</h2>
              <p className="text-blue-800 mb-2">
                The Ministry of AYUSH is committed to protecting your privacy and ensuring the security of your personal information. 
                This privacy policy explains how we collect, use, and safeguard your data when you use the HerbX platform.
              </p>
              <p className="text-blue-700 text-sm">
                आयुष मंत्रालय आपकी गोपनीयता की रक्षा और आपकी व्यक्तिगत जानकारी की सुरक्षा सुनिश्चित करने के लिए प्रतिबद्ध है। 
                यह गोपनीयता नीति बताती है कि जब आप हर्बएक्स प्लेटफॉर्म का उपयोग करते हैं तो हम आपके डेटा को कैसे एकत्रित, उपयोग और सुरक्षित करते हैं।
              </p>
              <p className="text-xs text-blue-600 mt-3"><strong>Last Updated:</strong> January 1, 2024</p>
            </div>
          </div>
        </div>

        {/* Information Collection */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <EyeIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Name, email address, and phone number</li>
                <li>Business registration details and licenses</li>
                <li>Professional credentials and certifications</li>
                <li>Physical and billing addresses</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                व्यक्तिगत जानकारी में नाम, ईमेल पता, फोन नंबर, व्यावसायिक पंजीकरण विवरण, और व्यावसायिक प्रमाण-पत्र शामिल हैं।
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>IP address, browser type, and device information</li>
                <li>Usage patterns, page views, and session duration</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and system performance data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Product composition and manufacturing details</li>
                <li>Quality control certificates and test reports</li>
                <li>Supply chain and distribution information</li>
                <li>Compliance and regulatory documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <DocumentTextIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process herb registrations and certifications</li>
                <li>Verify identity and business credentials</li>
                <li>Provide customer support and technical assistance</li>
                <li>Send important updates and notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Monitor product quality and compliance</li>
                <li>Conduct safety and efficacy assessments</li>
                <li>Track supply chain transparency</li>
                <li>Generate regulatory reports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <LockClosedIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security Measures</h2>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🔐 Encryption</h3>
              <p className="text-gray-700 text-sm">All data transmission is encrypted using industry-standard SSL/TLS protocols.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏛️ Government Infrastructure</h3>
              <p className="text-gray-700 text-sm">Data is stored in secure government-approved data centers with 24/7 monitoring.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">👥 Access Controls</h3>
              <p className="text-gray-700 text-sm">Strict role-based access controls ensure only authorized personnel can access your data.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📋 Audit Trails</h3>
              <p className="text-gray-700 text-sm">Comprehensive logging and audit trails track all data access and modifications.</p>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We may share your information with:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Regulatory authorities for compliance verification</li>
                <li>Authorized testing laboratories for quality assessment</li>
                <li>Law enforcement agencies when legally required</li>
                <li>Third-party service providers under strict confidentiality agreements</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> We will never sell your personal information to third parties for marketing purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Request data deletion (subject to legal requirements)</li>
                <li>Download your data in a portable format</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Opt-out of marketing communications</li>
                <li>Choose notification preferences</li>
                <li>Control cookie settings</li>
                <li>Manage consent preferences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cookies Policy */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Policy</h3>
          <p className="text-gray-700 mb-3">
            We use cookies and similar technologies to improve your experience, analyze usage patterns, and provide personalized content. 
            You can control cookie preferences through your browser settings.
          </p>
          <p className="text-gray-600 text-sm">
            हम आपके अनुभव को बेहतर बनाने, उपयोग पैटर्न का विश्लेषण करने और व्यक्तिगत सामग्री प्रदान करने के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं।
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Privacy Questions?</h3>
          <p className="text-blue-800 mb-4">
            For questions about this privacy policy or to exercise your privacy rights, please contact our Data Protection Officer.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-blue-700">📧 Email: privacy@ayush.gov.in</p>
            <p className="text-blue-700">📞 Phone: +91-11-2649-4200</p>
            <p className="text-blue-700">📍 Address: Ministry of AYUSH, Shastri Bhawan, New Delhi - 110001</p>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600">
            This privacy policy is governed by the laws of India and is subject to change. 
            We will notify users of any significant updates to this policy.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
