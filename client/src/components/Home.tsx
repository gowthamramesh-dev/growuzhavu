const Home = () => {
  return (
    <>
      <div className=" w-full bg-neutral-950 p-3">
        <div className="p-3">
          <div className="">
            {/* Image */}
            <img className="w-full h-60  border-green-500" src="" alt="" />
          </div>
          <div className="p-5 flex justify-between">
            {/* Nav Buttons */}
            <ul className="flex gap-2.5 **:text-lg">
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">
                  For You
                </button>
              </li>
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">Top</button>
              </li>
              <li>
                <button className="px-3 bg-slate-950  rounded-xs ">
                  Latest
                </button>
              </li>
            </ul>
            <div className="text-lg flex gap-3">
              {/* sort variablity */}

              {/* Sort button */}
              <i className="bi bi-sort-up hover:cursor-pointer"></i>
              <i className="bi bi-sort-down-alt hover:cursor-pointer"></i>
            </div>
          </div>
          <div className="p-5">
            <div className="w-80 h-96 border">
              <div className="w-full h-full flex flex-col items-center bg-yellow-200 p-3">
                <img className="w-full h-4/6 border" src="" alt="" />
                <div className="w-full h-2/6 flex justify-start">
                  <div className="">hello</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
