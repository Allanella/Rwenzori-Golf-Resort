import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { BookingCTA } from '@/components/booking-cta';
import { Target, Flower2, Utensils, Wifi, Wind, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: '9-Hole Golf Course',
      description:
        'Challenge yourself on our pristine 9-hole championship course nestled in the heart of the mountains, designed for golfers of all skill levels.',
      image: '/images/_DSC9827.jpg',
      icon: <Target size={24} />,
      href: '/golf',
    },
    {
      title: 'Premium Spa',
      description:
        'Indulge in rejuvenating spa treatments including massages, thermal baths, and wellness therapies in our serene spa sanctuary.',
      image: '/images/_DSC9743.jpg',
      icon: <Flower2 size={24} />,
      href: '/spa',
    },
    {
      title: 'English Breakfast',
      description:
        'Start your day with a traditional full English breakfast featuring fresh, locally sourced ingredients prepared by our expert chefs.',
      image: '/images/breakfast.jpg',
      icon: <Utensils size={24} />,
      href: '/accommodation',
    },
    {
      title: 'WiFi Connectivity',
      description:
        'Stay connected with high-speed WiFi available throughout the resort, in your room, terrace, and all common areas.',
      image: '/images/mountain-view.jpg',
      icon: <Wifi size={24} />,
      href: '/amenities',
    },
  ];

  const amenities = [
    {
      title: 'Luxury Rooms',
      description: 'Elegantly appointed rooms with mountain views and modern amenities',
      image: '/images/_DSC9760.jpg',
    },
    {
      title: 'Cozy Firepit',
      description: 'Gather around our outdoor firepit for intimate evenings under the stars',
      image: '/images/firepit.jpg',
    },
    {
      title: 'Expansive Terrace',
      description: 'Enjoy scenic views and fine dining from our spacious terrace',
      image: '/images/_DSC9848.jpg',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Mt. Rwenzori Golf Resort & Spa"
          subtitle="A serene mountain retreat offering luxury accommodation, championship golf, and world-class spa services"
          video="/Sparvideo_preview.mp4"
          image="/images/_DSC9854.png"
          ctaText="Explore Our Resort"
          ctaHref="#features"
        />

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-background to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Premium Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of relaxation, adventure, and luxury at Mt. Rwenzori
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={feature.href} className="block">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      image={feature.image}
                      icon={feature.icon}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                World-Class Amenities
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every detail is meticulously designed for your ultimate comfort and enjoyment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image container with enhanced effects */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  </div>

                  {/* Enhanced content */}
                  <div className="p-8 flex flex-col gap-4 bg-white relative z-10">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {amenity.title}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed">
                      {amenity.description}
                    </p>

                    {/* Decorative element */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Border highlight effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Escape to <span className="text-accent">Paradise</span>
                  </h2>
                  <div className="w-24 h-1 bg-accent rounded-full" />
                </div>

                <div className="space-y-6">
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    Surrounded by the majestic peaks of Mt. Rwenzori, our resort offers a serene
                    escape from the hustle and bustle of everyday life. Whether you&apos;re seeking
                    adventure on the golf course, relaxation at our spa, or simply a moment to
                    breathe in fresh mountain air, Mt. Rwenzori welcomes you.
                  </p>
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    Our dedicated team is committed to ensuring your stay is nothing short of
                    exceptional, with every meal, every treatment, and every moment carefully
                    curated for your pleasure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg min-w-[200px]"
                  >
                    <span>Learn More About Us</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px]"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              <div className="relative group">
                {/* Main image with enhanced styling */}
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/DJI_20260426151352_0016_D.jpg"
                    alt="Mountain scenery"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl opacity-60 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-40 group-hover:scale-110 transition-transform duration-700" />

                {/* Image frame effect */}
                <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Experience Paradise?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Book your stay at Mt. Rwenzori Golf Resort & Spa and enjoy luxury accommodation,
                championship golf, and world-class spa services.
              </p>

              {/* Room Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$100</div>
                  <div className="text-sm text-foreground/80">Deluxe Room</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$60</div>
                  <div className="text-sm text-foreground/80">Double Room</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$150</div>
                  <div className="text-sm text-foreground/80">Cottage w/ Breakfast</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$95</div>
                  <div className="text-sm text-foreground/80">Twin Room w/ Golf</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg min-w-[200px]"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Stay
                </Link>
                <a
                  href="tel:+256746077473"
                  className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                🏌️ One round of golf included with select packages • 🍳 Breakfast included with
                cottages
              </p>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
