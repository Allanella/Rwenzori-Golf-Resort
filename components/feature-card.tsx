'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, image, icon }: FeatureCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
      {/* Image container with overlay */}
      <div className="relative h-72 w-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
        />

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}

        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Icon overlay on hover */}
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <div className="text-accent">{icon}</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 bg-white relative z-10">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
              {icon}
            </div>
          )}
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Hover indicator */}
        <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Explore</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Subtle border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-colors duration-300 pointer-events-none" />
    </div>
  );
}
