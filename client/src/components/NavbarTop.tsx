import { Link } from "react-router-dom";

const NavbarTop = () => {
  const handleNav = () => {
    const element = document.getElementById("nav");
    element?.classList.toggle("hidden");
  };
  const searchBar = () => {
    const element = document.getElementById("ser");
    element?.classList.toggle("hidden");
  };
  return (
    <>
      <div className="flex justify-center items-center p-2 h-full gap-5 lg:gap-0 bg-slate-950 border-b border-green-500">
        <div className="w-full h-full flex justify-between items-center ">
          <div
            className="lg:text-3xl flex justify-center items-center gap-1 "
            id="logo"
          >
            <i
              className="lg:hidden bi bi-list text-2xl"
              onClick={handleNav}
            ></i>
            GrowUzhavu
          </div>
          <div className="h-full w-full lg:w-2/4 flex lg:justify-center justify-end items-center ">
            <input
              className="h-2/3 hidden w-2/3 lg:flex lg:w-full px-1 border border-green-500 outline-0"
              type="text"
              name=""
              id="ser"
            />
            <i
              className="bi bi-search relative transform -translate-x-6 translate-y-1.5 lg:-translate-y-0 lg:-translate-x-6 h-2/3 hover:cursor-pointer text-green-500"
              onClick={searchBar}
            ></i>
          </div>
          <div className="hidden md:flex md:flex-row gap-3 items-center">
            <button
              className="rounded-xs text-sm lg:text-lg px-2 bg-yellow-500"
              type="button"
            >
              <Link to="/farmer-signup">Farmer</Link>
            </button>

            <button
              className="rounded-xs text-sm lg:text-lg px-2 bg-yellow-500"
              type="button"
            >
              <Link to="/buyer-signup">Buyer</Link>
            </button>
            <div className="border flex justify-center items-center lg:text-3xl border-green-500 w-6 h-6 lg:w-10 lg:h-10 rounded-full">
              <i className="bi bi-person-fill text-green-500 lg:text-2xl"></i>
            </div>
            {/* <div className="">User</div> */}
            <div>
              <i className="bi bi-toggle-on h-full w-full text-2xl lg:text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
