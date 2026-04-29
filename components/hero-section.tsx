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
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {video && !videoError ? (
        <>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={handleVideoError}
            onCanPlay={() => setVideoLoaded(true)}
          />
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-900">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-lg">Loading video...</p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Image
          src={image || '/images/hero-background.jpg'}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 max-w-3xl">
          {title}
        </h1>
        {subtitle && <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">{subtitle}</p>}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
