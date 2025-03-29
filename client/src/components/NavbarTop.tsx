const NavbarTop = () => {
  const handleChange = () => {
    const element = document.getElementById("nav");
    if (element?.classList.contains("hidden")) {
      element.classList.remove("hidden");
      document.getElementById("maine")?.classList.remove("w-full");
      document.getElementById("items")?.classList.remove("grid-cols-3");
      document.getElementById("logo")?.classList.add("hidden");
    } else {
      element?.classList.add("hidden");
      document.getElementById("maine")?.classList.add("w-full");
      // document.getElementById("items")?.classList.add("grid-cols-3");
      document.getElementById("logo")?.classList.remove("hidden");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center p-2 h-full gap-2 lg:gap-0 bg-slate-950 border-b border-green-500">
        <button
          id="nav-btn"
          className="hover:cursor-pointer"
          type="button"
          onClick={handleChange}
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <div className="w-full h-full flex justify-between items-center">
          <div className="" id="logo">
            GrowUzhavu
          </div>
          <div className="h-full w-2/4 flex justify-center items-center ">
            <input
              className="h-2/3 w-full px-1 border border-green-500 outline-0"
              type="text"
              name=""
              id=""
            />
            <i className="bi bi-search relative transform -translate-x-6 h-2/3 hover:cursor-pointer text-green-500"></i>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <button
              className="rounded-xs text-sm lg:text-lg px-2 bg-yellow-500"
              type="button"
            >
              Login
            </button>

            <button
              className="rounded-xs text-sm lg:text-lg px-2 bg-yellow-500"
              type="button"
            >
              Sign Up
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
