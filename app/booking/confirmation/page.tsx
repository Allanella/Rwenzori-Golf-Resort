'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Check, Calendar, Users, Phone, Mail, MapPin, CreditCard, Shield } from 'lucide-react'
import Link from 'next/link'

export default function BookingConfirmationPage() {
  const [bookingDetails, setBookingDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading booking details from URL params or localStorage
    const timer = setTimeout(() => {
      setBookingDetails({
        id: 'RWZ' + Date.now(),
        room: 'Deluxe Room',
        checkIn: '2024-06-15',
        checkOut: '2024-06-18',
        guests: 2,
        totalPrice: 300,
        includesGolf: true,
        guestInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '+256 746 077 473'
        }
      })
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Processing your booking...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Booking Confirmed!"
          subtitle="Your luxury getaway at Mt. Rwenzori is all set"
          image="/images/_DSC9854.png"
        />

        {/* Confirmation Details */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Success Header */}
              <div className="bg-gradient-to-r from-accent to-primary p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-accent" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-white mb-2">
                  Booking Confirmed
                </h1>
                <p className="text-white/90">
                  Confirmation Number: <span className="font-mono font-bold">{bookingDetails.id}</span>
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Booking Details */}
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-accent" />
                      Booking Details
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-muted-foreground">Room Type</span>
                        <span className="font-medium text-foreground">{bookingDetails.room}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-muted-foreground">Check-in</span>
                        <span className="font-medium text-foreground">{bookingDetails.checkIn}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-muted-foreground">Check-out</span>
                        <span className="font-medium text-foreground">{bookingDetails.checkOut}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="font-medium text-foreground">{bookingDetails.guests} Guests</span>
                      </div>
                      {bookingDetails.includesGolf && (
                        <div className="flex justify-between py-3 border-b">
                          <span className="text-muted-foreground">Golf Rounds</span>
                          <span className="font-medium text-accent">Included</span>
                        </div>
                      )}
                      <div className="flex justify-between py-3">
                        <span className="text-lg font-bold text-foreground">Total Amount</span>
                        <span className="text-lg font-bold text-accent">${bookingDetails.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Guest Information */}
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Users className="w-6 h-6 text-accent" />
                      Guest Information
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {bookingDetails.guestInfo.firstName} {bookingDetails.guestInfo.lastName}
                          </p>
                          <p className="text-sm text-muted-foreground">Primary Guest</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{bookingDetails.guestInfo.email}</p>
                          <p className="text-sm text-muted-foreground">Email</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{bookingDetails.guestInfo.phone}</p>
                          <p className="text-sm text-muted-foreground">Phone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Information */}
                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                    Important Information
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Check-in time is 2:00 PM, Check-out time is 11:00 AM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Free cancellation up to 24 hours before check-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Confirmation email has been sent to your registered email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>For any changes, please contact us at +256 746 077 473</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/"
                    className="flex-1 flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Return to Homepage
                  </Link>
                  <a
                    href="tel:+256746077473"
                    className="flex-1 flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              What's Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Plan Your Journey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Find directions and plan your travel to Mt. Rwenzori Golf Resort & Spa.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Explore Activities
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover our golf course, spa services, and local attractions.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Travel Insurance
                </h3>
                <p className="text-muted-foreground text-sm">
                  Consider travel insurance for a worry-free vacation experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
