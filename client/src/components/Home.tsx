import data from "../assets/CommodityList.json";
import Banner from "../../public/Banner.png";
import Card from "./Card";
import HomePrice from "./HomePrice";

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
          <div className="flex  *:border *:border-green-500 gap-5">
            <div
              id="items"
              className="p-3 flex justify-center lg:justify-start  flex-wrap gap-6 h-fit lg:w-5/6 w-full bg-slate-950"
            >
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
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
