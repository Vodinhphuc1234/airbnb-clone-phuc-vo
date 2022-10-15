import React from "react";

export default function SmallCard({ image, city, distance }) {
  return (
    <div className="flex m-5 p-2 items-center cursor-pointer hover:bg-gray-200 
    hover:scale-105 transition transform duration-300 rounded-md active:scale-95">
      <img className="h-14 rounded-md" src={image} />
      <div className="flex-grow ml-3">
        <p className="text-gray-900 text-md">{city}</p>
        <p className="text-gray-500 text-sm">{distance}</p>
      </div>
    </div>
  );
}
