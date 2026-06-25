import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaImage,
} from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

const ProductManagement = ({
  category,
  products,
  addProduct,
  updateProduct,
  deleteProduct,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isAdmin } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    discount: 0,
    category: category,
    description: "",
    image: "",
  });

  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 🌟 Auto Compress Image to save memory
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const MAX_SIZE = 600; // slightly smaller for products

          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width;
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height;
              height = MAX_SIZE;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          const compressedUrl = canvas.toDataURL("image/jpeg", 0.7);
          setFormData((prev) => ({ ...prev, image: compressedUrl }));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "originalPrice" || name === "discount"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateProduct(editingId, formData);
      setEditingId(null);
    } else {
      addProduct(formData);
    }
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      discount: 0,
      category: category,
      description: "",
      image: "",
    });
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      discount: product.discount || 0,
      category: product.category,
      description: product.description || "",
      image: product.image || "",
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      discount: 0,
      category: category,
      description: "",
      image: "",
    });
  };

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
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="text-[#071952] hover:text-[#D4A017] transition-colors"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <h1 className="text-2xl font-bold text-[#071952]">
              Manage {category}
            </h1>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-[#071952] text-white p-6`}
        >
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="text-[#D4A017] font-bold hover:underline mb-6 block"
          >
            ← Back
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#071952] mb-2">
                {category} Products
              </h2>
              <p className="text-gray-600">
                Total: <strong>{products.length}</strong> products
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <FaPlus /> Add Product
            </button>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-[#071952] mb-6">
                {editingId ? "Edit Product" : "Add New Product"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#071952] mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Red Shirt"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#071952] mb-2">
                      Current Price (₹) *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="399"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#071952] mb-2">
                      Original Price (₹)
                    </label>
                    <input
                      type="number"
                      name="originalPrice"
                      value={formData.originalPrice}
                      onChange={handleInputChange}
                      placeholder="499"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#071952] mb-2">
                      Discount (%)
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      placeholder="20"
                      min="0"
                      max="100"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Product description..."
                    rows="3"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017] resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2">
                    Product Image
                  </label>
                  <div className="flex items-center gap-4">
                    {formData.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-[#D4A017] shrink-0 shadow-sm">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#071952] file:text-[#D4A017] hover:file:bg-[#0b2a4b] cursor-pointer transition-colors"
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 border-2 border-gray-400 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    {editingId ? "Update Product" : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            {products.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-600 mb-4">No products yet</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#D4A017] text-[#071952] px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <FaPlus /> Add First Product
                </button>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#071952] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Image</th>
                    <th className="px-6 py-3 text-left">Product Name</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Original</th>
                    <th className="px-6 py-3 text-left">Discount</th>
                    <th className="px-6 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        {product.image ? (
                          <div className="w-12 h-12 rounded bg-gray-200 overflow-hidden shadow-sm">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                            <FaImage />
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#071952]">
                        {product.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-[#D4A017]">
                          ₹{product.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {product.originalPrice ? `₹${product.originalPrice}` : "-"}
                      </td>
                      <td className="px-6 py-4">
                        {product.discount ? (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                            {product.discount}%
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleEdit(product)}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            title="Edit"
                          >
                            <FaEdit className="text-lg" />
                          </button>
                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this product?"
                                )
                              ) {
                                deleteProduct(product.id);
                              }
                            }}
                            className="text-red-600 hover:text-red-800 transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductManagement;
