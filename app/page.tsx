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

  const roomRates = [
    { price: '$100', label: 'Deluxe Room', note: 'Mountain view' },
    { price: '$60',  label: 'Double Room', note: 'Garden view' },
    { price: '$150', label: 'Private Cottage', note: 'Breakfast included' },
    { price: '$95',  label: 'Twin Room', note: 'Golf round included' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ─── Tokens ──────────────────────────────── */
        :root {
          --rwenzori-cream:   #f9f6f1;
          --rwenzori-sand:    #e8dece;
          --rwenzori-forest:  #2c3d2e;
          --rwenzori-moss:    #4a6741;
          --rwenzori-gold:    #b8945a;
          --rwenzori-gold-lt: #d4aa72;
          --rwenzori-ink:     #1a1f1b;
          --rwenzori-muted:   #6b7569;
        }

        /* ─── Global ──────────────────────────────── */
        .rw-page {
          font-family: 'DM Sans', sans-serif;
          color: var(--rwenzori-ink);
          background: var(--rwenzori-cream);
        }

        .rw-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        /* ─── Section label ───────────────────────── */
        .rw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--rwenzori-gold);
          font-weight: 400;
          margin-bottom: 20px;
        }
        .rw-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--rwenzori-gold);
        }

        /* ─── Section heading ─────────────────────── */
        .rw-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: var(--rwenzori-forest);
        }

        .rw-h2 em {
          font-style: italic;
          color: var(--rwenzori-gold);
        }

        /* ─── Body text ───────────────────────────── */
        .rw-body {
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.8;
          color: var(--rwenzori-muted);
          font-weight: 300;
        }

        /* ─── Divider ─────────────────────────────── */
        .rw-rule {
          width: 48px;
          height: 1px;
          background: var(--rwenzori-gold);
          margin: 24px 0;
        }
        .rw-rule--center { margin: 24px auto; }

        /* ─── ─── FEATURES SECTION ─── ─── */
        .rw-features {
          background: var(--rwenzori-cream);
          padding: clamp(64px, 10vw, 128px) 24px;
          position: relative;
          overflow: hidden;
        }

        .rw-features::before {
          content: 'SERVICES';
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(80px, 14vw, 180px);
          font-weight: 300;
          color: var(--rwenzori-sand);
          letter-spacing: 0.3em;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          opacity: 0.6;
        }

        .rw-features-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .rw-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--rwenzori-sand);
          border: 1px solid var(--rwenzori-sand);
        }

        @media (max-width: 900px) {
          .rw-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .rw-features-grid { grid-template-columns: 1fr; }
        }

        .rw-feature-card {
          background: var(--rwenzori-cream);
          overflow: hidden;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: background 0.4s ease;
        }

        .rw-feature-card:hover { background: var(--rwenzori-forest); }

        .rw-feature-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .rw-feature-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: saturate(0.85);
        }

        .rw-feature-card:hover .rw-feature-img-wrap img {
          transform: scale(1.08);
          filter: saturate(1);
        }

        .rw-feature-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%);
        }

        .rw-feature-body {
          padding: 28px 28px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .rw-feature-icon {
          width: 40px;
          height: 40px;
          border: 1px solid var(--rwenzori-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--rwenzori-gold);
          transition: background 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
        }

        .rw-feature-card:hover .rw-feature-icon {
          background: var(--rwenzori-gold);
          color: #fff;
        }

        .rw-feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--rwenzori-forest);
          transition: color 0.3s ease;
          line-height: 1.2;
        }

        .rw-feature-card:hover .rw-feature-title { color: var(--rwenzori-cream); }

        .rw-feature-desc {
          font-size: 14px;
          line-height: 1.75;
          color: var(--rwenzori-muted);
          font-weight: 300;
          transition: color 0.3s ease;
        }

        .rw-feature-card:hover .rw-feature-desc { color: rgba(249,246,241,0.6); }

        .rw-feature-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--rwenzori-gold);
          transition: color 0.3s ease, gap 0.3s ease;
        }

        .rw-feature-card:hover .rw-feature-link {
          color: var(--rwenzori-gold-lt);
          gap: 14px;
        }

        /* ─── ─── AMENITIES SECTION ─── ─── */
        .rw-amenities {
          background: var(--rwenzori-forest);
          padding: clamp(64px, 10vw, 128px) 24px;
          position: relative;
          overflow: hidden;
        }

        .rw-amenities::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.4), transparent);
        }

        .rw-amenities-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .rw-amenities-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 64px;
        }

        @media (max-width: 768px) {
          .rw-amenities-header { flex-direction: column; align-items: flex-start; }
        }

        .rw-amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) { .rw-amenities-grid { grid-template-columns: 1fr; } }

        .rw-amenity-card {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          cursor: pointer;
          display: block;
          aspect-ratio: 4/5;
        }

        .rw-amenity-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          filter: saturate(0.7) brightness(0.85);
        }

        .rw-amenity-card:hover img {
          transform: scale(1.06);
          filter: saturate(1) brightness(0.9);
        }

        .rw-amenity-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,31,27,0.85) 0%, rgba(26,31,27,0.2) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          transition: background 0.4s ease;
        }

        .rw-amenity-card:hover .rw-amenity-overlay {
          background: linear-gradient(to top, rgba(26,31,27,0.92) 0%, rgba(26,31,27,0.4) 60%, transparent 100%);
        }

        .rw-amenity-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: var(--rwenzori-gold);
          margin-bottom: 8px;
        }

        .rw-amenity-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .rw-amenity-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          font-weight: 300;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease;
          opacity: 0;
        }

        .rw-amenity-card:hover .rw-amenity-desc {
          max-height: 60px;
          opacity: 1;
        }

        .rw-amenity-bar {
          width: 0;
          height: 1px;
          background: var(--rwenzori-gold);
          margin-top: 16px;
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .rw-amenity-card:hover .rw-amenity-bar { width: 40px; }

        /* ─── ─── ABOUT SECTION ─── ─── */
        .rw-about {
          background: var(--rwenzori-cream);
          padding: clamp(64px, 10vw, 128px) 24px;
        }

        .rw-about-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .rw-about-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        .rw-about-text { max-width: 520px; }

        .rw-about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 44px;
        }

        .rw-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--rwenzori-forest);
          color: var(--rwenzori-cream);
          padding: 15px 32px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--rwenzori-forest);
          transition: background 0.35s ease, color 0.35s ease, transform 0.3s ease;
          border-radius: 1px;
        }

        .rw-btn-primary:hover {
          background: var(--rwenzori-gold);
          border-color: var(--rwenzori-gold);
          transform: translateY(-2px);
        }

        .rw-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--rwenzori-forest);
          padding: 15px 32px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--rwenzori-forest);
          transition: background 0.35s ease, color 0.35s ease, transform 0.3s ease;
          border-radius: 1px;
        }

        .rw-btn-outline:hover {
          background: var(--rwenzori-forest);
          color: var(--rwenzori-cream);
          transform: translateY(-2px);
        }

        .rw-about-img-wrap {
          position: relative;
        }

        .rw-about-img-main {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
          filter: saturate(0.9);
          transition: filter 0.5s ease;
        }

        .rw-about-img-wrap:hover .rw-about-img-main { filter: saturate(1); }

        .rw-about-img-accent {
          position: absolute;
          bottom: -28px;
          right: -28px;
          width: 45%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 6px solid var(--rwenzori-cream);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .rw-about-frame {
          position: absolute;
          top: 16px;
          left: 16px;
          right: -16px;
          bottom: -16px;
          border: 1px solid var(--rwenzori-gold);
          pointer-events: none;
          opacity: 0.35;
          z-index: -1;
        }

        .rw-about-tag {
          position: absolute;
          top: 28px;
          left: 28px;
          background: var(--rwenzori-forest);
          color: var(--rwenzori-cream);
          padding: 10px 20px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* ─── ─── BOOKING SECTION ─── ─── */
        .rw-booking {
          background: var(--rwenzori-forest);
          padding: clamp(64px, 10vw, 128px) 24px;
          position: relative;
          overflow: hidden;
        }

        .rw-booking::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(184,148,90,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(74,103,65,0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .rw-booking-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .rw-booking-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 72px;
          padding-bottom: 72px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 768px) {
          .rw-booking-top { grid-template-columns: 1fr; gap: 40px; }
        }

        .rw-booking-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: var(--rwenzori-cream);
          line-height: 1.1;
        }

        .rw-booking-h2 em {
          font-style: italic;
          color: var(--rwenzori-gold-lt);
        }

        .rw-booking-body {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(249,246,241,0.55);
          font-weight: 300;
          margin-bottom: 32px;
        }

        .rw-booking-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .rw-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--rwenzori-gold);
          color: var(--rwenzori-cream);
          padding: 15px 36px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--rwenzori-gold);
          border-radius: 1px;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .rw-btn-gold:hover {
          background: var(--rwenzori-gold-lt);
          border-color: var(--rwenzori-gold-lt);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(184,148,90,0.3);
        }

        .rw-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: rgba(249,246,241,0.7);
          padding: 15px 32px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 1px;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .rw-btn-ghost:hover {
          background: rgba(255,255,255,0.07);
          color: var(--rwenzori-cream);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        /* ─── Rates grid ────────────────── */
        .rw-rates-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }

        @media (max-width: 700px) {
          .rw-rates-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .rw-rate-card {
          padding: 28px 24px;
          background: rgba(26,31,27,0.6);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .rw-rate-card:hover { background: rgba(44,61,46,0.8); }

        .rw-rate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--rwenzori-gold);
          transition: width 0.4s ease;
        }

        .rw-rate-card:hover::before { width: 100%; }

        .rw-rate-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 300;
          color: var(--rwenzori-gold-lt);
          line-height: 1;
          display: block;
        }

        .rw-rate-sup {
          font-size: 18px;
          vertical-align: super;
          line-height: 0;
        }

        .rw-rate-label {
          font-size: 13px;
          color: var(--rwenzori-cream);
          margin: 8px 0 4px;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .rw-rate-note {
          font-size: 11px;
          color: rgba(249,246,241,0.35);
          letter-spacing: 0.08em;
        }

        /* ─── Perks strip ───────────────── */
        .rw-perks {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .rw-perk {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.45);
        }

        .rw-perk-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rwenzori-gold);
          flex-shrink: 0;
        }

        /* ─── Entry animations ────────────────────── */
        @keyframes rw-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rw-animate {
          animation: rw-fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="rw-page">
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

          {/* ─── Features ─────────────────────────── */}
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
                {features.map((feature, index) => (
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

          {/* ─── Amenities ─────────────────────────── */}
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

          {/* ─── About ─────────────────────────────── */}
          <section className="rw-about">
            <div className="rw-about-inner">
              <div className="rw-about-text">
                <div className="rw-eyebrow">Our Story</div>
                <h2 className="rw-h2">
                  Escape to <em>Paradise</em>
                </h2>
                <div className="rw-rule" />
                <p className="rw-body" style={{ marginBottom: '20px' }}>
                  Surrounded by the majestic peaks of Mt. Rwenzori, our resort offers a serene escape from the hustle and bustle of everyday life. Whether you&apos;re seeking adventure on the golf course, relaxation at our spa, or simply a moment to breathe in fresh mountain air, Mt. Rwenzori welcomes you.
                </p>
                <p className="rw-body">
                  Our dedicated team is committed to ensuring your stay is nothing short of exceptional, with every meal, every treatment, and every moment carefully curated for your pleasure.
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

          {/* ─── Booking ───────────────────────────── */}
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
                    Book your stay at Mt. Rwenzori Golf Resort & Spa and enjoy luxury accommodation, championship golf, and world-class spa services in the heart of Uganda's mountains.
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

              {/* Rates */}
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

              {/* Perks */}
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
    </>
  );
}