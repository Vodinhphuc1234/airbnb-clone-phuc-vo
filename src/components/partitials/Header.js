import React, { useState } from "react";
import {
  GifIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";

export default function Header() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md">
      <div className="relative">
        <img
          className="h-10 cursor-pointer"
          src="https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fqd3&w=1920&q=75"
          alt="none"
        />
      </div>
      <div className="flex items-center py-2 px-3 rounded-full space-x-3 md:shadow-sm md:border-2">
        <input
          className="outline-none flex-grow text-sm"
          placeholder="Start your search here..."
          value={search}
          onChange={handleSearch}
        />
        <GifIcon className="h-8 rounded-full bg-red-500 text-white p-1 cursor-pointer hidden md:block" />
      </div>
      <div className="flex justify-end items-center space-x-4">
        <p className="text-gray-500 font-medium hidden md:block">
          Become a host
        </p>
        <GlobeAltIcon className="h-8 text-gray-500" />
        <div className="flex border-2 border-gray-500 rounded-full">
          <MegaphoneIcon className="h-8 text-gray-500" />
          <UserCircleIcon className="h-8 text-gray-500" />
        </div>
      </div>

      {search && (
        <div className="mt-10 col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["red"]}
          />
        </div>
      )}
    </div>
  );
}
