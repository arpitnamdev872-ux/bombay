import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SaleBanner = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-5 relative z-20 -mt-10 sm:-mt-16 lg:-mt-20 mb-12 lg:mb-16">
    <div className="bg-gradient-to-r from-[#071952] via-[#0b2a4b] to-[#071952] rounded-3xl shadow-[0_20px_50px_rgba(7,25,82,0.3)] border border-[#D4A017]/30 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-64 h-64 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Left: Icon & Title */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10 text-center sm:text-left w-full lg:w-auto">
        <span className="text-5xl lg:text-6xl animate-bounce drop-shadow-lg">🎉</span>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4A017] uppercase tracking-widest font-serif drop-shadow-md">
            Festival Sale
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-1 tracking-wider font-medium uppercase">
            Limited Time Offer
          </p>
        </div>
      </div>
      
      {/* Middle: Discount Info */}
      <div className="text-center z-10 flex-1 w-full lg:w-auto">
        <p className="text-white text-lg md:text-xl lg:text-2xl font-medium flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-3">
          <span className="opacity-90">Get Up to</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#F3E5AB] font-black text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(212,160,23,0.4)] tracking-tight py-1">
            50% OFF
          </span>
          <span className="opacity-90">on Selected Items!</span>
        </p>
      </div>
      
      {/* Right: CTA Button */}
      <div className="z-10 w-full sm:w-auto flex justify-center lg:justify-end shrink-0">
        <Link 
          to="/gallery" 
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] px-8 py-4 rounded-full font-extrabold text-lg lg:text-xl hover:from-white hover:to-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(212,160,23,0.5)] hover:shadow-[0_0_30px_rgba(212,160,23,0.7)] transform hover:-translate-y-1 group w-full sm:w-auto"
        >
          Shop Now 
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

    </div>
  </div>
);

export default SaleBanner;
