import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#071952] text-white py-10 mt-8 border-t-4 border-[#D4A017]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* About */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#D4A017]">About Us</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Bombay Fashion provides premium quality clothing at affordable prices for kids, men, and women.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#D4A017]">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:text-[#D4A017] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4A017] transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4A017] transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4A017] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#D4A017]">Categories</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/kids-wear" className="hover:text-[#D4A017] transition-colors">Kids Wear</Link></li>
            <li><Link to="/mens-wear" className="hover:text-[#D4A017] transition-colors">Mens Wear</Link></li>
            <li><Link to="/ladies-wear" className="hover:text-[#D4A017] transition-colors">Ladies Wear</Link></li>
            <li><Link to="/gallery" className="hover:text-[#D4A017] transition-colors">Shop</Link></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#D4A017]">Contact Info</h4>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#D4A017]" />
              <span>Jasra, UP 212107</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D4A017]" />
              <a href="tel:+919082174499" className="hover:text-[#D4A017]">+91 90821 74499</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#D4A017]" />
              <span>info@bombayfashion.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com/bombay_fashion512" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#D4A017] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#D4A017] transition-colors">
            <FaFacebook />
          </a>
          <a href="https://wa.me/919082174499" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#D4A017] transition-colors">
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Bombay Fashion. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

