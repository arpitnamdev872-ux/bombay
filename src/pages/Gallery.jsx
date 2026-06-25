import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const Gallery = () => {
  const { galleryImages } = useContext(AdminContext);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071952] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#071952]/70 to-[#071952] z-0"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob z-0"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#F3E5AB]">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            Explore Our Store & Exclusive Collections
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {galleryImages && galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(7,25,82,0.3)] transition-all duration-500 group cursor-pointer h-72 md:h-80 bg-gray-200 border-2 border-transparent hover:border-[#D4A017] hover:-translate-y-2">
                  {/* Image */}
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071952]/90 via-[#071952]/40 to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <span className="text-[#D4A017] text-2xl font-bold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-xl font-medium">Coming Soon! Our gallery is being updated.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#071952] mb-4">Visit Our Beautiful Store</h2>
          <p className="text-lg text-gray-700 mb-8">
            Come experience Bombay Fashion in person and explore our amazing collection of premium clothing for kids, men, and women!
          </p>
          <a
            href="https://www.google.com/maps/search/Bombay+Fashion+Jasra+UP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4A017] text-[#071952] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
