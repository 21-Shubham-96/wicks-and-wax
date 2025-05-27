"use client";

import { useState } from 'react';
import { Heart, ShoppingCart, Trash, Plus, Minus, X } from 'lucide-react';

const filterOptions = [
  'All',
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
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [viewCart, setViewCart] = useState(false);
  const [viewWishlist, setViewWishlist] = useState(false);

  const toggleCart = (id: number) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      return item ? prev : [...prev, { id, qty: 1 }];
    });
  };

  const incrementQty = (id: number) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === id);
      return exists
        ? prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
        : [...prev, { id, qty: 1 }];
    });
  };

  const decrementQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filteredCandles = selectedFilter && selectedFilter !== 'All'
    ? sampleCandles.filter((candle) => candle.category === selectedFilter)
    : sampleCandles;

  const getCandleById = (id: number) => sampleCandles.find((c) => c.id === id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-[#fffaf4]">
      {/* Top Navigation Icons */}
      <div className="w-full flex justify-end gap-4 mb-4">
        <div className="relative cursor-pointer" onClick={() => setViewWishlist(true)}>
          <Heart className="text-pink-600 w-6 h-6" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
              {wishlist.length}
            </span>
          )}
        </div>
        <div className="relative cursor-pointer" onClick={() => setViewCart(true)}>
          <ShoppingCart className="text-pink-600 w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </div>
      </div>

      {/* Wishlist Modal */}
      {viewWishlist && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md bg-white border border-pink-300 rounded-xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-pink-700">Your Wishlist</h2>
            <button onClick={() => setViewWishlist(false)} className="text-pink-600"><X /></button>
          </div>
          {wishlist.length === 0 ? (
            <p className="text-sm text-gray-500">No items in wishlist.</p>
          ) : (
            wishlist.map((id) => (
              <div key={id} className="flex justify-between items-center py-2 border-b">
                <span className="text-black">{getCandleById(id)?.name}</span>
                <button onClick={() => toggleWishlist(id)} className="text-pink-600">Remove</button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Cart Modal */}
      {viewCart && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md bg-white border border-pink-300 rounded-xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-pink-700">Your Cart</h2>
            <button onClick={() => setViewCart(false)} className="text-pink-600"><X /></button>
          </div>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">No items in cart.</p>
          ) : (
            cart.map(({ id, qty }) => (
              <div key={id} className="flex justify-between items-center py-2 border-b">
                <span className="text-black">{getCandleById(id)?.name}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => decrementQty(id)} className="p-1 text-pink-600">
                    <Minus size={16} />
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => incrementQty(id)} className="p-1 text-pink-600">
                    <Plus size={16} />
                  </button>
                  <button onClick={() => setCart((prev) => prev.filter((item) => item.id !== id))} className="text-red-500">
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <div className="mt-4 text-center">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-full">Place Order</button>
            </div>
          )}
        </div>
      )}

      {/* Banner Section */}
      <section className="w-full bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl shadow-md p-10 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
          Wicks and Wax
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
        {filteredCandles.map((candle) => {
          const itemInCart = cart.find((item) => item.id === candle.id);
          return (
            <div key={candle.id} className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">{candle.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => decrementQty(candle.id)} className="p-1 text-pink-600">
                    <Minus size={16} />
                  </button>
                  <span>{itemInCart?.qty || 0}</span>
                  <button onClick={() => incrementQty(candle.id)} className="p-1 text-pink-600">
                    <Plus size={16} />
                  </button>
                </div>
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
          );
        })}
      </section>
    </main>
  );
}
