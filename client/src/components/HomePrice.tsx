// import axios from "axios";
// import { useEffect, useState } from "react";
import commodityPrice from "../assets/CommodityPrice.json";

const HomePrice = () => {
  const Commodity = commodityPrice.commodities;
  // const [items, setItems] = useState([]);
  // const utc = new Date().toJSON().slice(0, 10).split("-").reverse().join("-");

  // useEffect(() => {
  //   axios
  //     .get("api url")
  //     .then((result) => setItems(result.data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div className="w-full py-3 px-1.5">
        <div className="flex gap-5 flex-col">
          <div className="flex items-center justify-between bg-green-500">
            <label className="">Price</label>
            <input
              className="outline-0 bg-yellow-500 rounded-xs p-0.5"
              type="date"
              name=""
              id="dates"
            />
          </div>
          <div className="">
            <div className="flex justify-between border-b *:font-bold">
              <label>Commodity Name</label>
              <label>Price</label>
            </div>
            <div className="h-full overflow-scroll no-scrollbar">
              {Commodity.map((data) => (
                <div className="flex justify-between" key={data.id}>
                  <div className="">{data.name}</div>
                  <div className="text-yellow-500">{data.max}/Kg</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePrice;
