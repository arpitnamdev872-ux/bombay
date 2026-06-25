import { FaPhoneAlt } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F2E9] py-12 lg:py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[#071952] text-4xl md:text-5xl font-bold font-serif uppercase tracking-wide">
            Visit <span className="text-[#D4A017]">Our Shop</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#D4A017] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content Box */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/50 backdrop-blur-md rounded-[35px] p-6 md:p-12 shadow-2xl">
          
          {/* Left Side: Owner Photo & Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Note: Change the src URL below to your actual proprietor photo path (e.g. "../assets/owner.jpg") */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Shop Proprietor"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-[#D4A017] mb-8 transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-[#071952] mb-2 font-serif">Proprietor Name</h2>
            <p className="text-[#D4A017] font-bold text-lg md:text-xl mb-6 uppercase tracking-widest">
              Bombay Fashion
            </p>

            <p className="text-[#0b2a4b] font-medium text-lg leading-relaxed mb-8 max-w-lg">
              "नमस्ते! बॉम्बे फैशन में आपका स्वागत है। हमारा उद्देश्य आपको बेहतरीन क्वालिटी और ट्रेंडी कपड़े सबसे सही दामों पर उपलब्ध कराना है। किसी भी जानकारी के लिए आप हमें सीधे कॉल कर सकते हैं या हमारी दुकान पर विजिट कर सकते हैं।"
            </p>

            <a href="tel:+919082174499" className="inline-flex items-center justify-center gap-3 bg-[#071952] text-white px-8 py-4 rounded-full hover:bg-[#D4A017] hover:text-[#071952] transition-all duration-300 shadow-lg font-bold text-xl group">
              <FaPhoneAlt className="text-[#D4A017] group-hover:text-[#071952]" />
              +91 90821 74499
            </a>
          </div>

          {/* Right Side: Map Location */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-[28px] overflow-hidden shadow-xl border-[3px] border-[#C39428]/40">
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
  );
};

export default Shop;