import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const MapLocation = () => (
  <section className="py-12 md:py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071952] mb-2 uppercase">Visit Our Store</h2>
      <div className="w-16 h-1 bg-[#D4A017] mx-auto mb-12 rounded-full"></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96">
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
        
        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-start gap-4 mb-6">
              <FaMapMarkerAlt className="text-[#D4A017] text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-[#071952] mb-2">Address</h4>
                <p className="text-gray-700 leading-relaxed">
                  Kotwaran ka pura, chilla mod, churaha, opp. hanuman mandir, new, Jasra, Uttar Pradesh 212107, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-start gap-4 mb-6">
              <FaPhoneAlt className="text-[#D4A017] text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-[#071952] mb-2">Contact</h4>
                <a href="tel:+919082174499" className="text-[#D4A017] font-bold text-lg hover:underline">
                  +91 90821 74499
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <FaClock className="text-[#D4A017] text-3xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-[#071952] mb-2">Business Hours</h4>
                <p className="text-gray-700"><strong>Mon - Sun:</strong> 10:00 AM - 05:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapLocation;

