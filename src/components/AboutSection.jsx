import React from "react";
import { FaAward, FaHeart, FaGlobeAmericas, FaArrowRight } from "react-icons/fa";

const AboutSection = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    {/* Background Glow Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#071952] mb-4 font-serif">About Bombay Fashion</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#C39428] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
        {/* Left Side: Text Content with Cross Highlight Colors */}
        <div className="relative pl-6 md:pl-8 border-l-4 border-[#D4A017]">
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#071952] to-[#D4A017] mb-6 font-serif tracking-wide">Our Story</h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            <strong className="text-[#071952] text-xl font-black">Bombay Fashion</strong> is a premium fashion destination that has been providing the highest quality clothing to our community for over <span className="text-[#D4A017] font-bold border-b-2 border-[#D4A017]">3 years</span>. We firmly believe that everyone deserves access to stylish and affordable fashion.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our mission is to offer you the finest clothing options that fit your budget and define your unique style. From <span className="text-[#071952] font-semibold">everyday wear</span> to <span className="text-[#D4A017] font-semibold">elegant bridal collections</span>, we have something special for everyone.
          </p>
          <a href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white rounded-full font-bold hover:from-[#D4A017] hover:to-[#C39428] hover:text-[#071952] hover:shadow-[0_10px_20px_rgba(212,160,23,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-xl group">
            Know More <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
        
        {/* Right Side: Cross-Pattern Feature Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#D4A017] to-[#C39428] p-8 rounded-2xl shadow-xl text-white text-center transform transition-transform hover:-translate-y-2">
            <FaAward className="text-5xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Premium Quality</h4>
            <p className="text-white/90 text-sm">Top-notch fabrics & designs</p>
          </div>
          <div className="bg-gradient-to-br from-[#071952] to-[#0b2a4b] p-8 rounded-2xl shadow-xl text-white text-center transform transition-transform hover:-translate-y-2 translate-y-6">
            <FaHeart className="text-5xl mx-auto mb-4 text-[#D4A017]" />
            <h4 className="font-bold text-xl mb-2">Best Price</h4>
            <p className="text-gray-300 text-sm">Affordable luxury fashion</p>
          </div>
          <div className="bg-gradient-to-br from-[#D4A017] to-[#C39428] p-8 rounded-2xl shadow-xl text-white text-center transform transition-transform hover:-translate-y-2 -translate-y-6">
            <FaGlobeAmericas className="text-5xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Wide Range</h4>
            <p className="text-white/90 text-sm">For all ages and styles</p>
          </div>
          <div className="bg-gradient-to-br from-[#071952] to-[#0b2a4b] p-8 rounded-2xl shadow-xl text-white text-center transform transition-transform hover:-translate-y-2">
            <FaHeart className="text-5xl mx-auto mb-4 text-[#D4A017]" />
            <h4 className="font-bold text-xl mb-2">Customer First</h4>
            <p className="text-gray-300 text-sm">Your satisfaction matters</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
