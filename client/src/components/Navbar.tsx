import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userid = localStorage.getItem("userid");
  const handleNav = () => {
    const element = document.getElementById("nav");
    element?.classList.toggle("hidden");
  };
  const { t } = useTranslation();
  const { topics, items } = t("navbar");
  return (
    <>
      <div className=" bg-slate-950 w-full h-dvh lg:group">
        <div className="p-2 flex flex-col h-full justify-center gap-10">
          <div className="flex flex-col gap-2 lg:gap-1">
            <label className="lg:hidden text-white lg:group-hover:flex lg:p-3">
              {topics.one}
            </label>
            <ul className="*:border *:border-green-500 *:overflow-hidden  *:hover:bg-slate-800 *:dark:border-green-500 *:flex *:px-1 lg:*:justify-center  **:*:text-white lg:group-hover:*:justify-normal lg:group-hover:*:px-2 flex flex-col gap-5 lg:group-hover:gap-3 **:gap-1 lg:**:gap-3 *:**:flex *:**:items-center  *:**:py-1 **:h-full *:hover:border-green-500 ">
              <Link to={`/dashboard/${JSON.parse(userid)}`} onClick={handleNav}>
                <i className="bi bi-graph-up text-2xl"></i>
                <label className="lg:hidden  lg:group-hover:flex ">
                  {items.profile}
                </label>
              </Link>

              <Link onClick={handleNav} to="/">
                <i className="bi bi-shop text-2xl"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.market}
                </label>
              </Link>

              <Link onClick={handleNav} to="/dashboard/user-1">
                <i className="bi bi-ui-checks-grid text-2xl"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.explore}
                </label>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 lg:gap-1">
            <label className="lg:hidden text-white lg:group-hover:flex lg:p-3">
              {topics.two}
            </label>
            <ul className=" *:border *:flex *:overflow-hidden *:px-1  *:hover:bg-slate-800 *:border-green-500 *:dark:border-green-500 lg:*:justify-center  **:*:text-white lg:group-hover:*:justify-normal lg:group-hover:*:px-2 flex flex-col gap-5 lg:group-hover:gap-3 **:gap-1 lg:**:gap-3 *:**:flex *:**:items-center  *:**:py-1  **:h-full *:hover:border-green-500">
              <Link
                onClick={handleNav}
                to={`/${JSON.parse(userid)}/create-post`}
              >
                <i className="bi text-2xl bi-plus-square"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.create}
                </label>
              </Link>

              <Link onClick={handleNav} to={`/${JSON.parse(userid)}/created`}>
                <i className="bi text-2xl bi-list-check"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.created}
                </label>
              </Link>

              <Link onClick={handleNav} to="/user-1/chats">
                <i className="bi text-2xl bi-chat-left-dots"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.chats}
                </label>
              </Link>

              <Link onClick={handleNav} to="/user-1/history">
                <i className="bi text-2xl bi-clock-history"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.history}
                </label>
              </Link>

              <Link onClick={handleNav} to="/progress">
                <i className="bi text-2xl bi-hourglass-split"></i>
                <label className="lg:hidden lg:group-hover:flex">
                  {items.progress}
                </label>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
