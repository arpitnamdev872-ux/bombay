import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import KidsWear from "./pages/KidsWear";
import MensWear from "./pages/MensWear";
import LadiesWear from "./pages/LadiesWear";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminKidsProducts from "./pages/AdminKidsProducts";
import AdminMensProducts from "./pages/AdminMensProducts";
import AdminLadiesProducts from "./pages/AdminLadiesProducts";
import AdminGallery from "./pages/AdminGallery";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { AdminProvider } from "./context/AdminContext";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <AdminProvider>
      <BrowserRouter>
        {/* This component will scroll to top on every page change */}
        <ScrollToTop />

        {/* Top Navbar - Always Shown */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/ladies-wear" element={<LadiesWear />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/kids-products" element={<AdminKidsProducts />} />
          <Route path="/admin/mens-products" element={<AdminMensProducts />} />
          <Route
            path="/admin/ladies-products"
            element={<AdminLadiesProducts />}
          />
          <Route path="/admin/gallery" element={<AdminGallery />} />
        </Routes>

        {/* Footer Always Shown */}
        <Footer />
      </BrowserRouter>
    </AdminProvider>
  );
};

export default App;