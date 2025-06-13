export default function SharedCartPage({ searchParams }: { searchParams: Record<string, string | string[]> }) {
  const ids = Array.isArray(searchParams.id) ? searchParams.id : [searchParams.id];
  const sizes = Array.isArray(searchParams.size) ? searchParams.size : [searchParams.size];
  const qtys = Array.isArray(searchParams.qty) ? searchParams.qty : [searchParams.qty];

  const cartItems = ids.map((id, index) => ({
    id,
    size: sizes[index] || "N/A",
    qty: qtys[index] || "1",
  }));

  return (
    <main className="p-6 bg-[#fffaf4] min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-pink-800">Shared Cart</h1>
      {cartItems.map((item, idx) => (
        <div key={idx} className="border p-4 rounded mb-2 bg-white">
          <p className="text-pink-700">
            <strong>ID:</strong> {item.id}
          </p>
          <p>
            <strong>Size:</strong> {item.size}
          </p>
          <p>
            <strong>Quantity:</strong> {item.qty}
          </p>
        </div>
      ))}
    </main>
  );
}
