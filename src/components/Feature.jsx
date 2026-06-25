import React from "react";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    {Icon && <Icon className="text-4xl text-[#D4A017] mb-4" />}
    <h4 className="font-bold text-lg text-[#071952] mb-2">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default Feature;

