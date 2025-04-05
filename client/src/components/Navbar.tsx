import { Link } from "react-router-dom";

const Navbar = () => {
  const handleNav = () => {
    const element = document.getElementById("nav");
    element?.classList.toggle("hidden");
  };
  return (
    <>
      <div className="bg-slate-950 w-full h-dvh group">
        <div className="p-2 flex flex-col h-full justify-center gap-10">
          <div className="flex flex-col gap-2 lg:gap-1">
            <label className="lg:hidden lg:group-hover:flex lg:p-3">
              Marketplace
            </label>
            <ul className="*:border *:flex *:px-1 lg:*:justify-center lg:group-hover:*:justify-normal lg:group-hover:*:px-2 flex flex-col gap-5 group-hover:gap-3 **:gap-3 *:**:flex *:**:items-center  *:**:py-1 **:h-full *:hover:border-green-500 ">
              <li>
                <Link to="/dashboard/user-1" onClick={handleNav}>
                  <i className="bi bi-graph-up text-2xl"></i>
                  <label className="lg:hidden lg:group-hover:flex ">
                    Dashboard
                  </label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/">
                  <i className="bi bi-shop text-2xl"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    Market
                  </label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi bi-ui-checks-grid text-2xl"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    Explore
                  </label>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 lg:gap-1">
            <label className="lg:hidden lg:group-hover:flex lg:p-3">
              Account
            </label>
            <ul className=" *:border *:flex *:px-1 lg:*:justify-center lg:group-hover:*:justify-normal lg:group-hover:*:px-2 flex flex-col gap-5 group-hover:gap-3 **:gap-3 *:**:flex *:**:items-center  *:**:py-1  **:h-full *:hover:border-green-500">
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi text-2xl bi-list-check"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    Created
                  </label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi text-2xl bi-chat-left-dots"></i>
                  <label className="lg:hidden lg:group-hover:flex">Chats</label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi text-2xl bi-clock-history"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    History
                  </label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi text-2xl bi-hourglass-split"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    Progress
                  </label>
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/dashboard/user-1">
                  <i className="bi text-2xl bi-gear"></i>
                  <label className="lg:hidden lg:group-hover:flex">
                    Settings
                  </label>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
