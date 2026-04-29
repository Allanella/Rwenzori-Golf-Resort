import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { BookingCTA } from '@/components/booking-cta';
import { Wifi, Flame, Wine, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities | Mt. Rwenzori Golf Resort & Spa',
  description:
    'Discover world-class amenities including firepit, terrace, WiFi, and event facilities.',
};

const amenityCategories = [
  {
    icon: <Flame size={32} />,
    title: 'Cozy Firepit',
    description:
      'Gather around our outdoor firepit for intimate evenings under the stars. Perfect for roasting marshmallows, storytelling, and creating unforgettable memories with loved ones.',
    features: [
      'Seating for up to 20 guests',
      'Complimentary wood and kindling',
      'Roasting equipment provided',
      'Perfect stargazing spot',
      'Cozy lounge seating',
    ],
    image: '/images/firepit.jpg',
  },
  {
    icon: <Wine size={32} />,
    title: 'Expansive Terrace',
    description:
      'Enjoy breathtaking mountain views from our spacious terrace. Ideal for al fresco dining, morning coffee, evening cocktails, or simply relaxing with a book.',
    features: [
      'Panoramic mountain views',
      'Weather-protected seating',
      'Fine dining restaurant',
      'Bar service available',
      'Event hosting capabilities',
    ],
    image: '/images/terrace.jpg',
  },
  {
    icon: <Wifi size={32} />,
    title: 'High-Speed WiFi',
    description:
      'Stay connected with premium high-speed WiFi throughout the resort. Available in all rooms, common areas, terrace, and golf course facilities.',
    features: [
      'Ultra-fast 5G connectivity',
      'Available everywhere on grounds',
      'Multiple password-protected networks',
      '24/7 technical support',
      'Video conferencing ready',
    ],
    image: '/images/mountain-view.jpg',
  },
  {
    icon: <Users size={32} />,
    title: 'Event Hosting',
    description:
      'Host your special events at Mt. Rwenzori. From intimate gatherings to grand celebrations, our venues and dedicated team ensure an unforgettable experience.',
    features: [
      'Flexible indoor/outdoor spaces',
      'Catering services included',
      'Event planning assistance',
      'Audio/visual equipment available',
      'Accommodation packages for guests',
    ],
    image: '/images/terrace.jpg',
  },
];

const eventTypes = [
  {
    name: 'Weddings',
    capacity: '50-200 guests',
    description: 'Create your dream wedding surrounded by majestic mountains and natural beauty',
  },
  {
    name: 'Corporate Events',
    capacity: '30-150 guests',
    description: 'Host your company retreat, conference, or team building event',
  },
  {
    name: 'Anniversaries',
    capacity: '20-100 guests',
    description: 'Celebrate milestones with intimate gatherings in a romantic setting',
  },
  {
    name: 'Family Reunions',
    capacity: '50-200 guests',
    description: 'Bring families together for memorable mountain experiences',
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="World-Class Amenities"
          subtitle="Experience luxury and comfort at every turn"
          image="/images/_DSC9766.jpg"
        />

        {/* Amenities Showcase */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Premium Facilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover everything we offer to enhance your stay
              </p>
            </div>

            <div className="space-y-16">
              {amenityCategories.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div
                    className={`relative h-96 rounded-lg overflow-hidden shadow-lg ${
                      index % 2 === 1 ? 'md:col-start-2' : ''
                    }`}
                  >
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex gap-4 items-start mb-4">
                      <div className="text-accent">{amenity.icon}</div>
                      <h3 className="font-serif text-3xl font-bold text-foreground">
                        {amenity.title}
                      </h3>
                    </div>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{amenity.description}</p>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {amenity.features.map((feature) => (
                        <li key={feature} className="flex gap-3 items-start text-foreground/80">
                          <span className="text-accent font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Event Hosting
              </h2>
              <p className="text-lg text-muted-foreground">
                Make your special occasion unforgettable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {eventTypes.map((event) => (
                <div
                  key={event.name}
                  className="bg-background rounded-lg p-6 text-center shadow-md"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {event.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-3">{event.capacity}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>

            {/* Event Services Details */}
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Our Event Planning Services Include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Complete venue setup and decoration',
                  'Professional catering and bar service',
                  'On-site event coordinator',
                  'Audio/visual and lighting equipment',
                  'Multi-room layout options',
                  'Guest accommodation packages',
                  'Photography services available',
                  'Special dietary accommodations',
                  'Entertainment recommendations',
                  'Day-of timeline management',
                  'Weather contingency planning',
                  'Post-event cleanup services',
                ].map((service) => (
                  <div key={service} className="flex gap-3 items-start">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/80">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Amenities */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              More to Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src="/images/_DSC9736.png"
                  alt="Mt. Rwenzori Resort Building"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Resort Building Gallery
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    Beautiful resort building with modern architecture and mountain views
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src="/images/mountain-view.jpg"
                  alt="Mountain View"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Mountain View Test
                  </h3>
                  <p className="text-foreground/80 text-sm">Testing mountain view image display</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Restaurant & Bar',
                  description: 'Fine dining with local and international cuisine',
                },
                {
                  title: 'Library Lounge',
                  description: 'Quiet reading room with extensive book collection',
                },
                {
                  title: 'Gym & Fitness',
                  description: 'Fully equipped fitness center with personal training',
                },
                {
                  title: 'Game Room',
                  description: 'Billiards, darts, and board games for entertainment',
                },
                {
                  title: 'Gift Shop',
                  description: 'Curated selection of local crafts and products',
                },
                {
                  title: 'Concierge Service',
                  description: '24/7 assistance with all your resort needs',
                },
              ].map((amenity) => (
                <div
                  key={amenity.title}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
