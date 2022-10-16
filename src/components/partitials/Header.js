import React, { useState } from "react";
import {
  GifIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import { createSearchParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fStartDate = format(new Date(startDate), "dd MMMM yy");
  const fEndDate = format(new Date(endDate), "dd MMMM yy");

  const [search, setSearch] = useState("");
  const [noOfGuests, setNoOfGests] = useState(1);

  const [ranges, setRanges] = useState("");

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const navigate = useNavigate();
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    navigate({
      pathname: "/search",
      search: `${createSearchParams({
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location: search,
        noOfGuests: noOfGuests,
      })}`,
    });

    setRanges(`${fStartDate} - ${fEndDate} | ${search} | ${noOfGuests} guests`);
    setSearch("");
  };

  const handleCancel = () => {
    setRanges("");
    setSearch("");
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md">
      <div className="relative">
        <img
          className="h-10 cursor-pointer"
          src="https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fqd3&w=1920&q=75"
          alt="none"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="flex items-center py-2 px-3 rounded-full space-x-3 md:shadow-sm md:border-2">
        <input
          className="outline-none flex-grow text-sm"
          placeholder={ranges || "Start your search"}
          value={search}
          onChange={onSearchChange}
        />
        <GifIcon
          onClick={handleSearch}
          className="h-8 rounded-full bg-red-500 text-white p-1 cursor-pointer hidden md:block"
        />
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

          <div className="flex items-center my-3 px-5">
            <h1 className=" flex-grow font-bold text-xl">Number of Guests</h1>
            <div className="flex items-center">
              <input
                className="border-2 w-10 outline-none text-center"
                type="number"
                value={noOfGuests}
                onChange={(e) => {
                  setNoOfGests(e.target.value);
                }}
              />
              <UserIcon className="h-5" />
            </div>
          </div>

          <hr />

          <div className="flex justify-center space-x-72 items-center mt-3 px-5">
            <button onClick={handleCancel} className="text-gray-500">
              Cancel
            </button>
            <button className="text-red-500" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
