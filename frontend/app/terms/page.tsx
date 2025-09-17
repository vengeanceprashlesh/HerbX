'use client'

import { PageLayout } from '@/components/PageLayout'
import { DocumentTextIcon, ScaleIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms of Use"
      titleHindi="उपयोग की शर्तें"
      subtitle="Terms and conditions governing the use of HerbX platform and services"
      subtitleHindi="हर्बएक्स प्लेटफॉर्म और सेवाओं के उपयोग को नियंत्रित करने वाली शर्तें और नियम"
      breadcrumbs={[
        { name: 'Terms of Use', href: '/terms' }
      ]}
    >
      <div className="space-y-8">
        {/* Terms Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <ScaleIcon className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Terms & Conditions</h2>
              <p className="text-blue-800 mb-2">
                By accessing and using the HerbX platform provided by the Ministry of AYUSH, Government of India, 
                you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <p className="text-blue-700 text-sm">
                आयुष मंत्रालय, भारत सरकार द्वारा प्रदान किए गए हर्बएक्स प्लेटफॉर्म का उपयोग और पहुंच करके, 
                आप निम्नलिखित उपयोग की शर्तों और नियमों का पालन करने और उनसे बाध्य होने के लिए सहमत हैं।
              </p>
              <p className="text-xs text-blue-600 mt-3"><strong>Effective Date:</strong> January 1, 2024</p>
            </div>
          </div>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              These Terms of Use constitute a legally binding agreement between you and the Ministry of AYUSH. 
              If you do not agree to these terms, please do not use the HerbX platform.
            </p>
            <p className="text-gray-600 text-sm">
              ये उपयोग की शर्तें आपके और आयुष मंत्रालय के बीच एक कानूनी रूप से बाध्यकारी समझौता है। 
              यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हर्बएक्स प्लेटफॉर्म का उपयोग न करें।
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">By using HerbX, you acknowledge that you:</h3>
              <ul className="list-disc list-inside space-y-1 text-green-700 text-sm ml-4">
                <li>Have read and understood these terms</li>
                <li>Are legally authorized to enter into this agreement</li>
                <li>Will comply with all applicable laws and regulations</li>
                <li>Accept responsibility for your use of the platform</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Use */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <DocumentTextIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Platform Usage</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Register and certify herbal products and traditional medicines</li>
                <li>Access quality control and compliance information</li>
                <li>Utilize supply chain tracking and verification services</li>
                <li>Generate and download digital certificates</li>
                <li>Access educational resources and guidelines</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-2 text-red-700 ml-4">
                  <li>Providing false or misleading information</li>
                  <li>Attempting to circumvent security measures</li>
                  <li>Unauthorized access to other users' accounts</li>
                  <li>Using the platform for illegal activities</li>
                  <li>Reverse engineering or copying the platform</li>
                  <li>Interfering with platform operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Management</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintain accurate and up-to-date information</li>
                <li>Keep login credentials secure and confidential</li>
                <li>Notify us of unauthorized account access</li>
                <li>Use only one account per user/organization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Accuracy</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ensure all submitted information is accurate</li>
                <li>Provide authentic supporting documents</li>
                <li>Update information when changes occur</li>
                <li>Verify data before submission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Regulatory Requirements</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ministry of AYUSH Regulations</h3>
              <p className="text-gray-700 text-sm">
                All users must comply with AYUSH ministry regulations, guidelines, and quality standards 
                for traditional medicine manufacturing and distribution.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Quality Standards</h3>
              <p className="text-gray-700 text-sm">
                Products registered on HerbX must meet prescribed quality, safety, and efficacy standards 
                as defined by regulatory authorities.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Documentation Requirements</h3>
              <p className="text-gray-700 text-sm">
                Users must maintain and provide accurate documentation including licenses, certificates, 
                and test reports as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-3 mb-6">
            <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Disclaimers</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Service Availability</h3>
              <p className="text-yellow-700 text-sm">
                While we strive for continuous availability, the HerbX platform may experience downtime 
                for maintenance, updates, or technical issues. We do not guarantee uninterrupted service.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Information Accuracy</h3>
              <p className="text-gray-700 text-sm">
                While we maintain quality controls, users are responsible for verifying the accuracy 
                of information provided on the platform. The Ministry of AYUSH is not liable for user-generated content.
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              The HerbX platform, including its design, functionality, and content, is owned by the 
              Government of India and protected by applicable intellectual property laws.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Government Content</h3>
                <p className="text-blue-700 text-sm">
                  All government-generated content, logos, and trademarks remain property of the Ministry of AYUSH.
                </p>
              </div>
              <div className="border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">User Content</h3>
                <p className="text-green-700 text-sm">
                  Users retain rights to their submitted content but grant the government necessary licenses for platform operation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
          <p className="text-gray-700 mb-3">
            The Ministry of AYUSH shall not be liable for any direct, indirect, incidental, special, 
            consequential, or punitive damages arising from your use of the HerbX platform.
          </p>
          <p className="text-gray-600 text-sm">
            आयुष मंत्रालय हर्बएक्स प्लेटफॉर्म के आपके उपयोग से उत्पन्न होने वाले किसी भी प्रत्यक्ष, अप्रत्यक्ष, 
            आकस्मिक, विशेष, परिणामी, या दंडात्मक नुकसान के लिए उत्तरदायी नहीं होगा।
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
          <p className="text-gray-700 mb-2">
            These Terms of Use are governed by the laws of India. Any disputes shall be subject to the 
            exclusive jurisdiction of courts in New Delhi, India.
          </p>
          <p className="text-gray-600 text-sm">
            ये उपयोग की शर्तें भारत के कानूनों द्वारा शासित हैं। कोई भी विवाद नई दिल्ली, भारत की अदालतों के 
            विशेष क्षेत्राधिकार के अधीन होगा।
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Questions About These Terms?</h3>
          <p className="text-blue-800 mb-4">
            If you have questions about these Terms of Use, please contact our legal team.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-blue-700">📧 Email: legal@ayush.gov.in</p>
            <p className="text-blue-700">📞 Phone: +91-11-2649-4200</p>
            <p className="text-blue-700">📍 Address: Ministry of AYUSH, Shastri Bhawan, New Delhi - 110001</p>
          </div>
        </div>

        {/* Updates Notice */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600">
            These terms may be updated from time to time. Users will be notified of significant changes. 
            Continued use of the platform after changes constitutes acceptance of updated terms.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
