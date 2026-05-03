'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (video) {
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [video]);

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden group">
      {video && !videoError ? (
        <>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105 ${
              videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onError={handleVideoError}
            onCanPlay={() => setVideoLoaded(true)}
          />
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white mx-auto mb-6"></div>
                  <p className="text-xl font-medium animate-pulse">Loading experience...</p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={image || '/images/hero-background.jpg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      )}

      {/* Animated overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 md:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
              {subtitle}
            </p>
          )}
          {ctaText && ctaHref && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={ctaHref}
                className="group/btn inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg min-w-[200px]"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1"
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
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
