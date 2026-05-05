'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Calendar, Users, Bed, Target, Check, Star, CreditCard, Shield } from 'lucide-react';

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [includeGolf, setIncludeGolf] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      price: 100,
      description: 'Luxurious accommodation with premium amenities',
      features: ['King Size Bed', 'Mountain View', 'Mini Bar', 'Premium Amenities'],
      image: '/images/_DSC9760.jpg',
      maxGuests: 2,
    },
    {
      id: 'double-mountain',
      name: 'Double Room with Mountain View',
      price: 60,
      description: 'Comfortable room with stunning mountain vistas',
      features: ['Double Bed', 'Mountain View', 'Workspace', 'Modern Bathroom'],
      image: '/images/_DSC9758.jpg',
      maxGuests: 2,
    },
    {
      id: 'cottage',
      name: 'Cottage with Beautiful Mountain View',
      price: 150,
      description: 'Private cottage with breakfast included',
      features: ['Private Cottage', 'Mountain View', 'Breakfast Included', 'Living Area'],
      image: '/images/_DSC9747.png',
      maxGuests: 4,
    },
    {
      id: 'twin-golf',
      name: 'Twin Room with Mountain View',
      price: 95,
      description: 'Twin accommodation with breakfast and golf round',
      features: ['Twin Beds', 'Mountain View', 'Breakfast Included', '1 Round Golf'],
      image: '/images/_DSC9770.jpg',
      maxGuests: 2,
    },
  ];

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    const room = rooms.find((r) => r.id === selectedRoom);
    if (!room) return 0;

    const nights =
      checkIn && checkOut
        ? Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
          )
        : 0;

    let total = room.price * nights;
    if (includeGolf && !room.features.includes('1 Round Golf')) {
      total += 35 * nights; // Golf round cost
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking submitted! We will contact you shortly to confirm your reservation.');
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="Book Your Stay"
          subtitle="Reserve your luxury accommodation at Mt. Rwenzori Golf Resort & Spa"
          image="/images/_DSC9854.png"
        />

        {/* Room Selection */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Choose Your Room
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select from our premium accommodations designed for your comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                    selectedRoom === room.id ? 'border-accent' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedRoom(room.id)}
                >
                  <div className="relative h-64">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      ${room.price}/night
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                          {room.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{room.description}</p>
                      </div>
                      {selectedRoom === room.id && (
                        <div className="bg-accent text-accent-foreground rounded-full p-2">
                          <Check size={20} />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      {room.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <Check size={16} className="text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        Up to {room.maxGuests} guests
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Complete Your Booking
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill in your details to secure your reservation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    min={checkIn}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Golf Option */}
              <div className="bg-secondary rounded-lg p-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeGolf}
                    onChange={(e) => setIncludeGolf(e.target.checked)}
                    className="mr-3 w-5 h-5 text-accent border-border rounded focus:ring-accent"
                  />
                  <div className="flex items-center gap-3">
                    <Golf className="w-5 h-5 text-accent" />
                    <div>
                      <span className="font-medium text-foreground">Add Golf Round</span>
                      <p className="text-sm text-muted-foreground">
                        One round of golf per day (+$35/night)
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="+256 746 077 473"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Booking Summary
                </h3>

                <div className="space-y-3">
                  {selectedRoom && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-foreground/80">
                          {rooms.find((r) => r.id === selectedRoom)?.name}
                        </span>
                        <span className="font-medium">
                          ${rooms.find((r) => r.id === selectedRoom)?.price}/night
                        </span>
                      </div>

                      {checkIn && checkOut && (
                        <div className="flex justify-between">
                          <span className="text-foreground/80">
                            {Math.ceil(
                              (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
                                (1000 * 60 * 60 * 24)
                            )}{' '}
                            nights
                          </span>
                          <span className="font-medium">
                            $
                            {rooms.find((r) => r.id === selectedRoom)?.price! *
                              Math.ceil(
                                (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
                                  (1000 * 60 * 60 * 24)
                              )}
                          </span>
                        </div>
                      )}

                      {includeGolf &&
                        !rooms
                          .find((r) => r.id === selectedRoom)
                          ?.features.includes('1 Round Golf') && (
                          <div className="flex justify-between">
                            <span className="text-foreground/80">Golf Rounds</span>
                            <span className="font-medium">
                              $
                              {35 *
                                (checkIn && checkOut
                                  ? Math.ceil(
                                      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
                                        (1000 * 60 * 60 * 24)
                                    )
                                  : 0)}
                            </span>
                          </div>
                        )}
                    </>
                  )}

                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-accent">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment & Security */}
              <div className="flex items-center justify-between bg-secondary rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Secure payment • Free cancellation up to 24h before
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedRoom || !checkIn || !checkOut}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
