import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center text-primary font-bold text-lg">
                R
              </div>
              <span className="font-serif text-lg font-bold">Mt. Rwenzori</span>
            </div>
            <p className="text-sm opacity-90">
              A serene mountain retreat offering luxury accommodation, world-class golf, and rejuvenating spa services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-sm hover:opacity-80 transition-opacity">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/golf" className="text-sm hover:opacity-80 transition-opacity">
                  Golf
                </Link>
              </li>
              <li>
                <Link href="/spa" className="text-sm hover:opacity-80 transition-opacity">
                  Spa
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-sm hover:opacity-80 transition-opacity">
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">9-Hole Golf Course</li>
              <li className="text-sm">Premium Spa Services</li>
              <li className="text-sm">English Breakfast</li>
              <li className="text-sm">WiFi Connectivity</li>
              <li className="text-sm">Event Hosting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Mt. Rwenzori, Mountain Region</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+256 XXX XXX XXX</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@mtrwenzori.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span>Open Year-Round</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            &copy; {currentYear} Mt. Rwenzori Golf Resort & Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:opacity-80 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
