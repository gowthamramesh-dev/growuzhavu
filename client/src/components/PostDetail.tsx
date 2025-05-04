import CommodityData from "../assets/CommodityList.json";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import HomePrice from "./HomePrice";

const PostDetail = () => {
  const { id } = useParams();
  const dataId = +id;
  const thisData = CommodityData.find((item) => item.id === dataId);
  return (
    <>
      <div className=" h-full lg:p-5 *:border *:bg-slate-950 *:border-green-500 *:h-full flex gap-5">
        <div className="w-full lg:w-5/6 p-2">
          <div className="">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-sm lg:text-2xl">
                Home {"/"} post {"/"} {id}
              </h1>
              <div className="w-full flex justify-center items-center ">
                <img
                  className="w-4/5 lg:w-2/4 h-52 lg:h-96 border border-green-500 object-cover"
                  src={thisData?.picture}
                  alt=""
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-4/5 lg:w-2/4 lg:p-2 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-md lg:text-xl font-bold">
                      {thisData?.name}
                    </h1>
                    <h1 className="text-md lg:text-xl text-yellow-500">
                      Per k/g ₹ {thisData?.price}
                    </h1>
                  </div>
                  <div className="">{thisData?.description}</div>
                  <div className="flex justify-between">
                    <h1 className="text-sm lg:text-lg">
                      Listed at : {thisData?.date}
                    </h1>
                    <h1 className="text-sm lg:text-lg">
                      Time: {thisData?.time}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="">Follow the Author</h1>
                    <div className="border border-green-500 p-1 lg:p-2 lg:h-20 *:flex *:w-full *:items-center *:justify-between  flex items-center">
                      <Link to="/dashboard/user">
                        <div className="flex items-center gap-1">
                          <img
                            className="w-13 h-13 lg:w-15 lg:h-15 rounded-full border border-green-500"
                            src=""
                            alt=""
                          />
                          <h1 className="text-sm lg:text-xl">Author name</h1>
                        </div>
                        <i className="bi text-2xl bi-arrow-right-circle"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="hidden border w-1/4 *:h-screen lg:flex overflow-scroll no-scrollbar bg-slate-950">
          <HomePrice />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
