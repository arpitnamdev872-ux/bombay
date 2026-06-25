import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock, FaUser, FaArrowRight } from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";
import propImage from "../assets/hero/prop.jpeg"; // Proprietor Image

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginAdmin } = useContext(AdminContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const success = loginAdmin(username, password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#071952] via-[#0b2a4b] to-[#071952] p-4 relative overflow-hidden">
      
      {/* Colorful Background Glowing Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#D4A017] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#C39428] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-1000 pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl relative z-10 animate-fade-in-up">
        
        {/* Left Side: Proprietor Image & Welcome Branding */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#F7F2E9] to-[#F3E5AB] p-10 flex flex-col items-center justify-center text-center border-r-4 border-[#D4A017]/20 relative">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-[6px] border-white shadow-xl overflow-hidden mb-6 relative bg-blue-50">
            <img src={propImage} alt="Bombay Fashion Proprietor" className="w-full h-full object-cover object-top scale-110" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#071952] font-serif mb-2 uppercase tracking-wider">Bombay Fashion</h2>
          <div className="w-16 h-1.5 bg-[#D4A017] rounded-full mb-4"></div>
          <p className="text-[#0b2a4b] font-bold text-sm px-4">
            Welcome to the Admin Portal. Only authorized personnel can access this area.
          </p>
        </div>

        {/* Right Side: Professional Login Form */}
        <div className="md:w-1/2 p-10 md:p-14 bg-white flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            <div className="w-14 h-14 bg-gradient-to-br from-[#071952] to-[#0b2a4b] text-[#D4A017] rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-[#D4A017]/30">
              <FaUserShield />
            </div>
            <h2 className="text-3xl font-bold text-[#071952] uppercase tracking-wide">Admin Login</h2>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold mb-6 border border-red-200 text-center shadow-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[#071952] font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D4A017] text-lg">
                  <FaUser />
                </div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-[#D4A017] transition-all text-[#071952] font-semibold shadow-inner" placeholder="Enter your username" required />
              </div>
            </div>

            <div>
              <label className="block text-[#071952] font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D4A017] text-lg">
                  <FaLock />
                </div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-[#D4A017] transition-all text-[#071952] font-semibold shadow-inner" placeholder="••••••••" required />
              </div>
            </div>

            <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white py-4 rounded-xl font-bold text-lg hover:from-[#D4A017] hover:to-[#C39428] hover:text-[#071952] transition-all duration-500 shadow-lg hover:shadow-[0_10px_20px_rgba(212,160,23,0.3)] flex items-center justify-center gap-3 group">
              SECURE LOGIN
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;