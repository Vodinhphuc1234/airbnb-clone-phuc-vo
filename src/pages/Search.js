import axios from "axios";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfoCard from "../components/home/InfoCard";
import InforLoading from "../components/Loading/info";

export default function Search() {
  const [searchParams] = useSearchParams();

  const startDate = format(
    new Date(searchParams.get("startDate")),
    "dd MMMM yy"
  );
  const endDate = format(new Date(searchParams.get("endDate")), "dd MMMM yy");
  const location = searchParams.get("location");
  const noOfGuests = searchParams.get("noOfGuests");

  const [searchDatas, setSearchDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getSearchData = async () => {
      setLoading(true);

      const data = await axios.get(
        "https://api.jsonstorage.net/v1/json/2e668e2c-65c4-4c5a-997e-b58bc3652213/431c5ab0-3977-4ee5-967e-d1fa078c3c39",
        { headers: {} }
      );

      setSearchDatas(data.data);
      setLoading(false);
    };
    getSearchData();
  }, []);
  return (
    <div className="pt-20 px-14">
      <section className="space-y-3">
        <p className="text-sm text-gray-600">
          300+ stays - {startDate} - {endDate} - {noOfGuests} guests
        </p>
        <h1 className="font-bold text-3xl">Stay in {location}</h1>

        <div className=" space-x-3 hidden md:flex">
          <button className="button">Cancellation Flexibility</button>
          <button className="button">Type of Place</button>
          <button className="button">Price</button>
          <button className="button">Rooms and Beds</button>
          <button className="button">More filters</button>
        </div>
      </section>

      <main>
        <div className="grid xl:grid-cols-2">
          {loading ? (
            <Fragment>
              <InforLoading />
              <InforLoading />
              <InforLoading />
              <InforLoading />
            </Fragment>
          ) : (
            searchDatas.map((item) => <InfoCard key={item.img} {...item} />)
          )}
        </div>
      </main>
    </div>
  );
}
