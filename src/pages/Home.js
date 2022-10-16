import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import MediumCard from "../components/home/MediumCard";
import SmallCard from "../components/home/SmallCard";
import MediumLoading from "../components/Loading/medium";
import SmallLoading from "../components/Loading/small";

const Home = () => {
  const [smallLoading, setSmallLoading] = useState(false);
  const [mediumLoading, setMediumLoading] = useState(false);
  const [smallDatas, setSmallDatas] = useState([]);
  const [mediumDatas, setMediumDatas] = useState([]);
  useEffect(() => {
    const getSmallData = async () => {
      setSmallLoading(true);
      const data = await axios.get(
        "https://api.jsonstorage.net/v1/json/2e668e2c-65c4-4c5a-997e-b58bc3652213/b15a9f47-4f26-492a-b62e-995a25f23c74",
        {
          headers: {},
        }
      );
      setSmallDatas(data.data);
      setSmallLoading(false);
    };
    const getMediumData = async () => {
      setMediumLoading(true);
      const data = await axios.get(
        "https://api.jsonstorage.net/v1/json/2e668e2c-65c4-4c5a-997e-b58bc3652213/bad8eebe-04ce-4351-ab00-b582699c3fff",
        {
          headers: {},
        }
      );
      setMediumDatas(data.data);
      setMediumLoading(false);
    };

    getSmallData();
    getMediumData();
  }, []);
  return (
    <Fragment>
      <Banner />
      <main className="max-w-[1000px] mx-auto px-5">
        <section>
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl mt-10 mb-5">
            Explore Nearby
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {smallLoading ? (
              <Fragment>
                <SmallLoading />
                <SmallLoading />
                <SmallLoading />
                <SmallLoading />
              </Fragment>
            ) : (
              smallDatas.map((item) => (
                <SmallCard
                  image={item.img}
                  city={item.location}
                  distance={item.distance}
                />
              ))
            )}
          </div>
        </section>

        <section>
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl mt-10 mb-5">
            Live Anywhere
          </h1>

          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3">
            {mediumLoading ? (
              <Fragment>
                <MediumLoading />
                <MediumLoading />
                <MediumLoading />
              </Fragment>
            ) : (
              mediumDatas.map((item) => (
                <MediumCard
                  key={item.img}
                  image={item.img}
                  title={item.title}
                />
              ))
            )}
          </div>
        </section>

        <section>
          <div className="mt-10 relative">
            <div>
              <img
                className="rounded-md h-[400px] w-full object-cover"
                src="https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F4cj&w=1920&q=75"
                alt="none"
              />
            </div>
            <div className="absolute top-10 left-10 w-60 flex-col space-y-5">
              <h3 className="font-semubold text-3xl">The Greatest Outdoor</h3>
              <p>Wishlists curated by Airbnb.</p>
              <button className="bg-black text-white p-2 rounded-md">
                Get Inspired
              </button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
