import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-950 w-full h-dvh group">
        <div className="p-2 flex flex-col h-full justify-center gap-10">
          <div className="pt-2">
            <label className="hidden group-hover:flex p-3 ">Marketplace</label>
            <ul className=" *:border *:flex *:px-1 *:justify-center group-hover:*:justify-normal group-hover:*:px-2 flex flex-col gap-5 group-hover:gap-3 *:gap-3 *:items-center **:h-full *:hover:border-green-500 ">
              <li>
                <i className="bi bi-graph-up text-2xl"></i>
                <label className="hidden group-hover:flex">
                  <Link to="/dashboard/user-1">Dashboard</Link>
                </label>
              </li>
              <li>
                <i className="bi bi-shop text-2xl"></i>
                <label className="hidden group-hover:flex">Market</label>
              </li>
              <li>
                <i className="bi bi-ui-checks-grid text-2xl"></i>
                <label className="hidden group-hover:flex">Explore</label>
              </li>
            </ul>
          </div>
          <div className="">
            <label className="hidden group-hover:flex p-3">Account</label>
            <ul className=" *:border *:flex *:px-1 *:justify-center group-hover:*:justify-normal group-hover:*:px-2 flex flex-col gap-5 group-hover:gap-3 *:gap-3 *:items-center **:h-full *:hover:border-green-500">
              <li>
                <i className="bi text-2xl bi-list-check"></i>
                <label className="hidden group-hover:flex">Created</label>
              </li>
              <li>
                <i className="bi text-2xl bi-chat-left-dots"></i>
                <label className="hidden group-hover:flex">Chats</label>
              </li>
              <li>
                <i className="bi text-2xl bi-clock-history"></i>
                <label className="hidden group-hover:flex">History</label>
              </li>
              <li>
                <i className="bi text-2xl bi-hourglass-split"></i>
                <label className="hidden group-hover:flex">Progress</label>
              </li>
              <li>
                <i className="bi text-2xl bi-gear"></i>
                <label className="hidden group-hover:flex">Settings</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
