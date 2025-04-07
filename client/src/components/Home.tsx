import Banner from "../../public/Banner.png";
import HomePrice from "./HomePrice";
import CommodityData from "../assets/CommodityList.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-950 p-1.5 lg:p-3">
        <div className="lg:p-3">
          <div className="border border-green-500 ">
            {/* Image */}
            <img className="w-full h-60 object-cover" src={Banner} alt="" />
            {/* <div className="">
              <h1 className="">GrowUzhavu</h1>
              <h3 className="">Let's Connect With Market</h3>
            </div> */}
          </div>
          <div className="p-2 lg:p-5 flex justify-between">
            {/* Nav Buttons */}
            <ul className="flex gap-2.5 items-center **:text-sm lg:**:text-lg ">
              <li>
                <button className="px-3 bg-yellow-500  rounded-xs ">
                  For You
                </button>
              </li>
              <li>
                <button className="px-3 bg-yellow-500  rounded-xs ">Top</button>
              </li>
              <li>
                <button className="px-3 bg-yellow-500  rounded-xs ">
                  Latest
                </button>
              </li>
            </ul>
            <div className="lg:text-lg flex gap-3">
              {/* sort variablity */}

              {/* Sort button */}

              <i className="bi text-black dark:text-white bi-sort-up hover:cursor-pointer"></i>
              <i className="bi text-black dark:text-white bi-sort-down-alt hover:cursor-pointer"></i>
            </div>
          </div>
          <div className="flex bg-white dark:bg-slate-950 *:border *:border-green-500 gap-5">
            <div
              id="items"
              className="p-3 flex justify-center lg:justify-start  flex-wrap gap-6 lg:w-5/6 w-full bg-white dark:bg-slate-950"
            >
              {CommodityData.map((data) => (
                <Link to={`/post/${data.id}`}>
                  <div
                    className="w-72 h-80 lg:w-80 lg:h-96 border border-green-500"
                    key={data.id}
                  >
                    <div className="w-full h-full flex flex-col items-center bg-white dark:bg-slate-950 p-1.5 lg:p-3">
                      <img
                        className="w-full h-48 lg:h-4/6 border border-green-500"
                        src={data.picture}
                        alt={data.name}
                      />
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center absolute z-0 transform translate-x-25 translate-y-2 lg:translate-x-27 lg:translate-y-2  bg-white  border border-green-500">
                        <i className="bi bi-person-fill  text-gray-700 text-4xl"></i>
                      </div>
                      <div className="w-full h-2/6 flex text-black dark:text-white justify-start">
                        <div className="flex flex-col justify-around">
                          <h1 className=" font-bold flex justify-between">
                            <div className="flex items-baseline text-sm lg:text-md gap-1">
                              {data.name}
                              <div className="font-light text-xs">
                                {data.time}
                              </div>
                            </div>
                            <div className="font-normal flex items-center gap-0.5 text-sm lg:text-md lg:gap-2 text-yellow-400">
                              <div className="text-xs">per k/g </div>₹{" "}
                              {data.price}
                            </div>
                          </h1>
                          <div className="text-xs lg:text-sm">
                            {data.description}
                          </div>
                          <div className="font-light text-xs flex justify-between items-center">
                            {data.date}{" "}
                            <button
                              className="px-2 lg:px-4 py-1.5 bg-yellow-400 font-bold text-white flex gap-0.5 justify-baseline hover:cursor-pointer"
                              type="button"
                            >
                              Buy<i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="hidden border w-1/4 lg:flex ">
              <HomePrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
