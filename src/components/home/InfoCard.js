import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div
      className="flex shadow-sm py-5 rounded-md space-x-4 m-2 mx-5 pr-5 hover:scale-105 hover:shadow-lg 
    cursor-pointer transition transform duration-300"
    >
      <div className="relative w-[200px] h-[150px] flex-shrink-0">
        <img
          className="relative w-[200px] h-[150px] object-cover rounded-md"
          src={img}
          alt="none"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">{location}</p>
            <HeartIcon className="h-5" />
          </div>

          <h3 className="text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center">
            <p>{star}</p>
            <StarIcon className="h-4 text-yellow-700" />
          </div>
          <div>
            <p className="text-xl font-bold">{price}</p>
            <p className="text-gray-500 font-thin text-end">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
