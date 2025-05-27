"use client";

import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const filterOptions = [
  'Gifting',
  'Weddings',
  'Birthdays',
  'Baby Showers',
  'Deserts',
  'Luxury',
  'Budget',
  "Mini's",
];

type Candle = {
  id: number;
  name: string;
  category: string;
};

const sampleCandles: Candle[] = [
  { id: 1, name: 'Rose Delight', category: 'Gifting' },
  { id: 2, name: 'Mint Sparkle', category: 'Birthdays' },
  { id: 3, name: 'Golden Hour', category: 'Luxury' },
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filteredCandles = selectedFilter
    ? sampleCandles.filter((candle) => candle.category === selectedFilter)
    : sampleCandles;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-[#fffaf4]">
      {/* Top Navigation Icons */}
      <div className="w-full flex justify-end gap-4 mb-4">
        <div className="relative cursor-pointer">
          <Heart className="text-pink-600 w-6 h-6" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
              {wishlist.length}
            </span>
          )}
        </div>
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-pink-600 w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* Banner Section */}
      <section className="w-full bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl shadow-md p-10 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
          Welcome to Wicks and Wax
        </h1>
        <p className="text-lg text-pink-800 max-w-2xl mx-auto">
          Handcrafted candles perfect for every occasion. Made with love, fragrance, and a spark of creativity.
        </p>
      </section>

      {/* Sub-Banner Filter Options */}
      <section className="w-full flex flex-wrap justify-center gap-3 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedFilter === option
                ? 'bg-pink-600 text-white border-pink-600'
                : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-100'
            }`}
          >
            {option}
          </button>
        ))}
      </section>

      {/* Candle Cards */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandles.map((candle) => (
          <div key={candle.id} className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">{candle.name}</h3>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => toggleCart(candle.id)}
                className={`px-3 py-1 text-sm rounded-full transition ${
                  cart.includes(candle.id)
                    ? 'bg-pink-600 text-white'
                    : 'border border-pink-300 text-pink-600 hover:bg-pink-100'
                }`}
              >
                {cart.includes(candle.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <button
                onClick={() => toggleWishlist(candle.id)}
                className={`text-sm transition ${
                  wishlist.includes(candle.id) ? 'text-pink-600' : 'text-gray-400'
                }`}
              >
                <Heart fill={wishlist.includes(candle.id) ? '#db2777' : 'none'} />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
