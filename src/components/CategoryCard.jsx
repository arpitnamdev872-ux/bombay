import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ title = "Category", image = "", link = "/" }) => (
  <Link to={link}>
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-72 group">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#071952] to-[#0b2a4b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold text-center px-4">{title}</span>
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-4 uppercase tracking-wider">{title}</h3>
        <button className="bg-[#D4A017] text-[#071952] px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors duration-300">
          EXPLORE <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  </Link>
);

export default CategoryCard;

