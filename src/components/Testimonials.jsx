import React, { useState, useEffect, useContext } from "react";
import { FaStar, FaTimes, FaPen, FaTrash, FaCheck, FaBan } from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

const Testimonials = () => {
  const defaultTestimonials = [
    {
      name: "Priya Singh",
      text: "बेहतरीन कपड़े और शानदार सेवा! Bombay Fashion में हर कपड़ा premium quality का है।",
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      text: "Great collection for kids! Very affordable and the trendy designs are impressive.",
      rating: 4,
    },
    {
      name: "Sneha Gupta",
      text: "I recently bought a bridal lehenga and it was absolutely stunning. Highly recommend this store for wedding shopping!",
      rating: 5,
    },
    {
      name: "Vikas Singh",
      text: "मेंस वियर का कलेक्शन बहुत ही बढ़िया है। मुझे मेरी पसंद के कपड़े आसानी से और सही दाम में मिल गए।",
      rating: 5,
    },
    {
      name: "Ananya Verma",
      text: "मुझे यहाँ सब कुछ पसंद आया। कुर्ती और सूट्स की क्वालिटी बहुत लाजवाब है।",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      text: "Nice clothes and perfect fit. The staff is polite, though it gets a bit crowded on weekends.",
      rating: 4,
    },
    {
      name: "Neha Mishra",
      text: "Amazing quality! Every time I visit Bombay Fashion, I find exactly what I am looking for.",
      rating: 5,
    },
    {
      name: "Kavya Patel",
      text: "हर बार शानदार अनुभव मिलता है। ये वाकई सबसे बेहतरीन फैशन डेस्टिनेशन है!",
      rating: 5,
    },
  ];

  const [reviews, setReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });
  const { isAdmin } = useContext(AdminContext);

  // Load reviews from local storage on first render
  useEffect(() => {
    const savedApproved = localStorage.getItem("bombay_reviews_approved");
    setReviews(savedApproved ? JSON.parse(savedApproved) : defaultTestimonials);

    const savedPending = localStorage.getItem("bombay_reviews_pending");
    setPendingReviews(savedPending ? JSON.parse(savedPending) : []);
  }, []);

  // Handle review submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.text.trim()) {
      const updatedPending = [newReview, ...pendingReviews];
      setPendingReviews(updatedPending);
      localStorage.setItem("bombay_reviews_pending", JSON.stringify(updatedPending));
      setNewReview({ name: "", text: "", rating: 5 });
      setIsModalOpen(false);
    }
  };

  // Handle review acceptance (Admin Only)
  const handleAccept = (indexToAccept) => {
    const reviewToAccept = pendingReviews[indexToAccept];
    
    // Add to approved reviews
    const updatedApproved = [reviewToAccept, ...reviews];
    setReviews(updatedApproved);
    localStorage.setItem("bombay_reviews_approved", JSON.stringify(updatedApproved));

    // Remove from pending reviews
    const updatedPending = pendingReviews.filter((_, idx) => idx !== indexToAccept);
    setPendingReviews(updatedPending);
    localStorage.setItem("bombay_reviews_pending", JSON.stringify(updatedPending));
  };

  // Handle review rejection (Admin Only)
  const handleReject = (indexToReject) => {
    if (window.confirm("Are you sure you want to reject this review? It will be permanently deleted.")) {
      const updatedPending = pendingReviews.filter((_, idx) => idx !== indexToReject);
      setPendingReviews(updatedPending);
      localStorage.setItem("bombay_reviews_pending", JSON.stringify(updatedPending));
    }
  };

  // Handle review deletion (Admin Only)
  const handleDelete = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter((_, idx) => idx !== indexToDelete);
      setReviews(updatedReviews);
      localStorage.setItem("bombay_reviews_approved", JSON.stringify(updatedReviews));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#071952] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4A017 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white font-serif mb-4">Customer Reviews</h2>
        <p className="text-center text-[#D4A017] tracking-widest uppercase mb-4 font-semibold">What our clients say</p>
        <div className="w-16 h-1 bg-[#D4A017] mx-auto mb-12 rounded-full"></div>
        
        {/* Add Review Button */}
        <div className="text-center">
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 bg-[#D4A017] text-[#071952] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg">
            <FaPen /> Write a Review
          </button>
        </div>
      </div>
      
      {/* Pending Reviews for Admin */}
      {isAdmin && pendingReviews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white font-serif mb-4">Pending Reviews</h3>
            <div className="w-16 h-1 bg-[#D4A017] mx-auto mb-8 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingReviews.map((testimonial, idx) => (
                    <div key={`pending-${idx}`} className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={`text-lg ${i < testimonial.rating ? 'text-[#D4A017]' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <p className="text-gray-200 mb-6 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                        </div>
                        <div>
                            <p className="font-bold text-white text-right border-t border-white/10 pt-4 mb-4">— {testimonial.name}</p>
                            <div className="flex justify-end gap-4">
                                <button onClick={() => handleAccept(idx)} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                    <FaCheck /> Accept
                                </button>
                                <button onClick={() => handleReject(idx)} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                    <FaBan /> Reject
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      {/* Marquee Animation Container (Aligned to Navbar) */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Added fade effect at edges for smooth scrolling visuals */}
        <div className="overflow-hidden relative w-full pb-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
          <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused] py-2">
            {/* Render 2 sets of testimonials for seamless looping */}
            {[...reviews, ...reviews].map((testimonial, idx) => {
              const originalIdx = idx % reviews.length;
              return (
              <div key={idx} className="relative w-[300px] md:w-[360px] shrink-0 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group">
                {/* Admin Delete Button */}
                {isAdmin && (
                  <button 
                    onClick={() => handleDelete(originalIdx)} 
                    className="absolute top-5 right-5 text-white/40 hover:text-red-500 transition-colors duration-300 z-20"
                    title="Delete Review"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                )}
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-lg ${i < testimonial.rating ? 'text-[#D4A017]' : 'text-gray-400'}`} />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                </div>
                <p className="font-bold text-white text-right border-t border-white/10 pt-4 mt-auto">— {testimonial.name}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="flex justify-between items-center bg-[#071952] p-6">
              <h3 className="text-2xl font-bold text-white font-serif tracking-wide">Write a Review</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-[#D4A017] transition-colors text-2xl">
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div>
                <label className="block text-[#071952] font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[#071952] font-bold mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 ${star <= newReview.rating ? "text-[#D4A017]" : "text-gray-300"}`}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[#071952] font-bold mb-2">Your Review</label>
                <textarea
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  placeholder="Share your experience with us..."
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white py-4 rounded-xl font-bold text-lg hover:from-[#D4A017] hover:to-[#C39428] hover:text-[#071952] hover:shadow-lg transition-all duration-300">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
