import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaUser, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const adminEmail = "info@bombayfashion.com";
    const subject = encodeURIComponent(`Website Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Bombay Fashion Team,\n\nYou have received a new enquiry from your website.\n\n--- Customer Details ---\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not Provided"}\n\n--- Message ---\n${formData.message}\n\nBest Regards,\n${formData.name}`
    );

    // Open Default Mail Client with Pre-filled Data
    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
    
    alert("Preparing your email client... Thank you for reaching out!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative bg-[#071952] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#071952]/70 to-[#071952] z-0"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob z-0"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000 z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#F3E5AB]">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            We'd love to hear from you! Reach out for inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#ff6b6b] to-[#c0392b] p-8 rounded-3xl shadow-[0_10px_30px_rgba(192,57,43,0.3)] hover:shadow-[0_20px_40px_rgba(192,57,43,0.4)] hover:-translate-y-2 transition-all duration-300 text-center group border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                <FaMapMarkerAlt className="text-3xl text-white drop-shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Address</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed">Kotwaran ka pura, Jasra, UP 212107</p>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] p-8 rounded-3xl shadow-[0_10px_30px_rgba(39,174,96,0.3)] hover:shadow-[0_20px_40px_rgba(39,174,96,0.4)] hover:-translate-y-2 transition-all duration-300 text-center group border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner">
                <FaPhoneAlt className="text-3xl text-white drop-shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Phone</h3>
              <a href="tel:+919082174499" className="text-white/90 font-medium text-sm hover:text-white transition-colors">
                +91 90821 74499
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-[#3498db] to-[#2980b9] p-8 rounded-3xl shadow-[0_10px_30px_rgba(41,128,185,0.3)] hover:shadow-[0_20px_40px_rgba(41,128,185,0.4)] hover:-translate-y-2 transition-all duration-300 text-center group border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                <FaEnvelope className="text-3xl text-white drop-shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Email</h3>
              <p className="text-white/90 text-sm font-medium">info@bombayfashion.com</p>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-[#f1c40f] to-[#f39c12] p-8 rounded-3xl shadow-[0_10px_30px_rgba(243,156,18,0.3)] hover:shadow-[0_20px_40px_rgba(243,156,18,0.4)] hover:-translate-y-2 transition-all duration-300 text-center group border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner">
                <FaClock className="text-3xl text-white drop-shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Hours</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed">Mon-Sun<br/>10 AM - 5 PM</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-50">
              <h2 className="text-3xl font-extrabold text-[#071952] mb-8 font-serif">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2 ml-1">Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 group-focus-within:bg-blue-500 group-focus-within:text-white transition-all duration-300 group-focus-within:scale-110 group-focus-within:shadow-md">
                        <FaUser className="text-sm" />
                      </div>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2 ml-1">Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 group-focus-within:bg-rose-500 group-focus-within:text-white transition-all duration-300 group-focus-within:scale-110 group-focus-within:shadow-md">
                        <FaEnvelope className="text-sm" />
                      </div>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2 ml-1">Phone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 group-focus-within:bg-emerald-500 group-focus-within:text-white transition-all duration-300 group-focus-within:scale-110 group-focus-within:shadow-md">
                        <FaPhoneAlt className="text-sm" />
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-14 pr-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2 ml-1">Message</label>
                  <div className="relative group">
                    <div className="absolute top-2.5 left-0 pl-2.5 pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-500 group-focus-within:bg-violet-500 group-focus-within:text-white transition-all duration-300 group-focus-within:scale-110 group-focus-within:shadow-md">
                        <FaCommentDots className="text-sm" />
                      </div>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full pl-14 pr-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white font-bold py-4 rounded-xl hover:from-[#D4A017] hover:to-[#C39428] hover:text-[#071952] hover:shadow-lg transition-all duration-300 mt-2 text-lg flex items-center justify-center gap-3"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto border-4 border-white relative group">
              <div className="absolute inset-0 bg-[#071952]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
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
      </section>
    </main>
  );
};

export default Contact;
