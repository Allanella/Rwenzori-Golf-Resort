'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Facebook, Instagram, Twitter, Phone, Music, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') setActiveLink(window.location.pathname);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/golf', label: 'Golf' },
    { href: '/spa', label: 'Spa' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/profile.php?id=61589477902150',
      icon: Facebook,
      label: 'Facebook',
    },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://x.com/home', icon: Twitter, label: 'X' },
    { href: 'https://tiktok.com/@mtrwenzori', icon: Music, label: 'TikTok' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        /* ─── tokens ─────────────────────────────── */
        :root {
          --hdr-cream:   #f9f6f1;
          --hdr-forest:  #2c3d2e;
          --hdr-gold:    #b8945a;
          --hdr-gold-lt: #d4aa72;
          --hdr-ink:     #1a1f1b;
          --hdr-muted:   rgba(26,31,27,0.45);
          --hdr-h:       72px;
        }

        /* ─── top bar ─────────────────────────────── */
        .hdr-topbar {
          height: 36px;
          background: var(--hdr-forest);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(16px, 4vw, 48px);
          transition: height 0.4s ease, opacity 0.4s ease;
          overflow: hidden;
        }

        .hdr-topbar.scrolled {
          height: 0;
          opacity: 0;
          pointer-events: none;
        }

        .hdr-topbar-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.55);
        }

        .hdr-topbar-left svg {
          color: var(--hdr-gold);
          flex-shrink: 0;
        }

        .hdr-topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hdr-social-link {
          color: rgba(249,246,241,0.45);
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .hdr-social-link:hover { color: var(--hdr-gold-lt); }

        /* ─── main bar ────────────────────────────── */
        .hdr-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transform: translateY(36px);
          transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, height 0.4s ease;
          height: var(--hdr-h);
          display: flex;
          align-items: center;
        }

        .hdr-bar.scrolled {
          transform: translateY(0);
          background: rgba(249,246,241,0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(26,31,27,0.08), 0 4px 24px rgba(26,31,27,0.06);
        }

        .hdr-bar.menu-open {
          background: var(--hdr-forest);
        }

        .hdr-bar-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 clamp(16px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ─── logo ────────────────────────────────── */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid rgba(184,148,90,0.3);
          transition: border-color 0.3s ease;
        }

        .hdr-logo:hover .hdr-logo-img { border-color: var(--hdr-gold); }

        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .hdr-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--hdr-forest);
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .hdr-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--hdr-gold);
          margin-top: 3px;
          font-weight: 400;
        }

        .hdr-bar.menu-open .hdr-logo-main { color: var(--hdr-cream); }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-main { color: #fff; }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-sub { color: rgba(255,255,255,0.6); }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-logo-img { border-color: rgba(255,255,255,0.3); }

        /* ─── desktop nav ─────────────────────────── */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 1024px) { .hdr-nav { display: none; } }

        .hdr-nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 400;
          color: var(--hdr-ink);
          text-decoration: none;
          padding: 8px 14px;
          transition: color 0.25s ease;
        }

        .hdr-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: var(--hdr-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hdr-nav-link:hover,
        .hdr-nav-link.active { color: var(--hdr-gold); }

        .hdr-nav-link:hover::after,
        .hdr-nav-link.active::after { transform: scaleX(1); }

        /* inverted when hero is visible */
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link {
          color: rgba(255,255,255,0.8);
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link:hover,
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link.active {
          color: #fff;
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-nav-link::after {
          background: rgba(255,255,255,0.7);
        }

        /* ─── desktop actions ─────────────────────── */
        .hdr-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) { .hdr-actions { display: none; } }

        .hdr-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--hdr-muted);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .hdr-phone svg { color: var(--hdr-gold); }
        .hdr-phone:hover { color: var(--hdr-gold); }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-phone {
          color: rgba(255,255,255,0.6);
        }
        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-phone:hover {
          color: #fff;
        }

        .hdr-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--hdr-gold);
          color: var(--hdr-cream);
          padding: 10px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          border: 1px solid var(--hdr-gold);
          border-radius: 1px;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          white-space: nowrap;
        }

        .hdr-book-btn:hover {
          background: var(--hdr-gold-lt);
          border-color: var(--hdr-gold-lt);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(184,148,90,0.35);
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-book-btn {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          backdrop-filter: blur(8px);
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-book-btn:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        /* ─── hamburger ───────────────────────────── */
        .hdr-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 5px;
          padding: 0;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) { .hdr-burger { display: flex; } }

        .hdr-burger-line {
          display: block;
          width: 24px;
          height: 1px;
          background: var(--hdr-forest);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.25s ease,
                      width 0.35s ease;
          transform-origin: center;
        }

        .hdr-bar:not(.scrolled):not(.menu-open) .hdr-burger-line { background: #fff; }
        .hdr-bar.menu-open .hdr-burger-line { background: var(--hdr-cream); }

        .hdr-burger.open .hdr-burger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hdr-burger.open .hdr-burger-line:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .hdr-burger.open .hdr-burger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* ─── mobile drawer ───────────────────────── */
        .hdr-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background: var(--hdr-forest);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }

        .hdr-drawer.open { transform: translateX(0); }

        .hdr-drawer-top {
          height: var(--hdr-h);
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .hdr-drawer-body {
          flex: 1;
          padding: 40px clamp(24px, 6vw, 60px) 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hdr-drawer-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: padding-left 0.3s ease;
        }

        .hdr-drawer-nav-link:hover { padding-left: 8px; }

        .hdr-drawer-link-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 300;
          color: var(--hdr-cream);
          line-height: 1;
          transition: color 0.25s ease;
        }

        .hdr-drawer-nav-link:hover .hdr-drawer-link-text { color: var(--hdr-gold-lt); }

        .hdr-drawer-link-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(249,246,241,0.25);
          align-self: flex-end;
          padding-bottom: 4px;
        }

        .hdr-drawer-footer {
          padding: 32px clamp(24px, 6vw, 60px);
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .hdr-drawer-book {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--hdr-gold);
          color: var(--hdr-cream);
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 1px;
          transition: background 0.3s ease;
        }

        .hdr-drawer-book:hover { background: var(--hdr-gold-lt); }

        .hdr-drawer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hdr-drawer-social-link {
          color: rgba(249,246,241,0.35);
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .hdr-drawer-social-link:hover { color: var(--hdr-gold-lt); }

        /* ─── Backdrop for mobile ─────────────────── */
        .hdr-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .hdr-backdrop.open {
          opacity: 1;
          pointer-events: all;
        }
      `}</style>

      {/* ─── Top bar ─────────────────────────────── */}
      <div className={`hdr-topbar${scrolled ? ' scrolled' : ''}`}>
        <div className="hdr-topbar-left">
          <Phone size={12} />
          +256 746 077 473 / +256 774 751 727 &nbsp;·&nbsp; Kasese, Uganda
        </div>
        <div className="hdr-topbar-right">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hdr-social-link"
              aria-label={s.label}
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* ─── Main header bar ─────────────────────── */}
      <header className={`hdr-bar${scrolled ? ' scrolled' : ''}${isOpen ? ' menu-open' : ''}`}>
        <div className="hdr-bar-inner">
          {/* Logo */}
          <Link href="/" className="hdr-logo" onClick={() => setIsOpen(false)}>
            <img src="/logo.JPG" alt="Mt. Rwenzori Golf Resort" className="hdr-logo-img" />
            <div className="hdr-logo-text">
              <span className="hdr-logo-main">Mt. Rwenzori</span>
              <span className="hdr-logo-sub">Golf Resort &amp; Spa</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hdr-nav-link${activeLink === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hdr-actions">
            <a href="tel:+256746077473" className="hdr-phone">
              <Phone size={14} />
              +256 746 077 473
            </a>
            <Link href="/booking" className="hdr-book-btn">
              <Calendar size={13} />
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hdr-burger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="hdr-burger-line" />
            <span className="hdr-burger-line" />
            <span className="hdr-burger-line" />
          </button>
        </div>
      </header>

      {/* ─── Mobile backdrop ─────────────────────── */}
      <div
        className={`hdr-backdrop${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Mobile drawer ───────────────────────── */}
      <div
        ref={menuRef}
        className={`hdr-drawer${isOpen ? ' open' : ''}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Spacer to match header height */}
        <div className="hdr-drawer-top" />

        <div className="hdr-drawer-body">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="hdr-drawer-nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="hdr-drawer-link-text">{link.label}</span>
              <span className="hdr-drawer-link-num">0{index + 1}</span>
            </Link>
          ))}
        </div>

        <div className="hdr-drawer-footer">
          <Link href="/booking" className="hdr-drawer-book" onClick={() => setIsOpen(false)}>
            <Calendar size={14} />
            Book Your Stay
          </Link>

          <div className="hdr-drawer-socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hdr-drawer-social-link"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
            <a href="tel:+256746077473" className="hdr-drawer-social-link" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
