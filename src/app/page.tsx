"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Candle = {
  id: number;
  name: string;
  image: string;
  price: string;
};

const sampleCandles: Candle[] = [
  {
    id: 1,
    name: "Rose Delight",
    image: "https://p1wjjkwlwt1uoajb.public.blob.vercel-storage.com/rose_delight.jpeg",
    price: "150",
  },
  {
    id: 2,
    name: "Mint Sparkle",
    image: "https://p1wjjkwlwt1uoajb.public.blob.vercel-storage.com/mint_sparkle.jpeg",
    price: "120",
  },
  {
    id: 3,
    name: "Golden Glow",
    image: "https://p1wjjkwlwt1uoajb.public.blob.vercel-storage.com/golden_glow.jpeg",
    price: "150/200",
  },
];

export default function SharedCart() {
  const params = useSearchParams();
  const [items, setItems] = useState<
    { id: number; size: string; qty: number }[]
  >([]);

  useEffect(() => {
    const ids = params.getAll("id");
    const sizes = params.getAll("size");
    const qtys = params.getAll("qty");

    const cartItems = ids.map((idStr, index) => ({
      id: parseInt(idStr),
      size: sizes[index] || "",
      qty: parseInt(qtys[index] || "1"),
    }));

    setItems(cartItems);
  }, [params]);

  return (
    <main className="min-h-screen bg-[#fffaf4] p-6">
      <h1 className="text-3xl font-bold text-pink-800 mb-6">Shared Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">No items found in this shared cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const candle = sampleCandles.find((c) => c.id === item.id);
            if (!candle) return null;
            return (
              <div
                key={index}
                className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-pink-700 mb-2">
                  {candle.name}
                </h3>
                <img
                  src={candle.image}
                  alt={candle.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-pink-600 mb-1">Size: {item.size}</p>
                <p className="text-sm text-pink-600">Qty: {item.qty}</p>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
