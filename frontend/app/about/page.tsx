'use client'

import { PageLayout } from '@/components/PageLayout'
import { BuildingOfficeIcon, UserGroupIcon, GlobeAltIcon, AcademicCapIcon, HeartIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const statistics = [
    { number: '1970', label: 'Established', labelHindi: 'स्थापित' },
    { number: '50+', label: 'AYUSH Institutions', labelHindi: 'आयुष संस्थान' },
    { number: '10M+', label: 'Beneficiaries', labelHindi: 'लाभार्थी' },
    { number: '5000+', label: 'Registered Products', labelHindi: 'पंजीकृत उत्पाद' }
  ]

  const systems = [
    {
      name: 'Ayurveda',
      nameHindi: 'आयुर्वेद',
      description: 'Ancient system of medicine that emphasizes balance in bodily systems',
      descriptionHindi: 'प्राचीन चिकित्सा पद्धति जो शारीरिक प्रणालियों में संतुलन पर जोर देती है',
      icon: '🌿',
      established: '5000+ years ago'
    },
    {
      name: 'Yoga & Naturopathy',
      nameHindi: 'योग और प्राकृतिक चिकित्सा',
      description: 'Holistic approach to health through natural healing and physical practices',
      descriptionHindi: 'प्राकृतिक उपचार और शारीरिक अभ्यासों के माध्यम से स्वास्थ्य के लिए समग्र दृष्टिकोण',
      icon: '🧘',
      established: '5000+ years ago'
    },
    {
      name: 'Unani',
      nameHindi: 'यूनानी',
      description: 'Greek system of medicine based on the theory of four humours',
      descriptionHindi: 'चार द्रव्यों के सिद्धांत पर आधारित यूनानी चिकित्सा प्रणाली',
      icon: '⚗️',
      established: '8th century'
    },
    {
      name: 'Siddha',
      nameHindi: 'सिद्ध',
      description: 'Traditional system of medicine practiced in Tamil Nadu',
      descriptionHindi: 'तमिलनाडु में प्रचलित पारंपरिक चिकित्सा प्रणाली',
      icon: '🏺',
      established: '10th century BC'
    },
    {
      name: 'Homeopathy',
      nameHindi: 'होम्योपैथी',
      description: 'System based on the principle of "like cures like"',
      descriptionHindi: '"समान का समान से इलाज" के सिद्धांत पर आधारित प्रणाली',
      icon: '💊',
      established: '1796'
    }
  ]

  const objectives = [
    {
      title: 'Promote Traditional Medicine',
      titleHindi: 'पारंपरिक चिकित्सा को बढ़ावा देना',
      description: 'Encourage the practice and development of AYUSH systems',
      descriptionHindi: 'आयुष प्रणालियों के अभ्यास और विकास को प्रोत्साहित करना',
      icon: HeartIcon
    },
    {
      title: 'Quality Standards',
      titleHindi: 'गुणवत्ता मानक',
      description: 'Establish and maintain high quality standards for traditional medicines',
      descriptionHindi: 'पारंपरिक दवाओं के लिए उच्च गुणवत्ता मानक स्थापित और बनाए रखना',
      icon: DocumentTextIcon
    },
    {
      title: 'Education & Research',
      titleHindi: 'शिक्षा और अनुसंधान',
      description: 'Promote education and research in traditional medicine systems',
      descriptionHindi: 'पारंपरिक चिकित्सा प्रणालियों में शिक्षा और अनुसंधान को बढ़ावा देना',
      icon: AcademicCapIcon
    },
    {
      title: 'Global Outreach',
      titleHindi: 'वैश्विक पहुंच',
      description: 'Spread awareness about Indian traditional medicine worldwide',
      descriptionHindi: 'भारतीय पारंपरिक चिकित्सा के बारे में दुनिया भर में जागरूकता फैलाना',
      icon: GlobeAltIcon
    }
  ]

  return (
    <PageLayout
      title="About Ministry of AYUSH"
      titleHindi="आयुष मंत्रालय के बारे में"
      subtitle="Promoting and developing traditional and complementary systems of medicine and healing"
      subtitleHindi="पारंपरिक और पूरक चिकित्सा प्रणालियों और उपचार को बढ़ावा देना और विकसित करना"
      breadcrumbs={[
        { name: 'About', href: '/about' }
      ]}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ministry Overview</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Ministry of AYUSH (Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy) 
                  was formed in 2014 to ensure optimal development and propagation of AYUSH systems of 
                  healthcare. The Ministry is mandated to develop education and research in AYUSH systems 
                  of medicine, formulate policies for the growth of AYUSH systems, and regulate the 
                  quality and standard of drugs and medical practices.
                </p>
                <p className="text-gray-600">
                  आयुष मंत्रालय (आयुर्वेद, योग और प्राकृतिक चिकित्सा, यूनानी, सिद्ध और होम्योपैथी) का गठन 2014 में 
                  आयुष स्वास्थ्य देखभाल प्रणालियों के इष्टतम विकास और प्रसार को सुनिश्चित करने के लिए किया गया था। 
                  मंत्रालय को आयुष चिकित्सा प्रणालियों में शिक्षा और अनुसंधान विकसित करने, आयुष प्रणालियों की वृद्धि के लिए 
                  नीतियां तैयार करने, और दवाओं और चिकित्सा प्रथाओं की गुणवत्ता और मानक को नियंत्रित करने का अधिकार है।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-900 font-medium">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.labelHindi}</div>
            </div>
          ))}
        </div>

        {/* AYUSH Systems */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">AYUSH Systems of Medicine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{system.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{system.name}</h3>
                  <p className="text-gray-600 text-lg">{system.nameHindi}</p>
                  <p className="text-xs text-gray-500 mt-2">Est. {system.established}</p>
                </div>
                <p className="text-gray-700 mb-2">{system.description}</p>
                <p className="text-gray-600 text-sm">{system.descriptionHindi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Objectives */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Mission & Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <objective.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{objective.title}</h3>
                    <p className="text-gray-600 mb-2">{objective.titleHindi}</p>
                    <p className="text-gray-700 mb-2">{objective.description}</p>
                    <p className="text-gray-600 text-sm">{objective.descriptionHindi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl mb-4 text-green-100">
              "To promote AYUSH medical systems through cost-effective AYUSH services, 
              strengthen educational systems, facilitate the enforcement of quality control of drugs, 
              and encourage research and development."
            </p>
            <p className="text-lg text-blue-100">
              "लागत-प्रभावी आयुष सेवाओं के माध्यम से आयुष चिकित्सा प्रणालियों को बढ़ावा देना, 
              शैक्षिक प्रणालियों को मजबूत करना, दवाओं के गुणवत्ता नियंत्रण के प्रवर्तन की सुविधा देना, 
              और अनुसंधान और विकास को प्रोत्साहित करना।"
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ministry Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Hon'ble Minister</h3>
              <p className="text-gray-600">Ministry of AYUSH</p>
              <p className="text-sm text-gray-500 mt-2">माननीय मंत्री</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secretary</h3>
              <p className="text-gray-600">Ministry of AYUSH</p>
              <p className="text-sm text-gray-500 mt-2">सचिव</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Joint Secretary</h3>
              <p className="text-gray-600">Ministry of AYUSH</p>
              <p className="text-sm text-gray-500 mt-2">संयुक्त सचिव</p>
            </div>
          </div>
        </div>

        {/* Contact Ministry */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Want to Learn More?</h3>
              <p className="text-blue-700">
                Contact us for more information about AYUSH systems and the Ministry's initiatives.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Ministry
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
