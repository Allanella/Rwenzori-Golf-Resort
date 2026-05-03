import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { BookingCTA } from '@/components/booking-cta';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accommodation | Mt. Rwenzori Golf Resort & Spa',
  description:
    'Luxury rooms and suites with stunning mountain views. Experience comfort and elegance at Mt. Rwenzori.',
};

const roomTypes = [
  {
    name: 'Deluxe Room',
    price: '$100/night',
    image: '/images/_DSC9806.jpg',
    bedType: '1 Queen Bed',
    amenities: [
      'Queen bed',
      'Mountain view',
      'Private bathroom',
      'Free toiletries',
      'Shower',
      'Slippers',
      'Flat-screen TV',
      'Work desk',
      'Wardrobe',
      'Free WiFi',
      'Air conditioning',
    ],
    description:
      'Our Deluxe Rooms offer comfortable accommodation with modern amenities and breathtaking mountain views. Perfect for individuals or couples seeking a cozy retreat.',
  },
  {
    name: 'Double Room with Mountain View',
    price: '$60/night',
    image: '/images/_DSC9796.jpg',
    bedType: '1 Full Bed',
    amenities: [
      'Full bed',
      'Mountain view',
      'Private bathroom',
      'Free toiletries',
      'Shower',
      'Slippers',
      'Flat-screen TV',
      'Work desk',
      'Wardrobe',
      'Free WiFi',
      'Air conditioning',
    ],
    description:
      'Our Double Rooms provide affordable comfort with stunning mountain views and all essential amenities for a pleasant stay.',
  },
  {
    name: 'Cottage with Mountain View',
    price: '$150/night',
    image: '/images/_DSC9788.jpg',
    bedType: '2 Twin Beds',
    amenities: [
      'Twin beds',
      'Mountain view',
      'Private bathroom',
      'Free toiletries',
      'Shower',
      'Slippers',
      'Flat-screen TV',
      'Work desk',
      'Wardrobe',
      'Free WiFi',
      'Air conditioning',
      'Breakfast included',
      'Private terrace',
    ],
    description:
      'Our charming cottages offer spacious accommodation with mountain views, featuring private terraces and complimentary breakfast for a complete mountain retreat experience.',
  },
  {
    name: 'Twin Room with Mountain View',
    price: '$95/night',
    image: '/images/_DSC9790.jpg',
    bedType: '2 Twin Beds',
    amenities: [
      'Twin beds',
      'Mountain view',
      'Private bathroom',
      'Free toiletries',
      'Shower',
      'Slippers',
      'Flat-screen TV',
      'Work desk',
      'Wardrobe',
      'Free WiFi',
      'Air conditioning',
      'Breakfast included',
      '1 round of golf included',
    ],
    description:
      'Our Twin Rooms are perfect for friends or families, featuring mountain views, complimentary breakfast, and a round of golf for an all-inclusive mountain experience.',
  },
];

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Luxury Accommodation"
          subtitle="Experience comfort and elegance surrounded by majestic mountain peaks"
          image="/images/_DSC9790.jpg"
        />

        {/* Room Types Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Room Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our carefully designed accommodations
              </p>
            </div>

            <div className="space-y-12">
              {roomTypes.map((room, index) => (
                <div
                  key={room.name}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                      {room.name}
                    </h3>
                    <p className="text-accent text-xl font-semibold mb-2">{room.price}</p>
                    <p className="text-muted-foreground text-sm mb-4">{room.bedType}</p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{room.description}</p>

                    <div className="mb-8">
                      <h4 className="font-serif text-lg font-bold text-foreground mb-4">
                        Amenities Include:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {room.amenities.map((amenity) => (
                          <div key={amenity} className="flex gap-3 items-start">
                            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Facilities Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Exceptional Facilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for a perfect mountain retreat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Room Amenities */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Room Amenities
                </h3>
                <ul className="space-y-3">
                  {[
                    'Private bathroom with shower',
                    'Free toiletries',
                    'Slippers provided',
                    'Flat-screen TV',
                    'Work desk',
                    'Wardrobe',
                    'Non-smoking rooms',
                    'Air conditioning',
                  ].map((amenity) => (
                    <li key={amenity} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resort Facilities */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Resort Facilities
                </h3>
                <ul className="space-y-3">
                  {[
                    'Spa and wellness center',
                    'Beautiful garden',
                    'Spacious terrace',
                    'Restaurant',
                    'Bar',
                    'Free WiFi in all areas',
                    'Room service',
                    'Free on-site private parking',
                  ].map((facility) => (
                    <li key={facility} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Services</h3>
                <ul className="space-y-3">
                  {[
                    '24-hour room service',
                    'English breakfast included',
                    'Daily housekeeping',
                    'Concierge service',
                    'Airport shuttle (surcharge)',
                    'Laundry service',
                    'Currency exchange',
                    'Tour desk',
                  ].map((service) => (
                    <li key={service} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Nearby Attractions */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Location */}
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                  Prime Location
                </h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Located in the beautiful Fort Portal area, MT. Rwenzori Golf Resort & Spa offers
                  the perfect base for exploring the natural wonders of Western Uganda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">33 mi from Kasese Airport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">Free private parking on-site</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">Highly rated by recent guests (10.0)</span>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Nearby Attractions
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground/80">Toroo Botanical Gardens</span>
                    <span className="text-accent font-medium">16 mi</span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground/80">Lake Nkuruba Nature Reserve</span>
                    <span className="text-accent font-medium">21 mi</span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground/80">Kibale Forest Hall Game Reserve</span>
                    <span className="text-accent font-medium">22 mi</span>
                  </li>
                  <li className="flex justify-between items-center py-3">
                    <span className="text-foreground/80">Rwenzori Mountains National Park</span>
                    <span className="text-accent font-medium">25 mi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Property Highlights */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Property Highlights
              </h2>
              <p className="text-lg text-muted-foreground">Why guests love staying with us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">10.0</div>
                <div className="text-sm text-foreground/80">Guest Rating</div>
                <div className="text-xs text-muted-foreground mt-2">Exceptional</div>
              </div>

              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">📍</div>
                <div className="text-sm text-foreground/80">Top Location</div>
                <div className="text-xs text-muted-foreground mt-2">Highly rated area</div>
              </div>

              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">🅿️</div>
                <div className="text-sm text-foreground/80">Free Parking</div>
                <div className="text-xs text-muted-foreground mt-2">On-site available</div>
              </div>

              <div className="text-center p-6 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-accent mb-2">📶</div>
                <div className="text-sm text-foreground/80">Free WiFi</div>
                <div className="text-xs text-muted-foreground mt-2">All areas</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-foreground/80 mb-4">
                <strong>We Price Match</strong> - Find a lower price? We'll match it!
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </section>

        {/* Included Breakfast Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/_DSC9782.jpg"
                  alt="English breakfast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Traditional English Breakfast
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Every morning at Mt. Rwenzori, we serve a sumptuous full English breakfast
                  featuring:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Freshly baked bread and pastries',
                    'Eggs prepared to your preference',
                    'Premium bacon and sausages',
                    'Fresh fruit and seasonal berries',
                    'Greek yogurt and granola',
                    'Freshly squeezed orange juice',
                    'Artisan coffee and premium teas',
                    'Locally sourced ingredients',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  All room packages include a complimentary full breakfast served in our dining room
                  or on your private balcony.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resort Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resort Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover the beauty and comfort of Mt. Rwenzori
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/_DSC9788.jpg"
                  alt="Resort dining experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Exceptional Dining
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Experience fine dining at its best with our carefully curated menu featuring both
                  local and international cuisine. Our chefs use only the freshest ingredients
                  sourced from local farms and markets.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Farm-to-table dining experience',
                    'Expertly crafted seasonal menus',
                    'Extensive wine selection',
                    'Private dining available',
                    '24-hour room service',
                    'Dietary accommodations',
                  ].map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
