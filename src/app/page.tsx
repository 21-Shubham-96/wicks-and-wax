'use client';

import { useState } from 'react';

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

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-[#fffaf4]">
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

      {/* Selected Filter Debug (Placeholder for future filtered content) */}
      {selectedFilter && (
        <div className="text-pink-700 text-md mb-4">
          Showing candles for: <strong>{selectedFilter}</strong>
        </div>
      )}

      {/* Placeholder for products */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm text-center">
          <p className="text-pink-700">Your beautiful candles will appear here!</p>
        </div>
      </section>
    </main>
  );
}
