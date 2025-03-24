const NavbarTop = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2 h-full bg-slate-950">
        <div className="w-full h-full flex justify-between items-center">
          <div className="h-full w-2/4 flex justify-center items-center ">
            <input
              className="h-2/3 w-full px-1 border border-green-500 outline-0"
              type="text"
              name=""
              id=""
            />
            <i className="bi bi-search relative transform -translate-x-6 translate-y-0.5 h-2/3 hover:cursor-pointer text-green-500"></i>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <button className="rounded-xs px-2 bg-yellow-500" type="button">
              Login
            </button>

            <button className="rounded-xs px-2 bg-yellow-500" type="button">
              Sign Up
            </button>
            <div className="border flex justify-center items-center text-3xl border-green-500 w-10 h-10 rounded-full"></div>
            {/* <div className="">User</div> */}
            <div>
              <i className="bi bi-toggle-on h-full w-full text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
