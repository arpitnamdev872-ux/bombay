import { Link } from "react-router-dom";
import heroBanner from "../assets/hero/hero_banner.png";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F7F2E9] via-white to-[#F3E5AB] overflow-hidden pb-20 lg:pb-32 pt-10 lg:pt-16">
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#071952] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* MAIN BOX - split layout with equal height columns */}
        <div className="grid lg:grid-cols-2 items-stretch gap-10 lg:gap-0 rounded-[2.5rem] bg-white/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 p-2 lg:p-0 overflow-hidden">

          {/* LEFT CONTENT - vertically centered (comes second on mobile) */}
          <div className="order-2 lg:order-1 px-6 sm:px-10 lg:pl-16 lg:pr-10 py-12 lg:py-20 flex flex-col justify-center text-center lg:text-left">

            {/* HEADING */}
            <h1 className="text-[#071952] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] uppercase font-serif animate-fade-in-up">
              Achhe Aur
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#C39428] drop-shadow-sm">Saste</span> Kapdo Ki
              <br />
              <span className="text-[#071952] relative inline-block mt-2">
                Dukaan
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#D4A017]/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </h1>

            {/* GOLD LINE */}
            <div className="w-24 lg:w-36 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#C39428] rounded-full mt-8 mb-6 mx-auto lg:mx-0 animate-fade-in-up delay-100 shadow-sm"></div>

            {/* DESCRIPTION */}
            <div className="animate-fade-in-up delay-200 bg-white/60 backdrop-blur-sm border-l-4 border-[#D4A017] p-5 rounded-r-2xl shadow-sm mb-8 inline-block text-left">
              <p className="text-[#0b2a4b] font-medium text-base sm:text-lg leading-relaxed max-w-[550px]">
                <span className="font-bold text-[#D4A017] text-xl tracking-wide">नोट -</span> हमारे यहाँ सभी प्रकार के फैशनेबल कपड़े, ब्राइडल-लहंगा, साड़ी-जैकेट, ब्लाउज़, सलवार सूट, जीन्स, टॉप, कुर्ती-सूट, गाउन आदि उचित मूल्य पर उपलब्ध हैं।
              </p>
            </div>

            {/* BUTTONS */}
            <div className="animate-fade-in-up delay-300">
              <Link to="/gallery" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white px-10 py-4 rounded-full font-bold text-lg hover:from-[#D4A017] hover:to-[#C39428] hover:text-[#071952] transition-all duration-500 shadow-[0_10px_20px_rgba(7,25,82,0.2)] hover:shadow-[0_10px_25px_rgba(212,160,23,0.4)] hover:-translate-y-1 group">
                <FaShoppingBag className="text-xl group-hover:scale-110 transition-transform" />
                SHOP NOW 
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 ml-1" />
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE - comes first on mobile */}
          <div className="order-1 lg:order-2 w-full h-[350px] sm:h-[450px] lg:h-auto animate-fade-in-up delay-100">
            <img
              src={heroBanner}
              alt="Bombay Fashion Entrance"
              className="w-full h-full object-cover rounded-2xl lg:rounded-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;