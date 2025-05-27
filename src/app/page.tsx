import React, { useState } from "react";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    "Gifting",
    "Weddings",
    "Birthdays",
    "Baby Showers",
    "Deserts",
    "Luxury",
    "Budget",
    "Mini's",
  ];

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    console.log("Selected filter:", filter);
    // You can add filtering logic here later
  };

  return (
    <main
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#f9f5f1",
        minHeight: "100vh",
      }}
    >
      {/* Main Banner */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #f3c677 0%, #f28c38 50%, #b54f3f 100%)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "700",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        Wicks_a..n.d_Wax — Handcrafted Scented Candles
      </section>

      {/* Sub Banner with Filters */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "15px 10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            style={{
              padding: "10px 18px",
              borderRadius: "25px",
              border: "2px solid #f28c38",
              backgroundColor:
                selectedFilter === filter ? "#f28c38" : "transparent",
              color: selectedFilter === filter ? "white" : "#f28c38",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "1rem",
            }}
          >
            {filter}
          </button>
        ))}
      </section>
    </main>
  );
}
