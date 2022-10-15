import { Fragment } from "react";
import Banner from "../components/home/Banner";
import MediumCard from "../components/home/MediumCard";
import SmallCard from "../components/home/SmallCard";
const smallDatas = [
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=1920&q=75",
    city: "Lodon",
    distance: "45 minutes drive",
  },
];

const mediumDatas = [
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
  {
    image:
      "https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F2io&w=1920&q=75",
    title: "Outdoor getaways",
  },
];

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <main className="max-w-[1000px] mx-auto px-5">
        <section>
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl mt-10 mb-5">
            Explore Nearby
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {smallDatas.map((item) => (
              <SmallCard
                image={item.image}
                city={item.city}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl mt-10 mb-5">
            Live Anywhere
          </h1>

          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3">
            {mediumDatas.map((item) => (
              <MediumCard
                key={Math.random()}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="mt-10 relative">
            <div>
              <img
                className="rounded-md h-[400px] w-full object-cover"
                src="https://airbnb-yt-demo.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F4cj&w=1920&q=75"
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
