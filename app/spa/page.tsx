import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { BookingCTA } from '@/components/booking-cta'
import { Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spa Services | Mt. Rwenzori Golf Resort & Spa',
  description: 'Premium spa treatments and wellness services. Relax and rejuvenate at Mt. Rwenzori.',
}

const treatments = [
  {
    name: 'Swedish Massage',
    duration: '60 min',
    price: '$80',
    description: 'Therapeutic massage using long, flowing strokes to relieve tension and promote relaxation',
    image: '/images/spa-massage.jpg',
  },
  {
    name: 'Deep Tissue Massage',
    duration: '90 min',
    price: '$120',
    description: 'Intensive massage targeting deep muscle layers to release chronic tension',
    image: '/images/spa-massage.jpg',
  },
  {
    name: 'Aromatherapy Massage',
    duration: '75 min',
    price: '$100',
    description: 'Soothing massage combined with essential oils for ultimate relaxation',
    image: '/images/spa-treatment.jpg',
  },
  {
    name: 'Mountain Hot Stone Therapy',
    duration: '90 min',
    price: '$130',
    description: 'Ancient healing technique using heated stones to ease muscle tension',
    image: '/images/spa-treatment.jpg',
  },
  {
    name: 'Facial Treatment',
    duration: '60 min',
    price: '$75',
    description: 'Rejuvenating facial using natural, organic skincare products',
    image: '/images/spa-treatment.jpg',
  },
  {
    name: 'Full Body Wellness Package',
    duration: '180 min',
    price: '$280',
    description: 'Complete spa experience including massage, facial, and thermal bath',
    image: '/images/spa-massage.jpg',
  },
]

const packages = [
  {
    name: 'Relaxation Escape',
    duration: '2 hours',
    price: '$180',
    treatments: ['Swedish Massage (60 min)', 'Aromatherapy Scalp Treatment (30 min)'],
  },
  {
    name: 'Wellness Retreat',
    duration: '4 hours',
    price: '$350',
    treatments: ['Deep Tissue Massage (90 min)', 'Facial Treatment (60 min)', 'Thermal Bath (60 min)', 'Tea & Light Refreshments'],
  },
  {
    name: 'Mountain Healing',
    duration: '6 hours',
    price: '$550',
    treatments: [
      'Consultation & wellness assessment',
      'Hot Stone Therapy (90 min)',
      'Facial Treatment (60 min)',
      'Thermal Bath & Sauna (60 min)',
      'Lunch included',
      'Meditation & Relaxation Area Access',
    ],
  },
]

export default function SpaPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Premium Spa Services"
          subtitle="Rejuvenate your mind, body, and spirit in our serene mountain sanctuary"
          image="/images/spa-massage.jpg"
        />

        {/* Spa Services */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Signature Treatments
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our carefully curated selection of wellness therapies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment) => (
                <div
                  key={treatment.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {treatment.name}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex gap-1 items-center">
                          <Clock size={16} />
                          {treatment.duration}
                        </span>
                      </div>
                      <p className="text-accent font-semibold">{treatment.price}</p>
                    </div>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                      {treatment.description}
                    </p>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                      Book Treatment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spa Packages */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Spa Packages
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience complete wellness with our curated spa packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    index === 1 ? 'ring-2 ring-accent md:scale-105' : ''
                  }`}
                >
                  <div className="bg-primary text-primary-foreground p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex justify-between items-end">
                      <p className="text-sm opacity-90">{pkg.duration}</p>
                      <p className="text-3xl font-bold">{pkg.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.treatments.map((treatment) => (
                        <li
                          key={treatment}
                          className="flex gap-3 items-start text-foreground/80 text-sm"
                        >
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Reserve Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Philosophy */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/spa-treatment.jpg"
                  alt="Spa facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Our Wellness Philosophy
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  At Mt. Rwenzori, we believe in the power of wellness to transform lives. Our spa is designed as a sanctuary where body, mind, and spirit come into perfect harmony.
                </p>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Each treatment is administered by skilled, certified therapists who understand the delicate balance between technique and intuition, creating a personalized experience tailored to your unique needs.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <Star size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">World-class facilities and amenities</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Star size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Natural, organic products only</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Star size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Certified and experienced therapists</span>
                  </div>
                </div>
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
