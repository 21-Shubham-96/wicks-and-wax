// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-800">
      <section className="w-full bg-gradient-to-r from-pink-200 via-rose-100 to-yellow-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 text-rose-600 drop-shadow-md">
            Welcome to Wicks and Wax
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Hand-poured candles to brighten your space and soul
          </p>
          <button className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}
