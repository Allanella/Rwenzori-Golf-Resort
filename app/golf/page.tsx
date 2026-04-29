import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { BookingCTA } from '@/components/booking-cta'
import { Users, Zap, Trophy, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Golf | Mt. Rwenzori Golf Resort & Spa',
  description: 'Championship 9-hole golf course nestled in the mountains. Book your tee time at Mt. Rwenzori.',
}

const courseStats = [
  {
    label: 'Holes',
    value: '9',
    icon: <MapPin size={24} />,
  },
  {
    label: 'Par',
    value: '36',
    icon: <Trophy size={24} />,
  },
  {
    label: 'Max Handicap',
    value: '28',
    icon: <Zap size={24} />,
  },
  {
    label: 'Players/Day',
    value: '144',
    icon: <Users size={24} />,
  },
]

const golfPackages = [
  {
    name: 'Executive Package',
    description: 'Perfect for a quick round with friends',
    price: '$99',
    includes: ['18 holes (2 rounds)', 'Cart rental', 'Lunch for two', 'Golf balls'],
  },
  {
    name: 'Championship Package',
    description: 'Complete golf experience with professional amenities',
    price: '$199',
    includes: [
      '18 holes with professional caddy',
      'Premium golf cart',
      '3-course lunch',
      'Golf balls & tees',
      'Range access',
      'Video swing analysis',
    ],
  },
  {
    name: 'Luxury Golf Weekend',
    description: 'Multi-day golf retreat with accommodation',
    price: '$599/person',
    includes: [
      '2 nights accommodation',
      '36 holes with caddy',
      'Premium golf cart',
      'All meals included',
      'Spa treatment',
      'Evening entertainment',
    ],
  },
]

export default function GolfPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Championship Golf Course"
          subtitle="Tee off on our pristine 9-hole course nestled in the majestic mountains"
          image="/images/golf-course.jpg"
        />

        {/* Course Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Mt. Rwenzori Golf Course
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience championship golf surrounded by breathtaking mountain scenery
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {courseStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-6 text-center shadow-md"
                >
                  <div className="flex justify-center mb-4 text-accent">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Course Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Scenic fairways with mountain backdrop</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Well-maintained greens year-round</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Professional caddy services available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Club rental available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Golf lessons from certified instructors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Modern clubhouse facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Golf Packages */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Golf Packages
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect package for your golf getaway
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {golfPackages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                    index === 1 ? 'ring-2 ring-accent md:scale-105' : ''
                  }`}
                >
                  <div className="bg-primary text-primary-foreground p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold">{pkg.price}</div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 items-start text-foreground/80 text-sm"
                        >
                          <span className="text-accent font-bold flex-shrink-0">✓</span>
                          <span>{item}</span>
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

        {/* Lessons & Training */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Golf Lessons & Training
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Our certified golf instructors offer personalized lessons for all skill levels, from beginners to advanced golfers.
                </p>
                <ul className="space-y-3 mb-6 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Individual lessons with PGA professionals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Group training sessions available</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Video swing analysis technology</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Short game and putting clinics</span>
                  </li>
                </ul>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Book a Lesson
                </button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/golf-course.jpg"
                  alt="Golf instruction"
                  className="w-full h-full object-cover"
                />
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
