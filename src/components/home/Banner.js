import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      <img
        className="lg:h-[700px] md:h-[500px] sm:h-[300px] w-full object-cover"
        src="https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F0fm&w=1920&q=75"
        alt="None"
      />
      <div className="absolute top-1/2 flex flex-col w-full items-center">
        <div>Not sure where to go? Perfect.</div>
        <button
          className="bg-white p-10 py-3 rounded-full text-purple-600 font-bold 
        mt-3 shadow-md hover:shadow-xl active:scale-75 transition transform duration-200 ease-in"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
