const Navbar = () => {
  return (
    <>
      <div className="px-5 h-full bg-slate-950 border-r border-r-green-500">
        <div className="h-full">
          <div className="border-b border-green-500 h-1/12 flex items-center">
            <h1 className="lg:text-3xl w-full flex justify-center">
              Grow Uzhavu
            </h1>
          </div>
          <div className=" flex justify-center items-center h-1/12 border-b border-green-500 ">
            <button
              type="button"
              className="bg-yellow-500 rounded-xs px-2 text-xl flex items-center nth-[1]:items-baseline justify-center gap-1"
            >
              Create
              <i className="bi bi-box-arrow-in-up-right text-xs "></i>
            </button>
          </div>
          <div className="h-9/12 border-b border-green-500 p-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="text-md text-green-500">Marketplace</h1>
              <ul className="text-lg flex flex-col px-1.5 gap-3 *:flex *:justify-start *:gap-1.5 *:items-center *:hover:cursor-pointer **:*:text-green-500 *:hover:text-green-500">
                <li>
                  <i className="bi bi-shop text-xs"></i>Market
                </li>
                <li>
                  <i className="bi bi-graph-up text-xs"></i>Dashboard
                </li>
                <li>
                  <i className="bi bi-ui-checks-grid text-xs"></i>Explore
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 justify-center overflow-hidden">
              <h1 className="text-green-500 text-md h-1/12 ">Account</h1>
              <ul className="no-scrollbar text-lg flex flex-col px-1.5 gap-3 *:flex *:justify-start *:gap-1.5 *:hover:cursor-pointer *:items-center **:*:text-green-500 *:hover:text-green-500 h-full overflow-y-scroll ">
                <li>
                  <i className="bi bi-shop text-xs"></i>Created
                </li>
                <li>
                  <i className="bi bi-graph-up text-xs"></i>History
                </li>
                <li>
                  <i className="bi bi-chat-left-dots text-xs"></i>Chats
                </li>
                <li>
                  <i className="bi bi-ui-checks-grid text-xs"></i>Progress
                </li>
                <li>
                  <i className="bi bi-gear text-xs"></i>Maintanance
                </li>
                <li>
                  <i className="bi bi-gear text-xs"></i>Comming Soon
                </li>
                <li>
                  <i className="bi bi-gear text-xs"></i>Settings
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm flex flex-col items-center justify-center h-1/12 ">
            <i className="bi bi-c-circle text-xs">&nbsp;2025</i>
            <a
              className="hover:text-green-500"
              href="https://github.com/gowthamramesh-dev/growuzhavu"
            >
              Created By SparkLight Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
