'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Calendar, Facebook, Instagram, Twitter, Phone, Music } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://tiktok.com/@mtrwenzori', icon: Music, label: 'TikTok' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
            R
          </div>
          <span className="hidden sm:block font-serif text-xl font-bold text-foreground">
            Mt. Rwenzori
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Booking Button */}
          <Link
            href="/booking"
            className="ml-4 flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-semibold transition-colors"
          >
            <Calendar size={16} />
            Book Now
          </Link>

          {/* Social Links */}
          <div className="ml-4 flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
            <a
              href="tel:+256746077473"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Booking Button */}
              <Link
                href="/booking"
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-semibold transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={16} />
                Book Now
              </Link>

              {/* Mobile Social Links */}
              <div className="flex items-center gap-2 pt-2 border-t mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
                <a
                  href="tel:+256746077473"
                  className="p-2 text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
