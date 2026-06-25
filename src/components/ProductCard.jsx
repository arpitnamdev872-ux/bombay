import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ name = "Product", price = "₹0", image = "", category = "" }) => (
  <div className="bg-white rounded-[1.25rem] shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
    <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[#071952]/40">
          <span className="text-lg font-bold uppercase tracking-widest">{category || "Product"}</span>
        </div>
      )}
    </div>
    <div className="p-5">
      {category && <span className="inline-block px-3 py-1 bg-gray-100 text-[#D4A017] text-xs font-bold rounded-full mb-3 uppercase tracking-wide">{category}</span>}
      <h3 className="font-bold text-lg text-[#071952] mb-2 line-clamp-2">{name}</h3>
      <div className="flex items-center justify-between mb-5">
        <span className="text-[#D4A017] font-bold text-xl">{price}</span>
      </div>
      <button className="w-full bg-[#071952] text-white font-bold py-3 rounded-xl hover:bg-[#D4A017] hover:text-[#071952] transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md">
        <FaShoppingCart /> Add
      </button>
    </div>
  </div>
);

export default ProductCard;
