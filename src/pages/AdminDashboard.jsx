import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSignOutAlt,
  FaBox,
  FaImage,
  FaChartBar,
  FaShoppingCart,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

const AdminDashboard = () => {
  const { isAdmin, adminUser, logoutAdmin, kidsProducts, mensProducts, ladiesProducts, galleryImages } =
    useContext(AdminContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login");
  };

  const stats = [
    {
      title: "Kids Products",
      count: kidsProducts.length,
      icon: FaBox,
      color: "from-blue-500 to-blue-600",
      link: "/admin/kids-products",
    },
    {
      title: "Mens Products",
      count: mensProducts.length,
      icon: FaShoppingCart,
      color: "from-green-500 to-green-600",
      link: "/admin/mens-products",
    },
    {
      title: "Ladies Products",
      count: ladiesProducts.length,
      icon: FaUsers,
      color: "from-pink-500 to-pink-600",
      link: "/admin/ladies-products",
    },
    {
      title: "Gallery Images",
      count: galleryImages.length,
      icon: FaImage,
      color: "from-purple-500 to-purple-600",
      link: "/admin/gallery",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-[#071952] text-2xl"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <h1 className="text-2xl font-bold text-[#071952]">Admin Panel</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-700">
              Welcome,{" "}
              <span className="font-bold text-[#D4A017]">
                {adminUser?.username}
              </span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-[#071952] text-white p-6 transition-all duration-300`}
        >
          <div className="mb-8">
            <Link to="/" className="text-[#D4A017] font-bold text-lg hover:underline">
              ← Back to Website
            </Link>
          </div>

          <nav className="space-y-2">
            <p className="text-gray-400 text-sm font-bold mb-4">MANAGEMENT</p>
            <Link
              to="/admin/kids-products"
              className="block px-4 py-3 rounded-lg hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300"
            >
              <FaBox className="inline mr-2" /> Kids Products
            </Link>
            <Link
              to="/admin/mens-products"
              className="block px-4 py-3 rounded-lg hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300"
            >
              <FaShoppingCart className="inline mr-2" /> Mens Products
            </Link>
            <Link
              to="/admin/ladies-products"
              className="block px-4 py-3 rounded-lg hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300"
            >
              <FaUsers className="inline mr-2" /> Ladies Products
            </Link>
            <Link
              to="/admin/gallery"
              className="block px-4 py-3 rounded-lg hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300"
            >
              <FaImage className="inline mr-2" /> Gallery
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-[#071952] to-[#0b2a4b] text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
            <p className="opacity-90">Manage your Bombay Fashion store inventory</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={idx}
                  to={stat.link}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-gray-600 text-sm font-semibold mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-3xl font-bold text-[#071952]">{stat.count}</p>
                </Link>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#071952] mb-4 flex items-center gap-2">
                <FaChartBar className="text-[#D4A017]" /> Overview
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Total Products</span>
                  <span className="font-bold text-lg text-[#071952]">
                    {kidsProducts.length + mensProducts.length + ladiesProducts.length}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Gallery Images</span>
                  <span className="font-bold text-lg text-[#071952]">
                    {galleryImages.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Last Login</span>
                  <span className="font-bold text-lg text-[#D4A017]">Just now</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-gradient-to-br from-[#D4A017] to-[#C39428] rounded-lg shadow-lg p-6 text-[#071952]">
              <h3 className="text-xl font-bold mb-4">📋 Quick Guide</h3>
              <ul className="space-y-2 text-sm font-semibold">
                <li>✓ Add/Edit/Delete products</li>
                <li>✓ Set prices & discounts</li>
                <li>✓ Manage gallery images</li>
                <li>✓ Real-time inventory</li>
                <li>✓ Local storage backup</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
