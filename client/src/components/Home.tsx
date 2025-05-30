import Banner from "../../public/Banner.png";
import Card from "./Card";
import HomePrice from "./HomePrice";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  author: string;
  picture: string;
  commodityName: string;
  commodityPrice: string;
  commodityDescription: string;
  date: string;
  time: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/farmers/allPosts`)
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    post.commodityName.toLowerCase().includes(searchTerm.toLowerCase())

  );
  

  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-950 p-1.5 lg:p-3">
        <div className="lg:p-3">
          {/* Banner */}
          <div className="border border-green-500">
            <img className="w-full h-60 object-cover" src={Banner} alt="Banner" />
          </div>

          {/* Navigation & Search */}
          <div className="p-2 lg:p-5 flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
            {/* Nav Buttons */}
            <ul className="flex gap-2.5 items-center **:text-sm lg:**:text-lg">
              <li>
                <button className="px-3 bg-yellow-500 rounded-xs">For You</button>
              </li>
              <li>
                <button className="px-3 bg-yellow-500 rounded-xs">Top</button>
              </li>
              <li>
                <button className="px-3 bg-yellow-500 rounded-xs">Latest</button>
              </li>
            </ul>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search commodities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" w-full lg:w-1/2 p-2 border border-green-500 rounded bg-slate-950 text text-white"
            />
            

            {/* Sort Icons */}
            <div className="lg:text-lg flex gap-3">
              <i className="bi text-black dark:text-white bi-sort-up hover:cursor-pointer"></i>
              <i className="bi text-black dark:text-white bi-sort-down-alt hover:cursor-pointer"></i>
            </div>
          </div>

          {/* Cards & Sidebar */}
          <div className="flex *:border *:border-green-500 gap-5">
            <div
              id="items"
              className="p-3 flex justify-center lg:justify-start flex-wrap gap-6 h-fit lg:w-5/6 w-full bg-slate-950"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((item) => <Card key={item._id} item={item} />)
              ) : (
                <div className="w-full h-80 flex items-center justify-center text-white">
                 {searchTerm}
                </div>
              )}
            </div>

            <div className="hidden border w-1/4 h-screen lg:flex overflow-scroll no-scrollbar bg-slate-950">
              <HomePrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
