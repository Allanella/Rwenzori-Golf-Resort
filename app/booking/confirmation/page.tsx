'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Check, Calendar, Users, Phone, Mail, MapPin, Shield } from 'lucide-react'
import Link from 'next/link'

export default function BookingConfirmationPage() {
  const [bookingDetails, setBookingDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBookingDetails({
        id: 'RWZ' + Date.now(),
        room: 'Deluxe Room',
        checkIn: '2024-06-15',
        checkOut: '2024-06-18',
        nights: 3,
        guests: 2,
        totalPrice: 300,
        includesGolf: true,
        guestInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '+256 746 077 473',
        },
      })
      setLoading(false)
      setTimeout(() => setVisible(true), 80)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  /* ─── Loading state ─────────────────────── */
  if (loading) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap');
          .bc-loader {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f9f6f1;
            font-family: 'DM Sans', sans-serif;
            gap: 20px;
          }
          .bc-spinner {
            width: 48px; height: 48px;
            border: 1px solid rgba(184,148,90,0.2);
            border-top-color: #b8945a;
            border-radius: 50%;
            animation: bc-spin 0.9s linear infinite;
          }
          @keyframes bc-spin { to { transform: rotate(360deg); } }
          .bc-loader-text {
            font-size: 12px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(26,31,27,0.4);
          }
        `}</style>
        <Header />
        <main>
          <div className="bc-loader">
            <div className="bc-spinner" />
            <p className="bc-loader-text">Confirming your reservation…</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  /* ─── Confirmed state ───────────────────── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        :root {
          --bc-cream:   #f9f6f1;
          --bc-sand:    #e8dece;
          --bc-forest:  #2c3d2e;
          --bc-gold:    #b8945a;
          --bc-gold-lt: #d4aa72;
          --bc-ink:     #1a1f1b;
          --bc-muted:   #6b7569;
        }

        .bc-page {
          font-family: 'DM Sans', sans-serif;
          color: var(--bc-ink);
          background: var(--bc-cream);
        }

        .bc-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .bc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--bc-gold);
          font-weight: 400;
          margin-bottom: 14px;
        }
        .bc-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: var(--bc-gold);
          display: block;
          flex-shrink: 0;
        }

        /* ─── Hero banner (replaces HeroSection) ── */
        .bc-hero {
          background: var(--bc-forest);
          padding: 120px clamp(20px,5vw,64px) 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .bc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 60%, rgba(184,148,90,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 40%, rgba(74,103,65,0.12) 0%, transparent 55%);
          pointer-events: none;
        }

        .bc-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.35), transparent);
        }

        .bc-hero-check {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          color: var(--bc-gold);
          position: relative;
          z-index: 1;
          animation: bc-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }

        @keyframes bc-pop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }

        .bc-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          animation: bc-fade-up 0.7s ease 0.35s both;
        }

        .bc-hero-title em { font-style: italic; color: var(--bc-gold-lt); }

        .bc-hero-id {
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.4);
          position: relative;
          z-index: 1;
          animation: bc-fade-up 0.7s ease 0.5s both;
        }

        .bc-hero-id span {
          color: rgba(249,246,241,0.7);
          font-weight: 400;
        }

        @keyframes bc-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── Main content ────────────────────────── */
        .bc-main {
          padding: clamp(48px, 7vw, 96px) clamp(20px, 5vw, 64px);
        }

        .bc-inner {
          max-width: 960px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .bc-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Two-col card grid ───────────────────── */
        .bc-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--bc-sand);
          margin-bottom: 2px;
        }

        @media (max-width: 680px) {
          .bc-card-grid { grid-template-columns: 1fr; }
        }

        .bc-card {
          background: var(--bc-cream);
          padding: clamp(28px, 4vw, 48px);
        }

        .bc-card--dark {
          background: var(--bc-forest);
        }

        .bc-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .bc-card-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(184,148,90,0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          flex-shrink: 0;
        }

        .bc-card-icon--light { border-color: rgba(184,148,90,0.25); }

        .bc-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--bc-forest);
        }

        .bc-card--dark .bc-card-title { color: #f9f6f1; }

        /* ─── Row items ───────────────────────────── */
        .bc-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(26,31,27,0.07);
          font-size: 13.5px;
        }

        .bc-row:last-child { border-bottom: none; }

        .bc-row-label { color: var(--bc-muted); font-weight: 300; }
        .bc-row-value { color: var(--bc-ink); font-weight: 400; text-align: right; }
        .bc-row-value--gold { color: var(--bc-gold); }
        .bc-row-value--total {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--bc-gold);
        }
        .bc-row-label--total { font-weight: 400; color: var(--bc-ink); font-size: 14px; }

        .bc-card--dark .bc-row { border-color: rgba(255,255,255,0.07); }
        .bc-card--dark .bc-row-label { color: rgba(249,246,241,0.4); }
        .bc-card--dark .bc-row-value { color: rgba(249,246,241,0.85); }

        /* ─── Guest info rows ─────────────────────── */
        .bc-guest-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(26,31,27,0.07);
        }
        .bc-guest-row:last-child { border-bottom: none; }

        .bc-guest-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          flex-shrink: 0;
        }

        .bc-guest-name {
          font-size: 14px;
          font-weight: 400;
          color: var(--bc-ink);
          line-height: 1.2;
        }

        .bc-guest-sub {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bc-muted);
          margin-top: 2px;
        }

        /* ─── Info strip ──────────────────────────── */
        .bc-info-strip {
          background: var(--bc-forest);
          padding: clamp(28px, 4vw, 44px) clamp(28px, 4vw, 48px);
          margin-bottom: 2px;
        }

        .bc-info-head {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bc-info-head::before {
          content: '';
          width: 20px; height: 1px;
          background: var(--bc-gold);
          display: block;
          flex-shrink: 0;
        }

        .bc-info-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 40px;
          list-style: none;
          padding: 0; margin: 0;
        }

        @media (max-width: 560px) { .bc-info-list { grid-template-columns: 1fr; } }

        .bc-info-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          line-height: 1.65;
          font-weight: 300;
        }

        .bc-info-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--bc-gold);
          flex-shrink: 0;
          margin-top: 6px;
          opacity: 0.7;
        }

        /* ─── Actions ─────────────────────────────── */
        .bc-actions {
          background: var(--bc-cream);
          padding: clamp(24px, 3vw, 36px) clamp(28px, 4vw, 48px);
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .bc-btn-primary {
          flex: 1;
          min-width: 160px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--bc-forest);
          color: var(--bc-cream);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--bc-forest);
          border-radius: 1px;
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .bc-btn-primary:hover {
          background: var(--bc-gold);
          border-color: var(--bc-gold);
          transform: translateY(-2px);
        }

        .bc-btn-outline {
          flex: 1;
          min-width: 160px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: var(--bc-forest);
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(26,31,27,0.3);
          border-radius: 1px;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .bc-btn-outline:hover {
          background: var(--bc-forest);
          color: var(--bc-cream);
          border-color: var(--bc-forest);
          transform: translateY(-2px);
        }

        /* ─── Next steps ──────────────────────────── */
        .bc-next {
          background: var(--bc-forest);
          padding: clamp(64px, 8vw, 100px) clamp(20px, 5vw, 64px);
        }

        .bc-next-inner { max-width: 960px; margin: 0 auto; }

        .bc-next-header { text-align: center; margin-bottom: 56px; }

        .bc-next-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.1;
        }

        .bc-next-h2 em { font-style: italic; color: var(--bc-gold-lt); }

        .bc-next-rule {
          width: 40px; height: 1px;
          background: var(--bc-gold);
          margin: 20px auto;
        }

        .bc-next-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.06);
        }

        @media (max-width: 680px) { .bc-next-grid { grid-template-columns: 1fr; } }

        .bc-next-card {
          background: rgba(26,31,27,0.5);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .bc-next-card:hover { background: rgba(44,61,46,0.8); }

        .bc-next-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--bc-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .bc-next-card:hover::before { transform: scaleX(1); }

        .bc-next-icon {
          width: 48px; height: 48px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bc-gold);
          margin-bottom: 22px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .bc-next-card:hover .bc-next-icon {
          background: var(--bc-gold);
          color: var(--bc-cream);
          border-color: var(--bc-gold);
        }

        .bc-next-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 12px;
        }

        .bc-next-desc {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(249,246,241,0.4);
          font-weight: 300;
        }
      `}</style>

      <div className="bc-page">
        <Header />
        <main>

          {/* ─── Hero banner ────────────────────────── */}
          <div className="bc-hero">
            <div className="bc-hero-check">
              <Check size={30} strokeWidth={1.5} />
            </div>
            <h1 className="bc-hero-title">
              Booking <em>Confirmed</em>
            </h1>
            <p className="bc-hero-id">
              Confirmation&nbsp;·&nbsp;<span>{bookingDetails.id}</span>
            </p>
          </div>

          {/* ─── Confirmation details ────────────────── */}
          <section className="bc-main">
            <div className={`bc-inner${visible ? ' visible' : ''}`}>

              {/* Two-col: booking + guest */}
              <div className="bc-card-grid">
                {/* Booking details */}
                <div className="bc-card">
                  <div className="bc-card-head">
                    <div className="bc-card-icon"><Calendar size={16} strokeWidth={1.5} /></div>
                    <div className="bc-card-title">Booking Details</div>
                  </div>
                  <div>
                    {[
                      { label: 'Room Type',   value: bookingDetails.room },
                      { label: 'Check-in',    value: bookingDetails.checkIn },
                      { label: 'Check-out',   value: bookingDetails.checkOut },
                      { label: 'Duration',    value: `${bookingDetails.nights} Nights` },
                      { label: 'Guests',      value: `${bookingDetails.guests} Guests` },
                      ...(bookingDetails.includesGolf
                        ? [{ label: 'Golf Rounds', value: 'Included', gold: true }]
                        : []),
                    ].map((row) => (
                      <div key={row.label} className="bc-row">
                        <span className="bc-row-label">{row.label}</span>
                        <span className={`bc-row-value${(row as any).gold ? ' bc-row-value--gold' : ''}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                    <div className="bc-row" style={{ marginTop: '8px', paddingTop: '16px', borderTop: '1px solid rgba(26,31,27,0.12)', borderBottom: 'none' }}>
                      <span className="bc-row-label--total">Total Amount</span>
                      <span className="bc-row-value--total">${bookingDetails.totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Guest information */}
                <div className="bc-card bc-card--dark">
                  <div className="bc-card-head">
                    <div className="bc-card-icon bc-card-icon--light"><Users size={16} strokeWidth={1.5} /></div>
                    <div className="bc-card-title">Guest Information</div>
                  </div>
                  <div>
                    {[
                      {
                        icon: <Users size={14} strokeWidth={1.5} />,
                        value: `${bookingDetails.guestInfo.firstName} ${bookingDetails.guestInfo.lastName}`,
                        sub: 'Primary Guest',
                        href: null,
                      },
                      {
                        icon: <Mail size={14} strokeWidth={1.5} />,
                        value: bookingDetails.guestInfo.email,
                        sub: 'Email Address',
                        href: `mailto:${bookingDetails.guestInfo.email}`,
                      },
                      {
                        icon: <Phone size={14} strokeWidth={1.5} />,
                        value: bookingDetails.guestInfo.phone,
                        sub: 'Phone Number',
                        href: `tel:${bookingDetails.guestInfo.phone}`,
                      },
                    ].map((item) => (
                      <div key={item.sub} className="bc-guest-row">
                        <div className="bc-guest-icon">{item.icon}</div>
                        <div>
                          <div className="bc-guest-name" style={{ color: '#f9f6f1' }}>{item.value}</div>
                          <div className="bc-guest-sub">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important information */}
              <div className="bc-info-strip">
                <div className="bc-info-head">Important Information</div>
                <ul className="bc-info-list">
                  {[
                    'Check-in from 2:00 PM · Check-out by 11:00 AM',
                    'Free cancellation up to 24 hours before arrival',
                    'Confirmation email sent to your registered address',
                    'For changes contact us at +256 746 077 473',
                  ].map((item) => (
                    <li key={item} className="bc-info-item">
                      <span className="bc-info-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="bc-actions">
                <Link href="/" className="bc-btn-primary">
                  Return to Homepage
                  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="tel:+256746077473" className="bc-btn-outline">
                  <Phone size={14} strokeWidth={1.5} />
                  Contact Us
                </a>
              </div>

            </div>
          </section>

          {/* ─── What's next ────────────────────────── */}
          <section className="bc-next">
            <div className="bc-next-inner">
              <div className="bc-next-header">
                <div className="bc-eyebrow" style={{ color: 'rgba(184,148,90,0.85)', justifyContent: 'center' }}>
                  Prepare for Your Stay
                </div>
                <h2 className="bc-next-h2">What's <em>Next?</em></h2>
                <div className="bc-next-rule" />
              </div>

              <div className="bc-next-grid">
                {[
                  {
                    icon: <MapPin size={18} strokeWidth={1.5} />,
                    title: 'Plan Your Journey',
                    desc: 'Find directions and plan your travel to Mt. Rwenzori Golf Resort & Spa in Kasese, Uganda.',
                  },
                  {
                    icon: <Calendar size={18} strokeWidth={1.5} />,
                    title: 'Explore Activities',
                    desc: 'Discover our championship golf course, spa services, and the surrounding mountain attractions.',
                  },
                  {
                    icon: <Shield size={18} strokeWidth={1.5} />,
                    title: 'Travel Insurance',
                    desc: 'Consider travel insurance for a completely worry-free mountain vacation experience.',
                  },
                ].map((card) => (
                  <div key={card.title} className="bc-next-card">
                    <div className="bc-next-icon">{card.icon}</div>
                    <div className="bc-next-title">{card.title}</div>
                    <p className="bc-next-desc">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}