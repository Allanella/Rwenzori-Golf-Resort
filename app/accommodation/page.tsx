import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { BookingCTA } from '@/components/booking-cta'
import { Check } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accommodation | Mt. Rwenzori Golf Resort & Spa',
  description: 'Luxury rooms and suites with stunning mountain views. Experience comfort and elegance at Mt. Rwenzori.',
}

const roomTypes = [
  {
    name: 'Standard Room',
    price: '$150/night',
    image: '/images/room-standard.jpg',
    amenities: [
      'King or twin beds',
      'Mountain view',
      'En-suite bathroom',
      'Shower & bathtub',
      'WiFi connectivity',
      'Air conditioning',
      'Satellite TV',
      'Mini bar',
    ],
    description:
      'Our Standard Rooms offer comfortable accommodation with modern amenities and breathtaking mountain views. Perfect for individuals or couples seeking a cozy retreat.',
  },
  {
    name: 'Deluxe Suite',
    price: '$250/night',
    image: '/images/room-suite.jpg',
    amenities: [
      'Spacious bedroom',
      'Separate living area',
      'Panoramic views',
      'Luxury bathroom',
      'Rain shower',
      'Jacuzzi tub',
      'WiFi connectivity',
      'Premium mini bar',
      'Fireplace',
      'Private balcony',
    ],
    description:
      'Our Deluxe Suites feature separate living spaces, luxurious bathrooms, and private balconies overlooking the mountains. Ideal for special occasions and extended stays.',
  },
]

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Luxury Accommodation"
          subtitle="Experience comfort and elegance surrounded by majestic mountain peaks"
          image="/images/room-suite.jpg"
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
                    <p className="text-accent text-xl font-semibold mb-4">
                      {room.price}
                    </p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-serif text-lg font-bold text-foreground mb-4">
                        Amenities Include:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {room.amenities.map((amenity) => (
                          <div
                            key={amenity}
                            className="flex gap-3 items-start"
                          >
                            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">
                              {amenity}
                            </span>
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

        {/* Included Breakfast Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/breakfast.jpg"
                  alt="English breakfast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Traditional English Breakfast
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Every morning at Mt. Rwenzori, we serve a sumptuous full English breakfast featuring:
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
                  All room packages include a complimentary full breakfast served in our dining room or on your private balcony.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
