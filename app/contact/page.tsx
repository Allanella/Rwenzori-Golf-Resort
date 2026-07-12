import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Mt. Rwenzori Golf Resort & Spa',
  description: "Get in touch with Mt. Rwenzori Golf Resort & Spa. Find our contact details, location, and directions to Uganda's finest mountain retreat.",
};

const faqs = [
  {
    q: 'What is the best time to visit Mt. Rwenzori?',
    a: 'Mt. Rwenzori is beautiful year-round. The dry seasons (June–July and December–February) offer the clearest weather and best golf conditions.',
  },
  {
    q: 'Do I need to book in advance?',
    a: 'We recommend booking 2–4 weeks ahead, especially during peak seasons. Last-minute bookings are subject to availability.',
  },
  {
    q: 'What amenities are included with accommodation?',
    a: 'All rooms include breakfast, WiFi, access to all facilities (golf, spa, terrace), and 24/7 concierge service.',
  },
  {
    q: 'Can I bring my family with children?',
    a: 'Absolutely! Mt. Rwenzori is family-friendly with activities suitable for all ages. Contact us for family packages.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made 14 days before arrival are fully refundable. Within 14 days, a 50% fee applies.',
  },
  {
    q: 'Are pets allowed?',
    a: 'Yes, well-behaved pets are welcome. Please notify us in advance — a small pet fee applies.',
  },
];

export default function ContactPage() {
  return (
    <>
      {}`
      <style>{`
        .ct-page {
          font-family: var(--font-sans, 'DM Sans', sans-serif);
          color: #1a1f1b;
          background: #f9f6f1;
        }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b8945a;
          font-weight: 400;
          margin-bottom: 18px;
        }
        .ct-eyebrow::before {
          content: '';
          width: 26px; height: 1px;
          background: #b8945a;
          display: block; flex-shrink: 0;
        }
        .ct-eyebrow--light { color: rgba(184,148,90,0.85); }
        .ct-eyebrow--light::before { background: rgba(184,148,90,0.85); }

        .ct-h2 {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.1;
          color: #2c3d2e;
        }
        .ct-h2 em { font-style: italic; color: #b8945a; }
        .ct-h2--light { color: #f9f6f1; }

        .ct-rule { width: 48px; height: 1px; background: #b8945a; margin: 20px 0; }
        .ct-rule--center { margin: 20px auto; }

        .ct-body {
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.85;
          color: #6b7569;
          font-weight: 300;
        }

        /* ─── Info strip ─── */
        .ct-info {
          background: #2c3d2e;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          position: relative;
          overflow: hidden;
        }
        .ct-info::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.4), transparent);
        }
        .ct-info-inner { max-width: 1280px; margin: 0 auto; }
        .ct-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
        }
        @media (max-width: 900px) { .ct-info-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ct-info-grid { grid-template-columns: 1fr; } }

        .ct-info-card {
          background: rgba(26,31,27,0.5);
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }
        .ct-info-card:hover { background: rgba(44,61,46,0.8); }
        .ct-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: #b8945a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ct-info-card:hover::before { transform: scaleX(1); }

        .ct-info-icon {
          width: 40px; height: 40px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8945a;
          margin-bottom: 18px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .ct-info-card:hover .ct-info-icon {
          background: #b8945a;
          color: #f9f6f1;
          border-color: #b8945a;
        }

        .ct-info-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(184,148,90,0.7);
          margin-bottom: 10px;
          font-weight: 400;
        }

        .ct-info-value {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 18px;
          font-weight: 400;
          color: #f9f6f1;
          line-height: 1.5;
        }

        .ct-info-sub {
          font-size: 12px;
          color: rgba(249,246,241,0.35);
          margin-top: 6px;
          letter-spacing: 0.05em;
        }

        .ct-info-link {
          color: #f9f6f1;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .ct-info-link:hover { color: #d4aa72; }

        /* ─── Form + map section ─── */
        .ct-main {
          background: #f9f6f1;
          padding: clamp(64px, 9vw, 112px) clamp(20px, 5vw, 64px);
        }
        .ct-main-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) { .ct-main-inner { grid-template-columns: 1fr; gap: 56px; } }

        /* Map side */
        .ct-map-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          filter: saturate(0.8);
        }

        .ct-map-wrap { position: relative; }
        .ct-map-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,31,27,0.75) 0%, rgba(26,31,27,0.2) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
        }
        .ct-map-title {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 28px;
          font-weight: 300;
          color: #f9f6f1;
          margin-bottom: 8px;
        }
        .ct-map-sub {
          font-size: 13px;
          color: rgba(249,246,241,0.55);
          margin-bottom: 20px;
          font-weight: 300;
          line-height: 1.6;
        }
        .ct-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #b8945a;
          color: #f9f6f1;
          padding: 11px 24px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 1px;
          transition: background 0.3s ease;
          width: fit-content;
        }
        .ct-map-btn:hover { background: #d4aa72; }

        .ct-map-note {
          margin-top: 16px;
          font-size: 13px;
          color: #6b7569;
          font-weight: 300;
          line-height: 1.7;
        }

        /* ─── Getting there ─── */
        .ct-travel {
          background: #2c3d2e;
          padding: clamp(64px, 9vw, 112px) clamp(20px, 5vw, 64px);
          position: relative;
          overflow: hidden;
        }
        .ct-travel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(184,148,90,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .ct-travel-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }

        .ct-travel-header { text-align: center; margin-bottom: 64px; }

        .ct-travel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.06);
        }
        @media (max-width: 700px) { .ct-travel-grid { grid-template-columns: 1fr; } }

        .ct-travel-card {
          background: rgba(26,31,27,0.5);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease;
        }
        .ct-travel-card:hover { background: rgba(44,61,46,0.8); }
        .ct-travel-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: #b8945a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ct-travel-card:hover::before { transform: scaleX(1); }

        .ct-travel-icon {
          width: 48px; height: 48px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8945a;
          margin-bottom: 22px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .ct-travel-card:hover .ct-travel-icon {
          background: #b8945a;
          color: #f9f6f1;
          border-color: #b8945a;
        }
        .ct-travel-title {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 22px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 12px;
        }
        .ct-travel-desc {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(249,246,241,0.45);
          font-weight: 300;
        }

        /* ─── FAQ ─── */
        .ct-faq {
          background: #f9f6f1;
          padding: clamp(64px, 9vw, 112px) clamp(20px, 5vw, 64px);
        }
        .ct-faq-inner { max-width: 820px; margin: 0 auto; }
        .ct-faq-header { text-align: center; margin-bottom: 56px; }

        .ct-faq-item {
          padding: 24px 0;
          border-bottom: 1px solid rgba(26,31,27,0.08);
        }
        .ct-faq-item:last-child { border-bottom: none; }

        .ct-faq-q {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 10px;
        }
        .ct-faq-num {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 13px;
          color: #b8945a;
          letter-spacing: 0.12em;
          flex-shrink: 0;
          padding-top: 2px;
          min-width: 24px;
        }
        .ct-faq-question {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 20px;
          font-weight: 400;
          color: #2c3d2e;
          line-height: 1.3;
        }
        .ct-faq-answer {
          font-size: 14px;
          line-height: 1.8;
          color: #6b7569;
          font-weight: 300;
          padding-left: 40px;
        }
      `}</style>

      {}
      <div className="ct-page">
        <Header />
        <main>
          <HeroSection
            title="Let's Connect"
            subtitle="We'd love to hear from you — whether it's a booking, a question, or simply to say hello."
            image="/images/_DSC9736.png"
          />

          {}
          {/* ─── Contact info ───────────────────────── */}
          <section className="ct-info">
            <div className="ct-info-inner">
              <div className="ct-info-grid">

                <div className="ct-info-card">
                  <div className="ct-info-icon"><MapPin size={16} strokeWidth={1.5} /></div>
                  <div className="ct-info-label">Address</div>
                  <div className="ct-info-value">4km off Fort Portal – Kasese Road<br />Rwenzori Region, Uganda</div>
                  <div className="ct-info-sub">20 minutes drive from Fort Portal City</div>
                </div>

                <div className="ct-info-card">
                  <div className="ct-info-icon"><Phone size={16} strokeWidth={1.5} /></div>
                  <div className="ct-info-label">Phone</div>
                  <div className="ct-info-value">
                    <a href="tel:+256746077473" className="ct-info-link">+256 746 077 473</a>
                  </div>
                  <div className="ct-info-sub">Available 24 / 7</div>
                </div>

                <div className="ct-info-card">
                  <div className="ct-info-icon"><Mail size={16} strokeWidth={1.5} /></div>
                  <div className="ct-info-label">Email</div>
                  <div className="ct-info-value" style={{ fontSize: '15px' }}>
                    <a href="mailto:mtrwenzorigolfresortspa@gmail.com" className="ct-info-link">
                      mtrwenzorigolfresortspa@gmail.com
                    </a>
                  </div>
                  <div className="ct-info-sub">Response within 24 hours</div>
                </div>

                <div className="ct-info-card">
                  <div className="ct-info-icon"><Clock size={16} strokeWidth={1.5} /></div>
                  <div className="ct-info-label">Hours</div>
                  <div className="ct-info-value">Open Year-Round</div>
                  <div className="ct-info-sub">Check-in 2:00 PM · Check-out 11:00 AM<br />Reception 24 / 7</div>
                </div>

              </div>
            </div>
          </section>

          {}
          {/* ─── Form + Map ─────────────────────────── */}
          <section className="ct-main">
            <div className="ct-main-inner">

              {/* Contact form */}
              <div>
                <div className="ct-eyebrow">Send a Message</div>
                <h2 className="ct-h2">
                  We&apos;re here to <em>help</em>
                </h2>
                <div className="ct-rule" style={{ marginBottom: '32px' }} />
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <div className="ct-eyebrow">Find Us</div>
                <h2 className="ct-h2">
                  Our <em>Location</em>
                </h2>
                <div className="ct-rule" style={{ marginBottom: '32px' }} />

                <div className="ct-map-wrap">
                  <img
                    src="/images/_DSC9760.jpg"
                    alt="Mt. Rwenzori Golf Resort & Spa location"
                    className="ct-map-img"
                    loading="lazy"
                  />
                  <div className="ct-map-overlay">
                    <div className="ct-map-title">Mt. Rwenzori Golf Resort & Spa</div>
                    <p className="ct-map-sub">4km off Fort Portal – Kasese Road · 20 mins from Fort Portal City</p>
                    <a
                      href="https://maps.google.com/?q=Mt+Rwenzori+Golf+Resort+Kasese+Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ct-map-btn"
                    >
                      Open in Google Maps
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="ct-map-note">
                  Search <strong>&quot;Mt. Rwenzori Golf Resort &amp; Spa&quot;</strong> on Google Maps for turn-by-turn directions from your location.
                </p>
              </div>

            </div>
          </section>

          {}
          {/* ─── Getting there ──────────────────────── */}
          <section className="ct-travel">
            <div className="ct-travel-inner">
              <div className="ct-travel-header">
                <div className="ct-eyebrow ct-eyebrow--light" style={{ justifyContent: 'center' }}>Directions</div>
                <h2 className="ct-h2 ct-h2--light" style={{ textAlign: 'center' }}>
                  Getting <em>There</em>
                </h2>
                <div className="ct-rule ct-rule--center" style={{ background: 'rgba(184,148,90,0.5)' }} />
              </div>

              <div className="ct-travel-grid">
                {[
                  {
                    title: 'By Air',
                    desc: 'Fly into Entebbe International Airport or land directly at the Kasese Airstrip. We offer arranged airport pickups and private transfers directly to the resort.',
                    svg: (
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    ),
                  },
                  {
                    title: 'By Road',
                    desc: 'Easily accessible via Kampala–Fort Portal highway. Turn off just 4km before reaching Fort Portal on the main Fort Portal–Kasese road. We are only a brief, 20-minute drive from Fort Portal City.',
                    svg: (
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Private Transfer',
                    desc: 'We arrange private luxury 4x4 vehicles from Kampala, Entebbe, or Fort Portal City center directly to our gates 4km off the main Kasese highway.',
                    svg: (
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="ct-travel-card">
                    <div className="ct-travel-icon">{item.svg}</div>
                    <div className="ct-travel-title">{item.title}</div>
                    <p className="ct-travel-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {}
          {/* ─── FAQ ────────────────────────────────── */}
          <section className="ct-faq">
            <div className="ct-faq-inner">
              <div className="ct-faq-header">
                <div className="ct-eyebrow" style={{ justifyContent: 'center' }}>Quick Answers</div>
                <h2 className="ct-h2" style={{ textAlign: 'center' }}>
                  Frequently Asked <em>Questions</em>
                </h2>
                <div className="ct-rule ct-rule--center" />
              </div>

              {faqs.map((faq, i) => (
                <div key={faq.q} className="ct-faq-item">
                  <div className="ct-faq-q">
                    <span className="ct-faq-num">0{i + 1}</span>
                    <div className="ct-faq-question">{faq.q}</div>
                  </div>
                  <p className="ct-faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}