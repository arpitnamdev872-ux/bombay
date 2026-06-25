import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AdminContext } from "../context/AdminContext";

const MensWear = () => {
  const { mensProducts } = useContext(AdminContext);
  const [filter, setFilter] = useState("All");

  const filteredProducts = mensProducts.filter((product) => {
    if (filter === "All" || filter === "New Arrival") return true;
    return product.category === filter;
  });

  const displayProducts = filter === "New Arrival" ? [...filteredProducts].reverse() : filteredProducts;

  const getBtnClass = (btnFilter) => filter === btnFilter 
    ? "bg-[#D4A017] border-2 border-[#D4A017] text-[#071952] px-6 py-2 rounded-full font-bold hover:bg-white hover:border-white transition-colors" 
    : "border-2 border-[#D4A017] text-[#D4A017] px-6 py-2 rounded-full font-bold hover:bg-[#D4A017] hover:text-[#071952] transition-colors";

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071952] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#071952]/70 to-[#071952] z-0"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob z-0"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#F3E5AB]">
            Mens Wear
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            Premium Quality Clothing for the Modern Man
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 py-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => setFilter("All")} className={getBtnClass("All")}>All</button>
            <button onClick={() => setFilter("Shirts")} className={getBtnClass("Shirts")}>Shirts</button>
            <button onClick={() => setFilter("Kurtas")} className={getBtnClass("Kurtas")}>Kurtas</button>
            <button onClick={() => setFilter("Jackets")} className={getBtnClass("Jackets")}>Jackets</button>
            <button onClick={() => setFilter("T-Shirts")} className={getBtnClass("T-Shirts")}>T-Shirts</button>
            <button onClick={() => setFilter("New Arrival")} className={getBtnClass("New Arrival")}>New Arrival</button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {displayProducts && displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} price={`₹${product.price}`} category={product.category} image={product.image} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-xl font-medium">New collection coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">Elevate Your Style</h2>
          <p className="text-lg mb-6">Check out our latest collection and find your perfect fit</p>
          <a
            href="tel:+919082174499"
            className="inline-block bg-[#071952] text-[#D4A017] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default MensWear;
