import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { BookingCTA } from '@/components/booking-cta';
import { Target, Flower2, Utensils, Wifi, Wind } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: '9-Hole Golf Course',
      description:
        'Challenge yourself on our pristine 9-hole championship course nestled in the heart of the mountains, designed for golfers of all skill levels.',
      image: '/images/golf-course.jpg',
      icon: <Target size={24} />,
      href: '/golf',
    },
    {
      title: 'Premium Spa',
      description:
        'Indulge in rejuvenating spa treatments including massages, thermal baths, and wellness therapies in our serene spa sanctuary.',
      image: '/images/spa-massage.jpg',
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
      image: '/images/bedroom-twin.jpg',
    },
    {
      title: 'Cozy Firepit',
      description: 'Gather around our outdoor firepit for intimate evenings under the stars',
      image: '/images/firepit.jpg',
    },
    {
      title: 'Expansive Terrace',
      description: 'Enjoy scenic views and fine dining from our spacious terrace',
      image: '/images/garden-stream.jpg',
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
          image="/images/resort-hero.jpg"
          ctaText="Explore Our Resort"
          ctaHref="#features"
        />

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Premium Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the perfect blend of relaxation, adventure, and luxury at Mt. Rwenzori
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    icon={feature.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                World-Class Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail is designed for your comfort and enjoyment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2 bg-background">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {amenity.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Escape to Paradise
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Surrounded by the majestic peaks of Mt. Rwenzori, our resort offers a serene
                  escape from the hustle and bustle of everyday life. Whether you&apos;re seeking
                  adventure on the golf course, relaxation at our spa, or simply a moment to breathe
                  in fresh mountain air, Mt. Rwenzori welcomes you.
                </p>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Our dedicated team is committed to ensuring your stay is nothing short of
                  exceptional, with every meal, every treatment, and every moment carefully curated
                  for your pleasure.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
              <div className="relative h-96">
                <img
                  src="/images/mountain-view.jpg"
                  alt="Mountain scenery"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
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
