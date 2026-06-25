import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import propImage from "../assets/hero/prop.jpeg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaUserShield } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopModalOpen, setShopModalOpen] = useState(false);

  // Function for active nav links styling
  const navLinkStyle = ({ isActive }) =>
    `w-max pb-1 border-b-2 transition-all duration-300 ${
      isActive
        ? "text-[#D4A017] border-[#D4A017] font-bold"
        : "border-transparent hover:text-[#D4A017] hover:border-[#D4A017]"
    }`;

  return (
    <nav className="bg-[#071952] border-b-4 border-[#D4A017] sticky top-0 z-50 shadow-lg">
      
      {/* Top Info Bar */}
      <div className="border-b border-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 py-1 flex flex-col md:flex-row items-center justify-between text-white text-xs md:text-sm gap-2 md:gap-0">
          {/* Location & Contact */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <a href="https://maps.google.com/?q=Kotwaran+ka+pura,+chilla+mod,+churaha,+opp.+hanuman+mandir,+new,+Jasra,+Uttar+Pradesh+212107" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-yellow-200 hover:text-white transition-colors max-w-[130px] sm:max-w-[250px] lg:max-w-[450px]" title="Kotwaran ka pura, chilla mod, churaha, opp. hanuman mandir, Jasra, Uttar Pradesh 212107">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <span className="truncate">Kotwaran ka pura, Jasra, Prayagraj</span>
            </a>
            <a href="tel:+919082174499" className="flex items-center gap-1.5 text-yellow-200 hover:text-white transition-colors whitespace-nowrap">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              +91 90821 74499
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/bombay_fashion512" target="_blank" rel="noopener noreferrer" className="text-pink-400 transition-all duration-300 hover:text-pink-300 hover:drop-shadow-[0_0_5px_#ec4899] text-base md:text-lg">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 transition-all duration-300 hover:text-blue-300 hover:drop-shadow-[0_0_5px_#60a5fa] text-base md:text-lg">
              <FaFacebook />
            </a>
            <a href="https://wa.me/919082174499" target="_blank" rel="noopener noreferrer" className="text-green-400 transition-all duration-300 hover:text-green-300 hover:drop-shadow-[0_0_5px_#4ade80] text-base md:text-lg">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">

        {/* Logo (Left) - flex-1 keeps the menu perfectly centered */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="inline-flex items-center group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="Bombay Fashion Logo" className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto max-h-14 md:max-h-20 lg:max-h-24 object-contain object-left drop-shadow-md" />
            </div>
          </Link>
        </div>

        {/* Desktop Menu (Center) */}
        <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-10 text-white font-medium text-lg">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/kids-wear" className={navLinkStyle}>Kids Wear</NavLink>
          <NavLink to="/mens-wear" className={navLinkStyle}>Mens Wear</NavLink>
          <NavLink to="/ladies-wear" className={navLinkStyle}>Ladies Wear</NavLink>
          <NavLink to="/gallery" className={navLinkStyle}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>

        {/* Right Side: Visit Shop Button + Admin + Mobile Menu Toggle */}
        <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
          <button onClick={() => setShopModalOpen(true)} className="hidden md:flex bg-[#D4A017] text-[#071952] px-4 lg:px-6 py-2 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg text-sm lg:text-base">
            Visit Shop
          </button>
          <Link to="/admin/login" title="Admin Panel" className="flex bg-[#071952] hover:bg-[#D4A017] text-[#D4A017] hover:text-[#071952] border border-[#D4A017] w-10 h-10 lg:w-11 lg:h-11 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg items-center justify-center">
            <FaUserShield className="text-lg" />
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#071952] text-white flex flex-col gap-4 px-6 text-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[550px] py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkStyle}>About</NavLink>
        <NavLink to="/kids-wear" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Kids Wear</NavLink>
        <NavLink to="/mens-wear" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Mens Wear</NavLink>
        <NavLink to="/ladies-wear" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Ladies Wear</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Gallery</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkStyle}>Contact</NavLink>
        <NavLink to="/admin/login" onClick={() => setMenuOpen(false)} className={`${navLinkStyle} mt-2`}>
          <FaUserShield className="inline mr-2" /> Admin Panel
        </NavLink>
        <button onClick={() => { setMenuOpen(false); setShopModalOpen(true); }} className="bg-[#D4A017] text-[#071952] text-center px-6 py-2 mt-2 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-md">
          Visit Shop
        </button>
      </div>

      {/* Shop Modal / Popup */}
      {shopModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-[#F7F2E9] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh] animate-fadeIn">
            {/* Close Button */}
            <button 
              onClick={() => setShopModalOpen(false)}
              className="absolute top-4 right-4 text-[#071952] hover:text-red-600 transition-colors text-3xl z-10"
            >
              <HiX />
            </button>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-center mb-8">
                <h2 className="text-[#071952] text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide">
                  Visit <span className="text-[#D4A017]">Our Shop</span>
                </h2>
                <div className="w-16 h-1 bg-[#D4A017] mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side: Owner Photo & Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[5px] border-[#D4A017] shadow-[0_0_25px_rgba(7,25,82,0.3)] mb-6 overflow-hidden bg-blue-50 backdrop-blur-md flex items-center justify-center">
                    <img
                      src={propImage}
                      alt="Mr. Pawan Shrivastava"
                      className="w-full h-full object-cover object-top scale-[1.15]"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#071952] mb-4 font-serif">Mr. Pawan Shrivastava</h3>
                  <p className="text-[#0b2a4b] font-medium text-base leading-relaxed mb-6">
                    "👑✨ Bombay Fashion में आपका स्वागत है ✨👑
जहाँ हर outfit सिर्फ कपड़ा नहीं—
एक Luxury Fashion Experience होता है।

💫 Finest Quality | 👗 Premium Designs | 🌟 Royal Comfort
हर look को मिलता है एक Golden Touch of Elegance. किसी भी जानकारी के लिए आप हमें सीधे कॉल कर सकते हैं या हमारी दुकान पर विजिट कर सकते हैं।"
                  </p>
                  <a href="tel:+919082174499" className="inline-flex items-center justify-center gap-2 bg-[#071952] text-white px-6 py-3 rounded-full hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300 shadow-md font-bold text-lg">
                    <FaPhoneAlt />
                    +91 90821 74499
                  </a>
                </div>

                {/* Right Side: Map Location */}
                <div className="w-full h-[300px] lg:h-full min-h-[300px] rounded-xl overflow-hidden shadow-md border-2 border-[#C39428]/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115372.51065123985!2d81.6841777015509!3d25.3160456121473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398555e51381c811%3A0x6b87daec4c97940e!2sJasra%2C%20Uttar%20Pradesh%20212107!5e0!3m2!1sen!2sin!4v1716900000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bombay Fashion Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;