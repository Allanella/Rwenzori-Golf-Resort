import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Mt. Rwenzori Golf Resort & Spa',
  description:
    'Get in touch with Mt. Rwenzori. Find our contact information, location, and directions.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Contact Us"
          subtitle="We'd love to hear from you. Get in touch with any questions or inquiries."
          image="/images/_DSC9736.png"
        />

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Address */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Address</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Mt. Rwenzori Region
                  <br />
                  Mountain Valley
                  <br />
                  Uganda
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Phone</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">
                  <a href="tel:+256746077473" className="hover:text-accent transition-colors">
                    +256 746 077 473
                  </a>
                  <span className="text-muted-foreground text-xs ml-2">or call us</span>
                </p>
                <p className="text-muted-foreground text-xs">Available 24/7</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Email</h3>
                </div>
                <p className="text-foreground/80 text-sm mb-2">
                  <a
                    href="mailto:info@mtrwenzori.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    info@mtrwenzori.com
                  </a>
                </p>
                <p className="text-muted-foreground text-xs">Response within 24 hours</p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Hours</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Open Year-Round
                  <br />
                  Reception: 24/7
                  <br />
                  Check-in: 2:00 PM
                  <br />
                  Check-out: 11:00 AM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    >
                      <option value="booking">Booking Inquiry</option>
                      <option value="event">Event Inquiry</option>
                      <option value="golf">Golf Lessons</option>
                      <option value="spa">Spa Services</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Find Us</h2>
                <div className="bg-secondary rounded-lg overflow-hidden shadow-lg h-96 relative">
                  <img
                    src="/images/_DSC9736.png"
                    alt="Mt. Rwenzori Golf Resort & Spa Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
                    <Navigation size={48} className="text-white mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Mt. Rwenzori</h3>
                    <p className="text-white/90 mb-6">
                      Nestled in the majestic mountains of Uganda
                    </p>
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                      Get Directions
                    </button>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm mt-4 leading-relaxed">
                  <strong>Google Maps:</strong> Search &quot;Mt. Rwenzori Golf Resort & Spa&quot;
                  for turn-by-turn directions from the nearest major city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting There */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
              Getting There
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* By Air */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-accent mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 1h3l12 12-12 12h-3l12-12L3.5 1m13 0h3l-12 12 12 12h-3L4.5 13l12-12z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">By Air</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Fly into the nearest international airport, approximately 2-3 hours from Mt.
                  Rwenzori. We offer airport pickup and transfer services upon request.
                </p>
              </div>

              {/* By Road */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-accent mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-2c1.66 0 3 1.34 3 3v2h-6V6c0-1.66 1.34-3 3-3zm6 12H6V10h12v8zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">By Road</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Drive to Mt. Rwenzori via our well-marked routes. GPS coordinates and detailed
                  driving directions are available upon booking confirmation.
                </p>
              </div>

              {/* Private Transfer */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-accent mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10h10v9H7zm11-9h1c.55 0 1 .45 1 1v2h2c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-1v1h-2v-1H8v1H6v-1H4c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h2V2c0-.55.45-1 1-1h1V1h2v1h6V1zm0 3H7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  Private Transfer
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Arrange a private car transfer service from the airport or city. Luxury vehicles
                  available for a comfortable journey to the resort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'What is the best time to visit Mt. Rwenzori?',
                  answer:
                    'Mt. Rwenzori is beautiful year-round. The dry seasons (June-July and December-February) offer the clearest weather and best golf conditions.',
                },
                {
                  question: 'Do I need to book in advance?',
                  answer:
                    'We recommend booking 2-4 weeks in advance, especially during peak seasons. Last-minute bookings are subject to availability.',
                },
                {
                  question: 'What amenities are included with accommodation?',
                  answer:
                    'All rooms include breakfast, WiFi, access to all facilities (golf, spa, terrace), and 24/7 concierge service.',
                },
                {
                  question: 'Can I bring my family with children?',
                  answer:
                    'Absolutely! Mt. Rwenzori is family-friendly with activities suitable for all ages. Contact us for family packages and recommendations.',
                },
                {
                  question: 'Are pets allowed?',
                  answer:
                    'Yes, well-behaved pets are welcome. Please notify us in advance and a small pet fee applies.',
                },
                {
                  question: 'What is your cancellation policy?',
                  answer:
                    'Cancellations made 14 days before arrival are fully refundable. For cancellations within 14 days, a 50% fee applies.',
                },
              ].map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
