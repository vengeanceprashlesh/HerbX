'use client'

import { PageLayout } from '@/components/PageLayout'
import { CalendarIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function EventCalendarPage() {
  const events = [
    {
      id: 1,
      title: 'International Ayurveda Conference',
      titleHindi: 'अंतर्राष्ट्रीय आयुर्वेद सम्मेलन',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'New Delhi Convention Centre',
      locationHindi: 'नई दिल्ली कन्वेंशन सेंटर',
      attendees: '500+',
      description: 'A comprehensive conference on modern Ayurveda practices and research.',
      descriptionHindi: 'आधुनिक आयुर्वेद पद्धतियों और अनुसंधान पर एक व्यापक सम्मेलन।',
      category: 'Conference',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Herb Quality Assurance Workshop',
      titleHindi: 'जड़ी-बूटी गुणवत्ता आश्वासन कार्यशाला',
      date: '2024-03-20',
      time: '10:00 AM',
      location: 'AYUSH Ministry, Shastri Bhawan',
      locationHindi: 'आयुष मंत्रालय, शास्त्री भवन',
      attendees: '150+',
      description: 'Training workshop on quality control and standardization of herbal medicines.',
      descriptionHindi: 'हर्बल दवाओं के गुणवत्ता नियंत्रण और मानकीकरण पर प्रशिक्षण कार्यशाला।',
      category: 'Workshop',
      status: 'Upcoming'
    },
    {
      id: 3,
      title: 'Traditional Medicine Research Symposium',
      titleHindi: 'पारंपरिक चिकित्सा अनुसंधान संगोष्ठी',
      date: '2024-04-05',
      time: '11:00 AM',
      location: 'AIIMS New Delhi',
      locationHindi: 'एम्स नई दिल्ली',
      attendees: '300+',
      description: 'Research presentations on traditional medicine innovations.',
      descriptionHindi: 'पारंपरिक चिकित्सा नवाचारों पर अनुसंधान प्रस्तुतियां।',
      category: 'Symposium',
      status: 'Upcoming'
    }
  ]

  const categoryColors = {
    'Conference': 'bg-blue-100 text-blue-800 border-blue-200',
    'Workshop': 'bg-green-100 text-green-800 border-green-200',
    'Symposium': 'bg-purple-100 text-purple-800 border-purple-200'
  }

  const statusColors = {
    'Upcoming': 'bg-orange-100 text-orange-800',
    'Ongoing': 'bg-green-100 text-green-800',
    'Completed': 'bg-gray-100 text-gray-800'
  }

  return (
    <PageLayout
      title="Event Calendar"
      titleHindi="कार्यक्रम कैलेंडर"
      subtitle="Stay updated with upcoming AYUSH events, conferences, and workshops"
      subtitleHindi="आगामी आयुष कार्यक्रमों, सम्मेलनों और कार्यशालाओं से अपडेट रहें"
      breadcrumbs={[
        { name: 'Events', href: '/event-calendar' }
      ]}
    >
      <div className="space-y-8">
        {/* Calendar Header */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center space-x-3 mb-4">
            <CalendarIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <p className="text-gray-600">
            Discover and participate in Ministry of AYUSH events, conferences, workshops, and symposiums 
            focused on traditional medicine, research, and healthcare innovation.
          </p>
        </div>

        {/* Event Filter */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors">
              All Events
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Conferences
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Workshops
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Symposiums
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                        {event.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[event.status as keyof typeof statusColors]}`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-3">
                      {event.titleHindi}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CalendarIcon className="w-5 h-5" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <ClockIcon className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <UserGroupIcon className="w-5 h-5" />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-2">{event.description}</p>
                <p className="text-gray-600 text-sm mb-4">{event.descriptionHindi}</p>

                <div className="flex space-x-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Register Now
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Load More Events
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
