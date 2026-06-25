import React, { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Default Temporary Products
  const defaultKidsProducts = [
    {
      id: "temp-k1",
      name: "Trendy Boys T-Shirt",
      price: 499,
      originalPrice: 699,
      discount: 28,
      category: "Boys",
      description: "Comfortable cotton t-shirt for boys.",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-k2",
      name: "Cute Girls Frock",
      price: 799,
      originalPrice: 999,
      discount: 20,
      category: "Girls",
      description: "Beautiful floral frock for girls.",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a5dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-k3",
      name: "Boys Ethnic Kurta",
      price: 899,
      originalPrice: 1299,
      discount: 30,
      category: "Boys",
      description: "Traditional kurta for festive occasions.",
      image: "https://images.unsplash.com/photo-1604467715878-83e5ddf82e88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-k4",
      name: "Kids Party Wear",
      price: 1299,
      originalPrice: 1599,
      discount: 18,
      category: "Girls",
      description: "Elegant party dress for special moments.",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const defaultMensProducts = [
    {
      id: "temp-m1",
      name: "Classic White Shirt",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      category: "Shirts",
      description: "Premium quality formal white shirt.",
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-m2",
      name: "Traditional Kurta Set",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      category: "Kurtas",
      description: "Elegant traditional kurta for festive occasions.",
      image: "https://images.unsplash.com/photo-1596541223130-5d564415f9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-m3",
      name: "Stylish Denim Jacket",
      price: 1299,
      originalPrice: 2499,
      discount: 48,
      category: "Jackets",
      description: "Trendy denim jacket for a casual look.",
      image: "https://images.unsplash.com/photo-1542272604-780c9685b9ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-m4",
      name: "Casual Polo T-Shirt",
      price: 599,
      originalPrice: 899,
      discount: 33,
      category: "T-Shirts",
      description: "Comfortable polo t-shirt for everyday wear.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const defaultLadiesProducts = [
    {
      id: "temp-l1",
      name: "Designer Silk Saree",
      price: 2499,
      originalPrice: 3499,
      discount: 28,
      category: "Sarees",
      description: "Gorgeous silk saree with intricate borders.",
      image: "https://images.unsplash.com/photo-1610189013629-d2b38be81bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-l2",
      name: "Cotton Printed Kurti",
      price: 899,
      originalPrice: 1299,
      discount: 30,
      category: "Kurtis",
      description: "Daily wear comfortable cotton kurti.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-l3",
      name: "Bridal Lehenga Choli",
      price: 15000,
      originalPrice: 20000,
      discount: 25,
      category: "Lehengas",
      description: "Premium bridal lehenga with heavy embroidery.",
      image: "https://images.unsplash.com/photo-1583391733958-d25e07fac04f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "temp-l4",
      name: "Party Wear Gown",
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      category: "Gowns",
      description: "Elegant evening gown for parties and receptions.",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Default Temporary Gallery Images
  const defaultGalleryImages = [
    {
      id: "gal-1",
      title: "Premium Saree Collection",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Mens Ethnic Wear",
      url: "https://images.unsplash.com/photo-1598300188481-99564f3f1e9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Exclusive Bridal Lehengas",
      url: "https://images.unsplash.com/photo-1583391733958-d25e07fac04f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Boutique Interior",
      url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Kids Fashion",
      url: "https://images.unsplash.com/photo-1622290319146-7b63df48a635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Bombay Fashion Store",
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Products State
  const [kidsProducts, setKidsProducts] = useState(defaultKidsProducts);
  const [mensProducts, setMensProducts] = useState(defaultMensProducts);
  const [ladiesProducts, setLadiesProducts] = useState(defaultLadiesProducts);

  // Gallery State
  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedAdmin = localStorage.getItem("adminUser");
    const savedKidsProducts = localStorage.getItem("kidsCollectionData");
    const savedMensProducts = localStorage.getItem("mensCollectionData");
    const savedLadiesProducts = localStorage.getItem("ladiesCollectionData");
    const savedGallery = localStorage.getItem("galleryCollectionData");

    if (savedAdmin) {
      setAdminUser(JSON.parse(savedAdmin));
      setIsAdmin(true);
    }

    if (savedKidsProducts) {
      setKidsProducts(JSON.parse(savedKidsProducts));
    } else {
      localStorage.setItem("kidsCollectionData", JSON.stringify(defaultKidsProducts));
    }

    if (savedMensProducts) {
      setMensProducts(JSON.parse(savedMensProducts));
    } else {
      localStorage.setItem("mensCollectionData", JSON.stringify(defaultMensProducts));
    }

    if (savedLadiesProducts) {
      setLadiesProducts(JSON.parse(savedLadiesProducts));
    } else {
      localStorage.setItem("ladiesCollectionData", JSON.stringify(defaultLadiesProducts));
    }

    if (savedGallery) {
      setGalleryImages(JSON.parse(savedGallery));
    } else {
      localStorage.setItem("galleryCollectionData", JSON.stringify(defaultGalleryImages));
    }
  }, []);

  // Admin Login
  const loginAdmin = (username, password) => {
    // Demo credentials
    if (username === "admin" && password === "admin123") {
      const admin = { username, loginTime: new Date() };
      setAdminUser(admin);
      setIsAdmin(true);
      localStorage.setItem("adminUser", JSON.stringify(admin));
      return true;
    }
    return false;
  };

  // Admin Logout
  const logoutAdmin = () => {
    setAdminUser(null);
    setIsAdmin(false);
    localStorage.removeItem("adminUser");
  };

  // Kids Products Management
  const addKidsProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updated = [...kidsProducts, newProduct];
    setKidsProducts(updated);
    localStorage.setItem("kidsCollectionData", JSON.stringify(updated));
    return newProduct;
  };

  const updateKidsProduct = (id, updatedProduct) => {
    const updated = kidsProducts.map((p) =>
      p.id === id ? { ...p, ...updatedProduct } : p
    );
    setKidsProducts(updated);
    localStorage.setItem("kidsCollectionData", JSON.stringify(updated));
  };

  const deleteKidsProduct = (id) => {
    const updated = kidsProducts.filter((p) => p.id !== id);
    setKidsProducts(updated);
    localStorage.setItem("kidsCollectionData", JSON.stringify(updated));
  };

  // Mens Products Management
  const addMensProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updated = [...mensProducts, newProduct];
    setMensProducts(updated);
    localStorage.setItem("mensCollectionData", JSON.stringify(updated));
    return newProduct;
  };

  const updateMensProduct = (id, updatedProduct) => {
    const updated = mensProducts.map((p) =>
      p.id === id ? { ...p, ...updatedProduct } : p
    );
    setMensProducts(updated);
    localStorage.setItem("mensCollectionData", JSON.stringify(updated));
  };

  const deleteMensProduct = (id) => {
    const updated = mensProducts.filter((p) => p.id !== id);
    setMensProducts(updated);
    localStorage.setItem("mensCollectionData", JSON.stringify(updated));
  };

  // Ladies Products Management
  const addLadiesProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updated = [...ladiesProducts, newProduct];
    setLadiesProducts(updated);
    localStorage.setItem("ladiesCollectionData", JSON.stringify(updated));
    return newProduct;
  };

  const updateLadiesProduct = (id, updatedProduct) => {
    const updated = ladiesProducts.map((p) =>
      p.id === id ? { ...p, ...updatedProduct } : p
    );
    setLadiesProducts(updated);
    localStorage.setItem("ladiesCollectionData", JSON.stringify(updated));
  };

  const deleteLadiesProduct = (id) => {
    const updated = ladiesProducts.filter((p) => p.id !== id);
    setLadiesProducts(updated);
    localStorage.setItem("ladiesCollectionData", JSON.stringify(updated));
  };

  // Gallery Management
  const addGalleryImage = (image) => {
    const newImage = { ...image, id: Date.now() };
    const updated = [...galleryImages, newImage];
    setGalleryImages(updated);
    localStorage.setItem("galleryCollectionData", JSON.stringify(updated));
    return newImage;
  };

  const deleteGalleryImage = (id) => {
    const updated = galleryImages.filter((img) => img.id !== id);
    setGalleryImages(updated);
    localStorage.setItem("galleryCollectionData", JSON.stringify(updated));
  };

  const value = {
    isAdmin,
    adminUser,
    loginAdmin,
    logoutAdmin,
    kidsProducts,
    addKidsProduct,
    updateKidsProduct,
    deleteKidsProduct,
    mensProducts,
    addMensProduct,
    updateMensProduct,
    deleteMensProduct,
    ladiesProducts,
    addLadiesProduct,
    updateLadiesProduct,
    deleteLadiesProduct,
    galleryImages,
    addGalleryImage,
    deleteGalleryImage,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
