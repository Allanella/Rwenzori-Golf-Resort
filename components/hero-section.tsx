'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  image,
  video,
  ctaText,
  ctaHref,
  overlay = true,
}: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (video) {
      const timer = setTimeout(() => setVideoLoaded(true), 800);
      return () => clearTimeout(timer);
    }
  }, [video]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          font-family: 'DM Sans', sans-serif;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes hero-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes hero-line-expand {
          from { width: 0; opacity: 0; }
          to   { width: 60px; opacity: 1; }
        }

        @keyframes hero-scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }

        @keyframes hero-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        @keyframes video-zoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }

        .hero-animate-title {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .hero-animate-line {
          animation: hero-line-expand 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
        }

        .hero-animate-subtitle {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
        }

        .hero-animate-cta {
          animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
        }

        .hero-animate-badge {
          animation: hero-fade-in 1s ease 0.1s both;
        }

        .hero-animate-scroll {
          animation: hero-scroll-bounce 2s ease-in-out 2s infinite;
        }

        .hero-video-loaded {
          animation: video-zoom 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-cta-primary {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          padding: 16px 36px;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.3s ease, box-shadow 0.35s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .hero-cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-cta-primary:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1);
        }

        .hero-cta-primary:hover::before {
          opacity: 1;
          animation: hero-shimmer 1.5s ease infinite;
        }

        .hero-cta-primary svg {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-cta-primary:hover svg {
          transform: translateX(5px);
        }

        .hero-cta-secondary {
          color: rgba(255,255,255,0.75);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 2px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .hero-cta-secondary:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.7);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 6px 16px 6px 8px;
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 28px;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          background: #a8d5ba;
          border-radius: 50%;
          animation: hero-fade-in 1s ease infinite alternate;
        }

        .hero-noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
          pointer-events: none;
          z-index: 3;
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .hero-gradient-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.05) 40%,
            rgba(0,0,0,0.55) 100%
          );
          z-index: 2;
        }

        .hero-light-leak {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 70%;
          background: radial-gradient(ellipse, rgba(180,160,130,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 2;
          transition: transform 0.1s ease-out;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 10vh;
          text-align: center;
          z-index: 10;
          padding-left: 24px;
          padding-right: 24px;
        }

        .hero-divider {
          width: 60px;
          height: 1px;
          background: rgba(255,255,255,0.5);
          margin: 0 auto 28px;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.5);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          z-index: 10;
          cursor: default;
        }

        .hero-scroll-track {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
          border-radius: 1px;
        }

        .hero-scroll-thumb {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 40%;
          background: rgba(255,255,255,0.6);
          border-radius: 1px;
          animation: hero-scroll-slide 1.8s ease-in-out 2.2s infinite;
        }

        @keyframes hero-scroll-slide {
          0%   { top: -40%; }
          60%  { top: 100%; }
          61%  { top: -40%; }
          100% { top: -40%; }
        }

        .hero-stat-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 0;
          z-index: 10;
          animation: hero-fade-up 1s ease 1.8s both;
        }

        .hero-stat {
          padding: 18px 36px;
          border-top: 1px solid rgba(255,255,255,0.12);
          border-right: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          backdrop-filter: blur(10px);
          background: rgba(0,0,0,0.2);
        }

        .hero-stat:last-child {
          border-right: none;
        }

        .hero-stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: #fff;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-stat-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-stat-bar { display: none; }
          .hero-content { padding-bottom: 80px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="hero-section"
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(560px, 100svh, 900px)',
          overflow: 'hidden',
        }}
      >
        {/* ─── Media layer ─── */}
        {video && !videoError ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={video && videoLoaded ? 'hero-video-loaded' : ''}
            onError={handleVideoError}
            onCanPlay={() => setVideoLoaded(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1.2s ease',
              transformOrigin: 'center center',
            }}
          />
        ) : (
          <Image
            src={image || '/images/hero-background.jpg'}
            alt={title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        )}

        {/* ─── Atmosphere layers ─── */}
        <div className="hero-gradient-base" />
        <div className="hero-vignette" />
        <div
          className="hero-light-leak"
          style={{
            transform: mounted
              ? `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
              : undefined,
          }}
        />
        {overlay && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
              zIndex: 2,
              transition: 'background 0.3s ease',
              pointerEvents: 'none',
            }}
          />
        )}
        <div className="hero-noise-overlay" />

        {/* ─── Main content ─── */}
        <div className="hero-content">
          <div style={{ maxWidth: '760px', width: '100%' }}>
            {/* Badge */}
            <div className="hero-animate-badge" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Crafted with Excellence
              </div>
            </div>

            {/* Title */}
            <h1
              className="hero-title hero-animate-title"
              style={{
                fontSize: 'clamp(42px, 7vw, 96px)',
                fontWeight: 300,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                margin: '0 0 0',
              }}
            >
              {title}
            </h1>

            {/* Decorative line */}
            <div className="hero-divider hero-animate-line" />

            {/* Subtitle */}
            {subtitle && (
              <p
                className="hero-animate-subtitle"
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: 'rgba(255,255,255,0.72)',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  letterSpacing: '0.02em',
                  marginBottom: '44px',
                  maxWidth: '560px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            {ctaText && ctaHref && (
              <div
                className="hero-animate-cta"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link href={ctaHref} className="hero-cta-primary">
                  {ctaText}
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <Link href="#discover" className="hero-cta-secondary">
                  Discover More
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ─── Scroll indicator ─── */}
        <div className="hero-scroll-indicator hero-animate-scroll" style={{ animation: 'none' }}>
          <div className="hero-scroll-track">
            <div className="hero-scroll-thumb" />
          </div>
          <span>Scroll</span>
        </div>

        {/* ─── Stat bar ─── */}
        <div className="hero-stat-bar">
          {[
            { number: '15+', label: 'Years of Trust' },
            { number: '2,400+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '40+', label: 'Awards Won' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-number">{stat.number}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}