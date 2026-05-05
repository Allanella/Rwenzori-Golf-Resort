'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Calendar, Users, Target, Check, Star, CreditCard, Shield } from 'lucide-react';

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
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        : 0;

    let total = room.price * nights;
    if (includeGolf && !room.features.includes('1 Round Golf')) {
      total += 35 * nights;
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

        {/* Booking Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
                <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
                  {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                </select>
              </div>

              {/* Golf Option */}
              <div className="bg-secondary p-6 rounded-lg">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeGolf}
                    onChange={(e) => setIncludeGolf(e.target.checked)}
                  />
                  <Target className="w-5 h-5 text-accent" />
                  <span>Add Golf Round (+$35/night)</span>
                </label>
              </div>

              {/* Total */}
              <div className="text-xl font-bold">
                Total: ${calculateTotal()}
              </div>

              <button type="submit" className="w-full bg-accent py-3 rounded-lg">
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