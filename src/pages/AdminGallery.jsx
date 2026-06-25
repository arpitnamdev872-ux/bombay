import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaTrash,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaImage,
} from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

const AdminGallery = () => {
  const navigate = useNavigate();
  const { isAdmin, galleryImages, addGalleryImage, deleteGalleryImage } = useContext(AdminContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [imageTitle, setImageTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 🌟 Auto Compress Image to save memory for unlimited uploads
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const MAX_SIZE = 800; // Max width or height

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
          const compressedUrl = canvas.toDataURL("image/jpeg", 0.7); // 70% quality
          setImageUrl(compressedUrl);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (imageTitle.trim() && imageUrl) {
      addGalleryImage({
        title: imageTitle,
        url: imageUrl,
      });
      setImageTitle("");
      setImageUrl("");
      setShowForm(false);
    }
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
            <h1 className="text-2xl font-bold text-[#071952]">Manage Gallery</h1>
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
                Gallery Management
              </h2>
              <p className="text-gray-600">
                Total: <strong>{galleryImages.length}</strong> images
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <FaPlus /> Add Image
            </button>
          </div>

          {/* Add Image Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-[#071952] mb-6">Add Image to Gallery</h3>
              <form onSubmit={handleAddImage} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2">
                    Image Title *
                  </label>
                  <input
                    type="text"
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                    placeholder="e.g., Store View 1"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#071952] mb-2">
                    Upload Image *
                  </label>
                  <div className="flex items-center gap-4">
                    {imageUrl && (
                      <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#D4A017] shrink-0 shadow-md">
                        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4A017] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#071952] file:text-[#D4A017] hover:file:bg-[#0b2a4b] cursor-pointer transition-colors"
                      required={!imageUrl}
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setImageTitle("");
                      setImageUrl("");
                    }}
                    className="px-6 py-2 border-2 border-gray-400 text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#C39428] text-[#071952] rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    Add Image
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {galleryImages.length === 0 ? (
              <div className="text-center py-12">
                <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No images in gallery yet</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#D4A017] text-[#071952] px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <FaPlus /> Add First Image
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gray-100"
                  >
                    {/* Image Preview */}
                    <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x200?text=Image+Error";
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-[#071952] mb-2">
                        {image.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-4 truncate">
                        {image.url}
                      </p>

                      {/* Actions */}
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this image?"
                            )
                          ) {
                            deleteGalleryImage(image.id);
                          }
                        }}
                        className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminGallery;
