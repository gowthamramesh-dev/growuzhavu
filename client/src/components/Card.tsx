import { Link } from "react-router-dom";

interface CardItem {
  _id: string;
  author: string;
  picture: string;
  commodityName: string;
  commodityPrice: string;
  commodityDescription: string;
  date: string;
  time: string;
}

interface CardProps {
  item: CardItem;
}

function Card({ item }: CardProps) {
  return (
    <>
      <Link to={`/post/${item._id}`}>
        <div
          className="w-72 h-80 lg:w-80 lg:h-96 border border-green-500 shadow-md shadow-green-700"
          key={item._id}
        >
          <div className="w-full h-full flex flex-col items-center bg-slate-950 p-1.5 lg:p-3">
            <img
              className="w-full h-48 lg:h-4/6  border border-green-500"
              src={item.picture}
              alt={item.commodityName}
            />
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center absolute z-0 transform translate-x-25 translate-y-2 lg:translate-x-27 lg:translate-y-2  bg-white  border border-green-500">
              <i className="bi bi-person-fill  text-gray-700 text-4xl"></i>
            </div>
            <div className="w-full h-2/6 flex text-white justify-start">
              <div className="flex w-full flex-col justify-around">
                <h1 className=" font-bold flex justify-between">
                  <div className="flex items-baseline text-sm lg:text-md gap-1">
                    {item.commodityName}
                    <div className="font-light text-xs">{item.time}</div>
                  </div>
                  <div className="font-normal flex items-center gap-0.5 text-sm lg:text-md lg:gap-2 text-yellow-400">
                    <div className="text-xs">per k/g </div>₹{" "}
                    {item.commodityPrice}
                  </div>
                </h1>
                <div className="text-xs lg:text-sm">
                  {item.commodityDescription}
                </div>
                <div className="font-light text-xs  flex justify-between items-center">
                  {item.date}{" "}
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
    </>
  );
}

export default Card;
