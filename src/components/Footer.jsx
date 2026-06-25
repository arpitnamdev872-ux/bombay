import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLink, FaThLarge, FaInfoCircle } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-b from-[#071952] to-[#0b2a4b] text-white pt-16 pb-8 mt-8 border-t-4 border-[#D4A017]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaInfoCircle className="text-2xl text-[#D4A017]" />
            <h4 className="text-xl font-bold text-[#D4A017]">About Us</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed pr-4">
            Bombay Fashion provides premium quality clothing at affordable prices for kids, men, and women.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaLink className="text-xl text-[#D4A017]" />
            <h4 className="text-xl font-bold text-[#D4A017]">Quick Links</h4>
          </div>
          <ul className="text-sm space-y-3">
            <li><Link to="/" className="hover:text-[#D4A017] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4A017] transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4A017] transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4A017] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        {/* Categories */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaThLarge className="text-xl text-[#D4A017]" />
            <h4 className="text-xl font-bold text-[#D4A017]">Categories</h4>
          </div>
          <ul className="text-sm space-y-3">
            <li><Link to="/kids-wear" className="hover:text-[#D4A017] transition-colors">Kids Wear</Link></li>
            <li><Link to="/mens-wear" className="hover:text-[#D4A017] transition-colors">Mens Wear</Link></li>
            <li><Link to="/ladies-wear" className="hover:text-[#D4A017] transition-colors">Ladies Wear</Link></li>
            <li><Link to="/shop" className="hover:text-[#D4A017] transition-colors">Shop</Link></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-xl text-[#D4A017]" />
            <h4 className="text-xl font-bold text-[#D4A017]">Contact Info</h4>
          </div>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#D4A017] mt-1 shrink-0" />
              <a href="https://maps.google.com/?q=Kotwaran+ka+pura,+chilla+mod,+churaha,+opp.+hanuman+mandir,+new,+Jasra,+Uttar+Pradesh+212107" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A017] transition-colors">Kotwaran ka pura, Chilla Mod, Opp. Hanuman Mandir, Jasra, Prayagraj, Uttar Pradesh 212107</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D4A017] shrink-0" />
              <a href="tel:+919082174499" className="hover:text-[#D4A017]">+91 90821 74499</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#D4A017] shrink-0" />
              <a href="mailto:info@bombayfashion.com" className="hover:text-[#D4A017]">info@bombayfashion.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com/bombay_fashion512" target="_blank" rel="noopener noreferrer" className="text-pink-400 transition-all duration-300 hover:text-pink-300 hover:drop-shadow-[0_0_5px_#ec4899] text-2xl active:scale-95">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 transition-all duration-300 hover:text-blue-300 hover:drop-shadow-[0_0_5px_#60a5fa] text-2xl active:scale-95">
            <FaFacebook />
          </a>
          <a href="https://wa.me/919082174499" target="_blank" rel="noopener noreferrer" className="text-green-400 transition-all duration-300 hover:text-green-300 hover:drop-shadow-[0_0_5px_#4ade80] text-2xl active:scale-95">
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Bombay Fashion. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
