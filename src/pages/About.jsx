import React from "react";
import MapLocation from "../components/MapLocation";
import Testimonials from "../components/Testimonials";
import { FaGem, FaTshirt, FaSmile, FaUsers, FaAward, FaThumbsUp } from "react-icons/fa";
import propImage from "../assets/hero/prop.jpeg";

const About = () => (
  <main className="min-h-screen bg-gray-50 overflow-hidden">
    {/* Header */}
    <section className="relative bg-[#071952] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#071952]/70 to-[#071952] z-0"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000 z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#F3E5AB]">
          About Bombay Fashion
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
          Premium Fashion • Unmatched Quality • Affordable Prices
        </p>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#D4A017] font-bold text-xl tracking-widest uppercase mb-2">Our History</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#071952] font-serif mb-6">The Story of Bombay Fashion</h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#C39428] mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bombay Fashion has been a cornerstone of the fashion community for over 3 years. We started with a simple yet powerful mission: to make premium, high-quality fashion accessible and affordable for everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are shopping for kids, men, or women, our store offers an extensive collection of trendy and traditional clothing. From elegant bridal lehengas, sarees, and kurtis to casual jeans, tops, and suits, we bring everything under one roof.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              We believe that premium quality doesn't have to break the bank. At Bombay Fashion, you always get the best value for your style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <FaUsers className="text-5xl text-[#D4A017] mb-4" />
              <h4 className="text-2xl font-bold text-[#071952] mb-2">3+ Years</h4>
              <p className="text-gray-600">Serving the fashion community with trust.</p>
            </div>
            <div className="bg-[#071952] p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <FaAward className="text-5xl text-[#D4A017] mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">Quality</h4>
              <p className="text-gray-300">Premium fabrics and unmatched designs.</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4A017] to-[#C39428] p-8 rounded-2xl shadow-lg sm:col-span-2 hover:-translate-y-2 transition-transform duration-300 text-center">
              <FaThumbsUp className="text-5xl text-white mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-[#071952] mb-2">Customer First</h4>
              <p className="text-[#071952]/90 font-medium text-lg">Your satisfaction is our ultimate priority. We are here to make you look your best.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24 bg-[#071952] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4A017 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-serif mb-4">Why Choose Us</h2>
          <p className="text-[#D4A017] text-lg tracking-widest uppercase">Experience the Best in Fashion</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4A017] to-[#C39428] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FaGem className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
            <p className="text-gray-300 leading-relaxed">
              We never compromise on quality. Every piece of clothing in our store is carefully selected to ensure top-notch fabrics, durability, and a luxurious feel.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4A017] to-[#C39428] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FaTshirt className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Wide Selection</h3>
            <p className="text-gray-300 leading-relaxed">
              From kids to adults, casuals to bridal wear, we offer an extensive range of fashion choices. Sarees, kurtis, suits, jeans, tops—all under one roof.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4A017] to-[#C39428] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FaSmile className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Expert Staff</h3>
            <p className="text-gray-300 leading-relaxed">
              Our friendly and expert staff are always ready to help you find the perfect outfit for any occasion, ensuring a seamless shopping experience.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Proprietor Section */}
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A017] to-[#F3E5AB] rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden group">
              <img 
                src={propImage} 
                alt="Mr. Pawan Shrivastava" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071952]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#D4A017] font-bold text-xl tracking-widest uppercase mb-2">Meet The Founder</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#071952] font-serif mb-6">Mr. Pawan Shrivastava</h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#C39428] mx-auto lg:mx-0 mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "Welcome to Bombay Fashion! My vision has always been to provide a luxury fashion experience to our community without the premium price tag. For over 3 years, we have dedicated ourselves to sourcing the finest fabrics and the most elegant designs."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are looking for casual daily wear, professional attire, or a stunning bridal lehenga, our store is crafted to be your ultimate fashion destination. Your satisfaction and style are our greatest rewards.
            </p>
            <div className="inline-block px-8 py-4 bg-[#071952] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#D4A017] hover:text-[#071952] hover:-translate-y-1 transition-all duration-300 cursor-default">
              3+ Years of Excellence
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />
    
    {/* Map Location */}
    <MapLocation />
  </main>
);

export default About;
