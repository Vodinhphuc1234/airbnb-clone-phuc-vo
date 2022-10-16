import React from "react";

export default function MediumCard({ image, title }) {
  return (
    <div
      className="cursor-pointer 
    hover:scale-105 transition transform duration-300 rounded-md active:scale-95"
    >
      <div className=" h-60 w-60 ">
        <img className="rounded-md" src={image} alt="None" />
      </div>
      <p className="text-2xl py-5 px-3">{title}</p>
    </div>
  );
}
