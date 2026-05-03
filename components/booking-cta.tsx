import Link from 'next/link';
import { Calendar, Mail, Phone } from 'lucide-react';

export function BookingCTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Book Now */}
          <div className="flex flex-col items-center text-center gap-4">
            <Calendar size={32} />
            <h3 className="font-serif text-2xl font-bold">Book Your Stay</h3>
            <p className="text-sm opacity-90 mb-4">Reserve your perfect mountain retreat today</p>
            <Link
              href="/accommodation"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Check Availability
            </Link>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center text-center gap-4">
            <Phone size={32} />
            <h3 className="font-serif text-2xl font-bold">Call Us</h3>
            <p className="text-sm opacity-90 mb-4">Speak to our reservation team</p>
            <a
              href="tel:+256746077473"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              +256 746 077 473
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center gap-4">
            <Mail size={32} />
            <h3 className="font-serif text-2xl font-bold">Email Us</h3>
            <p className="text-sm opacity-90 mb-4">Send us your inquiries</p>
            <a
              href="mailto:info@mtrwenzori.com"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              info@mtrwenzori.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
