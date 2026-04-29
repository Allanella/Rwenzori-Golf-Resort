import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { BookingCTA } from '@/components/booking-cta'
import { Award, Heart, Globe, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Mt. Rwenzori Golf Resort & Spa',
  description: 'Learn about Mt. Rwenzori Golf Resort & Spa, our mission, values, and commitment to excellence.',
}

const values = [
  {
    icon: <Award size={32} />,
    title: 'Excellence',
    description: 'We pursue excellence in every detail, from service to facilities, ensuring our guests receive the highest standards.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Hospitality',
    description: 'Genuine warmth and attention define our approach. We treat every guest as family.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Sustainability',
    description: 'We are committed to preserving the natural beauty of Mt. Rwenzori for future generations.',
  },
  {
    icon: <Users size={32} />,
    title: 'Community',
    description: 'We support local communities and employ passionate local staff who share our vision.',
  },
]

const timeline = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Mt. Rwenzori Golf Resort & Spa was founded with a vision to create a luxury destination in the heart of the mountains.',
  },
  {
    year: '2014',
    title: 'First Expansion',
    description: 'Completed our championship 9-hole golf course, attracting golf enthusiasts from around the world.',
  },
  {
    year: '2017',
    title: 'Spa Excellence',
    description: 'Opened our world-class spa facility, adding wellness services to complement our resort offerings.',
  },
  {
    year: '2021',
    title: 'Modern Upgrades',
    description: 'Invested in modern technology, including high-speed WiFi and premium amenities throughout the resort.',
  },
  {
    year: '2024',
    title: 'New Era',
    description: 'Launched our enhanced online booking system and expanded event hosting capabilities.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="About Mt. Rwenzori"
          subtitle="A legacy of luxury, excellence, and mountain hospitality"
          image="/images/mountain-view.jpg"
        />

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/mountain-view.jpg"
                  alt="Mt. Rwenzori landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Mt. Rwenzori Golf Resort & Spa was born from a passion for mountain hospitality and a belief that travelers deserve more than just accommodation—they deserve an experience.
                </p>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Nestled at the base of the majestic Mt. Rwenzori, our resort has been carefully designed to harmonize with nature while offering world-class amenities and services. For over a decade, we've been welcoming guests from around the globe who seek the perfect balance of adventure, relaxation, and luxury.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Every member of our team is dedicated to creating unforgettable memories, whether you&apos;re enjoying a round of golf, a spa treatment, or simply savoring the mountain views from our terrace.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  To provide an exceptional mountain retreat experience that combines luxury accommodation, premier golf facilities, rejuvenating spa services, and authentic hospitality, while preserving the natural beauty of our environment and supporting the local community.
                </p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-md">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Our Vision
                </h3>
                <p className="leading-relaxed">
                  To be recognized as the premier mountain resort destination in the region, setting standards for excellence in hospitality, sustainability, and guest satisfaction while remaining a cherished gathering place for families, golfers, and wellness seekers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-background rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our resort&apos;s history
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform -translate-x-1/2" />

              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div
                    key={event.year}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? 'md:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${
                        index % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'
                      }`}
                    >
                      <div className="bg-white rounded-lg p-8 shadow-md">
                        <div className="text-accent font-bold text-lg mb-2">
                          {event.year}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot (hidden on mobile) */}
                    <div className="hidden md:flex justify-center">
                      <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Highlight */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to your comfort and satisfaction
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <p className="text-foreground/80">
                    Dedicated staff members
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <p className="text-foreground/80">
                    Years combined hospitality experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-foreground/80">
                    Countries represented in our team
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 text-center mt-8 leading-relaxed">
                From our management team to our housekeeping staff, every member of Mt. Rwenzori is committed to ensuring your stay is exceptional. Our team undergoes continuous training to maintain the highest standards of service.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Ready to Experience Mt. Rwenzori?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable mountain retreat. Whether you&apos;re a golf enthusiast, wellness seeker, or simply looking for a peaceful escape, we&apos;re ready to welcome you.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Book Your Stay Today
            </button>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
