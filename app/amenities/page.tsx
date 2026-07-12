import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { BookingCTA } from '@/components/booking-cta';
import { Wifi, Flame, Wine, Users, Compass, Tent, Utensils, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experiences & Amenities | Mt. Rwenzori Golf Resort & Spa',
  description:
    'Discover world-class activities, from gorilla tracking and Rwenzori hikes to traditional cottages, fine dining, and grand celebrations.',
};

const amenityCategories = [
  {
    icon: <Tent size={32} />,
    title: 'Traditional African Cottages & Campsite',
    description:
      'Immerse yourself in authentic heritage with our grass-thatched cottages built of mud and wattle in classic African style. Step inside to discover striking, hand-crafted master woodwork. For outdoor enthusiasts, our designated scenic campsite offers cozy mountain-side stargazing.',
    features: [
      'African-style grass-thatched cottages',
      'Authentic mud & wattle construction with beautiful woodwork interior',
      'Fully equipped, secure wilderness campsite',
      'Stunning views of the foothills',
      'Cozy private seating spaces',
    ],
    image: 'http://googleusercontent.com/image_collection/image_retrieval/16239877178433762773_0',
  },
  {
    icon: <Compass size={32} />,
    title: 'Guided Safaris & Wilderness Excursions',
    description:
      'Our resort is the perfect gateway to Western Uganda’s natural marvels. Embark on rugged climbs, track rare primates, or experience natural therapeutic thermal waters just a short distance from your cottage door.',
    features: [
      'Breathtaking guided hiking trips up Mt. Rwenzori',
      'Gorilla tracking excursions at Kibale National Game Park',
      'Restorative day-trips to Rwagimba Hot Springs',
      'Just a 1-hour scenic drive to Semuliki Hot Springs',
      'Only a 40-minute drive to Queen Elizabeth National Game Park',
    ],
    image: '/images/mountain-view.jpg',
  },
  {
    icon: <Utensils size={32} />,
    title: 'Organic Farm-to-Table & Rivers',
    description:
      'Experience authentic country life at our hotel farm. Walk alongside grazing dairy cattle, try your hand at morning milking, and indulge in seasonal harvested foods freshly prepared by our culinary team. Complete your adventure with an invigorating cold splash in River Peripa.',
    features: [
      'Interact with grazing and milking cattle on our hotel farm',
      'Delicious local & global cuisine made from freshly harvested organic foods',
      'Invigorating cold showers in the pristine River Peripa',
      'Guided nature walks along scenic trails around the hotel',
      'Full Restaurant & Bar serving curated cocktails and local brews',
    ],
    image: 'http://googleusercontent.com/image_collection/image_retrieval/16082155317322123758_0',
  },
  {
    icon: <Flame size={32} />,
    title: 'Cozy Firepit',
    description:
      'Gather around our outdoor firepit for intimate evenings under the stars. Perfect for roasting marshmallows, storytelling, and creating unforgettable memories with loved ones after a long day of tracking and hiking.',
    features: [
      'Seating for up to 40 guests',
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
      'Fine dining restaurant access',
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
    title: 'Grand Celebrations & Events',
    description:
      'Host your grand milestones at Mt. Rwenzori Golf Resort & Spa. From beautiful cultural introductions to magnificent corporate banquets, our versatile spaces and culinary experts ensure perfection.',
    features: [
      'Grand Conference Hall accommodating up to 400 guests',
      'Indoor Wedding Venue layout for up to 250 guests',
      'Lively traditional cultural dance performances arranged on order',
      'Customized corporate team-building and retreat packages',
      'Charming honeymoon itineraries in cozy private settings',
    ],
    image: '/images/terrace.jpg',
  },
];

const eventTypes = [
  {
    name: 'Weddings & Introductions',
    capacity: 'Up to 250 guests (Indoor)',
    description: 'Celebrate your love with grand indoor receptions or custom-crafted traditional cultural introductions.',
  },
  {
    name: 'Conferences & retreats',
    capacity: 'Up to 400 guests',
    description: 'Our state-of-the-art conference hall caters to executive assemblies and large scale summits.',
  },
  {
    name: 'Staff Development Retreats',
    capacity: 'Flexible packages',
    description: 'Re-energize your corporate team with custom activities, sports, and structural development courses.',
  },
  {
    name: 'Romantic Honeymoons',
    capacity: 'Designed for couples',
    description: 'Cherish secluded walks, romantic terrace dinners, and exclusive excursions in a majestic mountain setup.',
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Unforgettable Experiences & Amenities"
          subtitle="Where raw Ugandan adventure meets luxurious sanctuary"
          image="/images/_DSC9766.jpg"
        />

        {/* Experiences Showcase */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground">
                Tailor-made adventures, premium comfort, and memorable highlights to cherish.
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
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
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
                Grand Celebrations & Hosting
              </h2>
              <p className="text-lg text-muted-foreground">
                Make your special occasion unforgettable with our custom venues and packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {eventTypes.map((event) => (
                <div
                  key={event.name}
                  className="bg-background rounded-lg p-6 text-center shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {event.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-3">{event.capacity}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{event.description}</p>
                  </div>
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
                  'Sophisticated Grand Conference Hall (fits up to 400 guests)',
                  'Elegantly designed Indoor Wedding venue (fits up to 250 guests)',
                  'Lively traditional Cultural Dance performances (arranged on order)',
                  'Complete venue staging, beautiful floral, and setup styling',
                  'Professional local and international catering with open bars',
                  'Staff development retreats with tailored sports and workshops',
                  'Advanced audio/visual, stage lighting, and professional support',
                  'Accommodations for your party with specialized honeymoon suites',
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

        {/* Additional Recreation & Playgrounds */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Recreation & Resort Amenities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-md flex items-center gap-6">
                <div className="text-accent bg-background p-4 rounded-full">
                  <Trophy size={36} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    Football & Netball Pitches
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    Perfect fields for corporate field matches, team matches, active recreation, and energetic family activities.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md flex items-center gap-6">
                <div className="text-accent bg-background p-4 rounded-full">
                  <Flame size={36} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    Sunset Firepits & Stories
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    Indulge in cozy gatherings, campfire treats, and storytelling after high-altitude Rwenzori tracking excursions.
                  </p>
                </div>
              </div>
            </div>

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
                  description: 'Fine dining showcasing authentic local specialties and organic harvested farm-to-table meals.',
                },
                {
                  title: 'Library Lounge',
                  description: 'A cozy reading room with a great selection of nature books and comfortable seating areas.',
                },
                {
                  title: 'Gym & Fitness',
                  description: 'Fully equipped fitness center configured to condition you for demanding Rwenzori tracking.',
                },
                {
                  title: 'Game Room',
                  description: 'Billiards, board games, and fun challenges to enjoy with your family and retreat colleagues.',
                },
                {
                  title: 'Gift Shop',
                  description: 'Take home beautiful handcrafted memories made by the local mountain community.',
                },
                {
                  title: 'Concierge Service',
                  description: 'Friendly 24/7 hospitality desk ready to arrange your hot spring excursions and river dips.',
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
