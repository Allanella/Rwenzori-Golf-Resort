import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { BookingCTA } from '@/components/booking-cta';
import { Target, Flower2, Utensils, Wifi, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';
import './home.css';

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

const roomRates = [
  { price: '$100', label: 'Deluxe Room',     note: 'Mountain view'       },
  { price: '$60',  label: 'Double Room',     note: 'Garden view'         },
  { price: '$150', label: 'Private Cottage', note: 'Breakfast included'  },
  { price: '$95',  label: 'Twin Room',       note: 'Golf round included' },
];

export default function Home() {
  return (
    <div className="rw-page">
      <Header />
      <main>
        <HeroSection
          title="Mt. Rwenzori Golf Resort & Spa"
          subtitle="A serene mountain view on the slopes of Mt. Rwenzori with a beautiful challenging nine hole golf course where fresh air meets beauty"
          video="/Sparvideo_preview.mp4"
          image="/images/_DSC9760.jpg"
          ctaText="Explore Our Resort"
          ctaHref="#features"
        />

        {/* Features */}
        <section id="features" className="rw-features">
          <div className="rw-features-inner">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="rw-eyebrow" style={{ justifyContent: 'center' }}>Premium Services</div>
              <h2 className="rw-h2">
                Every Experience, <em>Perfected</em>
              </h2>
              <div className="rw-rule rw-rule--center" />
              <p className="rw-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
                Experience the perfect blend of relaxation, adventure, and luxury at Mt. Rwenzori
              </p>
            </div>

            <div className="rw-features-grid">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href} className="rw-feature-card">
                  <div className="rw-feature-img-wrap">
                    <img src={feature.image} alt={feature.title} loading="lazy" />
                  </div>
                  <div className="rw-feature-body">
                    <div className="rw-feature-icon">{feature.icon}</div>
                    <div className="rw-feature-title">{feature.title}</div>
                    <p className="rw-feature-desc">{feature.description}</p>
                    <span className="rw-feature-link">
                      Explore
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="rw-amenities">
          <div className="rw-amenities-inner">
            <div className="rw-amenities-header">
              <div>
                <div className="rw-eyebrow" style={{ color: 'rgba(184,148,90,0.9)' }}>
                  The Resort
                </div>
                <h2 className="rw-h2" style={{ color: 'var(--rwenzori-cream)' }}>
                  World-Class <em>Amenities</em>
                </h2>
                <div className="rw-rule" />
              </div>
              <p className="rw-body" style={{ color: 'rgba(249,246,241,0.5)', maxWidth: '360px' }}>
                Every detail is meticulously designed for your ultimate comfort and enjoyment in the heart of the Rwenzori mountains.
              </p>
            </div>

            <div className="rw-amenities-grid">
              {amenities.map((amenity, index) => (
                <div key={amenity.title} className="rw-amenity-card">
                  <img src={amenity.image} alt={amenity.title} loading="lazy" />
                  <div className="rw-amenity-overlay">
                    <span className="rw-amenity-num">0{index + 1}</span>
                    <h3 className="rw-amenity-title">{amenity.title}</h3>
                    <p className="rw-amenity-desc">{amenity.description}</p>
                    <div className="rw-amenity-bar" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="rw-about">
          <div className="rw-about-inner">
            <div className="rw-about-text">
              <div className="rw-eyebrow">Our Story</div>
              <h2 className="rw-h2">
                Escape to <em>Paradise</em>
              </h2>
              <div className="rw-rule" />
              <p className="rw-body" style={{ marginBottom: '20px' }}>
                Surrounded by the majestic peaks of Mt. Rwenzori, our resort offers a serene escape
                from the hustle and bustle of everyday life. Whether you&apos;re seeking adventure on
                the golf course, relaxation at our spa, or simply a moment to breathe in fresh mountain
                air, Mt. Rwenzori welcomes you.
              </p>
              <p className="rw-body">
                Our dedicated team is committed to ensuring your stay is nothing short of exceptional,
                with every meal, every treatment, and every moment carefully curated for your pleasure.
              </p>
              <div className="rw-about-actions">
                <Link href="/about" className="rw-btn-primary">
                  Our Story
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="rw-btn-outline">Contact Us</Link>
              </div>
            </div>

            <div className="rw-about-img-wrap">
              <div className="rw-about-frame" />
              <div className="rw-about-tag">Est. on the Rwenzoris</div>
              <img
                className="rw-about-img-main"
                src="/images/DJI_20260426151352_0016_D.jpg"
                alt="Mt. Rwenzori aerial view"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="rw-booking">
          <div className="rw-booking-inner">
            <div className="rw-booking-top">
              <div>
                <div className="rw-eyebrow" style={{ color: 'rgba(184,148,90,0.9)' }}>
                  Reserve Your Stay
                </div>
                <h2 className="rw-booking-h2">
                  Ready to Experience <em>Paradise?</em>
                </h2>
              </div>
              <div>
                <p className="rw-booking-body">
                  Book your stay at Mt. Rwenzori Golf Resort &amp; Spa and enjoy luxury accommodation,
                  championship golf, and world-class spa services in the heart of Uganda&apos;s mountains.
                </p>
                <div className="rw-booking-actions">
                  <Link href="/booking" className="rw-btn-gold">
                    <Calendar size={16} />
                    Book Your Stay
                  </Link>
                  <a href="tel:+256746077473" className="rw-btn-ghost">
                    <Phone size={16} />
                    +256 746 077 473
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="rw-eyebrow" style={{ color: 'rgba(184,148,90,0.7)', marginBottom: '28px' }}>
                Room Rates / Per Night
              </div>
              <div className="rw-rates-grid">
                {roomRates.map((rate) => (
                  <div key={rate.label} className="rw-rate-card">
                    <span className="rw-rate-price">
                      <span className="rw-rate-sup">$</span>
                      {rate.price.replace('$', '')}
                    </span>
                    <div className="rw-rate-label">{rate.label}</div>
                    <div className="rw-rate-note">{rate.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rw-perks">
              {[
                '🏌️ Golf round with select packages',
                '🍳 Breakfast with cottages',
                '✦ Free high-speed WiFi',
                '🌿 Spa access for all guests',
              ].map((perk) => (
                <div key={perk} className="rw-perk">
                  <span className="rw-perk-dot" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}