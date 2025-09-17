'use client'

import { PageLayout } from '@/components/PageLayout'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      titleHindi: 'फ़ोन',
      details: '+91-11-2649-4200',
      description: 'Ministry Helpline',
      descriptionHindi: 'मंत्रालय हेल्पलाइन'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      titleHindi: 'ईमेल',
      details: 'herbx@ayush.gov.in',
      description: 'HerbX Support',
      descriptionHindi: 'हर्बएक्स सहायता'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      titleHindi: 'पता',
      details: 'Shastri Bhawan, New Delhi - 110001',
      description: 'Ministry of AYUSH',
      descriptionHindi: 'आयुष मंत्रालय'
    },
    {
      icon: ClockIcon,
      title: 'Office Hours',
      titleHindi: 'कार्यालय समय',
      details: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday',
      descriptionHindi: 'सोमवार से शुक्रवार'
    }
  ]

  const departments = [
    { value: 'general', label: 'General Inquiry', labelHindi: 'सामान्य पूछताछ' },
    { value: 'technical', label: 'Technical Support', labelHindi: 'तकनीकी सहायता' },
    { value: 'certification', label: 'Certification Issues', labelHindi: 'प्रमाणीकरण समस्याएं' },
    { value: 'compliance', label: 'Compliance Matters', labelHindi: 'अनुपालन मामले' },
    { value: 'registration', label: 'Registration Help', labelHindi: 'पंजीकरण सहायता' },
    { value: 'other', label: 'Other', labelHindi: 'अन्य' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PageLayout
      title="Contact Us"
      titleHindi="हमसे संपर्क करें"
      subtitle="Get in touch with the Ministry of AYUSH and HerbX support team for assistance"
      subtitleHindi="सहायता के लिए आयुष मंत्रालय और हर्बएक्स सहायता टीम से संपर्क करें"
      breadcrumbs={[
        { name: 'Contact', href: '/contact' }
      ]}
    >
      <div className="space-y-8">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{info.titleHindi}</p>
              <p className="text-blue-600 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
              <p className="text-xs text-gray-400">{info.descriptionHindi}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-gray-600">हमें एक संदेश भेजें</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    {departments.map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Please provide detailed information about your inquiry..."
                />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <span>Send Message</span>
                </button>
                <button
                  type="reset"
                  onClick={() => setFormData({ name: '', email: '', phone: '', subject: '', category: '', message: '' })}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Emergency Contact</h3>
              <p className="text-red-700 mb-2">
                For urgent technical issues or compliance emergencies:
              </p>
              <div className="space-y-2">
                <p className="text-red-800 font-medium">📞 Emergency Hotline: +91-11-2649-4444</p>
                <p className="text-red-800 font-medium">✉️ Emergency Email: emergency@ayush.gov.in</p>
                <p className="text-sm text-red-600">Available 24/7 for critical issues</p>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Before You Contact</h3>
              <p className="text-blue-700 mb-4">
                Many common questions are answered in our FAQ section. Check there first for quick solutions.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                View FAQ
              </button>
            </div>

            {/* Regional Offices */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Offices</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900">Northern Region</h4>
                  <p className="text-sm text-gray-600">Chandigarh: +91-172-2740-123</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900">Western Region</h4>
                  <p className="text-sm text-gray-600">Mumbai: +91-22-2672-1234</p>
                </div>
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-900">Southern Region</h4>
                  <p className="text-sm text-gray-600">Bangalore: +91-80-2234-5678</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900">Eastern Region</h4>
                  <p className="text-sm text-gray-600">Kolkata: +91-33-2245-6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
