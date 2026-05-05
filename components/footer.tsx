import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Music } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/golf', label: 'Golf' },
    { href: '/spa', label: 'Spa' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    '9-Hole Golf Course',
    'Premium Spa & Wellness',
    'Full English Breakfast',
    'High-Speed WiFi',
    'Event Hosting',
    'Mountain Trekking',
  ];

  const socials = [
    {
      href: 'https://www.facebook.com/profile.php?id=61589477902150',
      icon: Facebook,
      label: 'Facebook',
    },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://tiktok.com/@mtrwenzori', icon: Music, label: 'TikTok' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap');

        .ftr {
          background: #1a1f1b;
          font-family: 'DM Sans', sans-serif;
          color: rgba(249,246,241,0.55);
          position: relative;
          overflow: hidden;
        }

        /* subtle radial glows */
        .ftr::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,148,90,0.5), transparent);
        }

        .ftr::after {
          content: '';
          position: absolute;
          bottom: -120px; right: -120px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(44,61,46,0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── CTA strip ──────────────────── */
        .ftr-cta {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: clamp(40px, 6vw, 72px) clamp(20px, 5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .ftr-cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 300;
          color: #f9f6f1;
          line-height: 1.15;
          max-width: 540px;
        }

        .ftr-cta-text em {
          font-style: italic;
          color: #d4aa72;
        }

        .ftr-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #b8945a;
          color: #f9f6f1;
          padding: 14px 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #b8945a;
          border-radius: 1px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ftr-cta-btn:hover {
          background: #d4aa72;
          border-color: #d4aa72;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(184,148,90,0.3);
        }

        /* ─── Main grid ──────────────────── */
        .ftr-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 88px) clamp(20px, 5vw, 64px) 0;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px 56px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .ftr-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .ftr-main { grid-template-columns: 1fr; }
        }

        /* ─── Brand col ──────────────────── */
        .ftr-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .ftr-brand-logo img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.3);
        }

        .ftr-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #f9f6f1;
          line-height: 1;
        }

        .ftr-brand-sub {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b8945a;
          margin-top: 4px;
          font-weight: 400;
          display: block;
        }

        .ftr-brand-desc {
          font-size: 13.5px;
          line-height: 1.8;
          color: rgba(249,246,241,0.45);
          font-weight: 300;
          margin-bottom: 28px;
          max-width: 300px;
        }

        .ftr-socials {
          display: flex;
          gap: 6px;
        }

        .ftr-social {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(249,246,241,0.4);
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }

        .ftr-social:hover {
          border-color: #b8945a;
          color: #b8945a;
          background: rgba(184,148,90,0.08);
        }

        /* ─── Column heading ─────────────── */
        .ftr-col-head {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b8945a;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .ftr-col-head::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #b8945a;
          flex-shrink: 0;
        }

        /* ─── Nav links ──────────────────── */
        .ftr-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ftr-nav-link {
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          text-decoration: none;
          padding: 6px 0;
          display: inline-flex;
          align-items: center;
          gap: 0;
          border-bottom: 1px solid transparent;
          transition: color 0.25s ease, gap 0.3s ease;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .ftr-nav-link::before {
          content: '—';
          font-size: 10px;
          color: #b8945a;
          opacity: 0;
          width: 0;
          overflow: hidden;
          transition: opacity 0.25s ease, width 0.3s ease;
          letter-spacing: 0;
        }

        .ftr-nav-link:hover {
          color: #f9f6f1;
          gap: 8px;
        }

        .ftr-nav-link:hover::before {
          opacity: 1;
          width: 20px;
        }

        /* ─── Services list ──────────────── */
        .ftr-service-item {
          font-size: 13px;
          color: rgba(249,246,241,0.45);
          padding: 6px 0;
          font-weight: 300;
          letter-spacing: 0.02em;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ftr-service-item::before {
          content: '';
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #b8945a;
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ─── Contact items ──────────────── */
        .ftr-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ftr-contact-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 13px;
          color: rgba(249,246,241,0.5);
          font-weight: 300;
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        a.ftr-contact-item:hover { color: rgba(249,246,241,0.85); }

        .ftr-contact-icon {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(184,148,90,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8945a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ─── Bottom bar ─────────────────── */
        .ftr-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px clamp(20px, 5vw, 64px) clamp(32px, 5vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 56px;
          position: relative;
          z-index: 1;
        }

        .ftr-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ftr-copyright {
          font-size: 12px;
          color: rgba(249,246,241,0.35);
          letter-spacing: 0.04em;
        }

        .ftr-dev {
          font-size: 11px;
          color: rgba(249,246,241,0.2);
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ftr-dev a {
          color: rgba(249,246,241,0.3);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .ftr-dev a:hover { color: #b8945a; }

        .ftr-dev-sep {
          opacity: 0.3;
        }

        .ftr-bottom-right {
          display: flex;
          gap: 24px;
        }

        .ftr-legal-link {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.25);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .ftr-legal-link:hover { color: rgba(249,246,241,0.6); }
      `}</style>

      <footer className="ftr">
        {/* ─── CTA strip ──────────────────────────── */}
        <div className="ftr-cta">
          <p className="ftr-cta-text">
            Your mountain escape <em>awaits.</em>
            <br />
            Reserve your stay today.
          </p>
          <Link href="/booking" className="ftr-cta-btn">
            Book Your Stay
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* ─── Main grid ──────────────────────────── */}
        <div className="ftr-main">
          {/* Brand */}
          <div>
            <Link href="/" className="ftr-brand-logo">
              <img src="/logo.JPG" alt="Mt. Rwenzori Golf Resort" />
              <div>
                <span className="ftr-brand-name">Mt. Rwenzori</span>
                <span className="ftr-brand-sub">Golf Resort &amp; Spa</span>
              </div>
            </Link>
            <p className="ftr-brand-desc">
              A serene mountain retreat in the heart of the Rwenzori Mountains — offering luxury
              accommodation, championship golf, and world-class spa services.
            </p>
            <div className="ftr-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ftr-social"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="ftr-col-head">Navigate</div>
            <ul className="ftr-nav-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="ftr-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="ftr-col-head">Services</div>
            <div>
              {services.map((s) => (
                <div key={s} className="ftr-service-item">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="ftr-col-head">Contact Us</div>
            <div className="ftr-contact-list">
              <div className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <MapPin size={13} />
                </div>
                <span>Kasese, Rwenzori Mountain Region, Uganda</span>
              </div>
              <a href="tel:+256746077473" className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <Phone size={13} />
                </div>
                <span>+256 746 077 473</span>
              </a>
              <a href="mailto:info@mtrwenzori.com" className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <Mail size={13} />
                </div>
                <span>info@mtrwenzori.com</span>
              </a>
              <div className="ftr-contact-item">
                <div className="ftr-contact-icon">
                  <Clock size={13} />
                </div>
                <span>
                  Open Year-Round
                  <br />
                  Check-in from 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─────────────────────────── */}
        <div className="ftr-bottom">
          <div className="ftr-bottom-left">
            <p className="ftr-copyright">
              &copy; {currentYear} Mt. Rwenzori Golf Resort &amp; Spa. All rights reserved.
            </p>
            <div className="ftr-dev">
              <span>Developed by Baliddawa Allan</span>
              <span className="ftr-dev-sep">·</span>
              <a href="tel:0700966715">0700 966 715</a>
              <span className="ftr-dev-sep">·</span>
              <a href="tel:0785639406">0785 639 406</a>
            </div>
          </div>
          <div className="ftr-bottom-right">
            <Link href="#" className="ftr-legal-link">
              Privacy
            </Link>
            <Link href="#" className="ftr-legal-link">
              Terms
            </Link>
            <Link href="/contact" className="ftr-legal-link">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
