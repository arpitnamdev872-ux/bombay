import CategoryCard from "../components/CategoryCard";
import SaleBanner from "../components/SaleBanner";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import MapLocation from "../components/MapLocation";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Sale Banner */}
      <SaleBanner />
      
      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#071952] mb-2 uppercase">Our Collections</h2>
          <div className="w-16 h-1 bg-[#D4A017] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard 
              title="Kids Wear" 
              link="/kids-wear"
              image="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <CategoryCard 
              title="Mens Wear" 
              link="/mens-wear"
              image="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <CategoryCard 
              title="Ladies Wear" 
              link="/ladies-wear"
              image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Map Location */}
      <MapLocation />
    </main>
  );
};

export default Home;
