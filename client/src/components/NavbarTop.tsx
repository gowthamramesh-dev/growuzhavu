import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-selector";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOKEN_KEY = "authToken";
const TOKEN_EXPIRY_KEY = "authTokenExpiry";

const NavbarTop = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

    if (token && expiry) {
      const now = new Date().getTime();
      if (now < Number(expiry)) {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
      }
    }
  }, []);

  const handleDark = () => {
    const element = document.getElementById("html-dark");
    element?.classList.toggle("dark");
    const element1 = document.getElementById("toggle-btn");

    if (element1?.classList.contains("bi-toggle-on")) {
      element1?.classList.remove("bi-toggle-on");
      element1?.classList.add("bi-toggle-off");
    } else {
      element1?.classList.remove("bi-toggle-off");
      element1?.classList.add("bi-toggle-on");
    }
  };
  const handleNav = () => {
    const element = document.getElementById("nav");
    element?.classList.toggle("hidden");
  };
  const searchBar = () => {
    const element = document.getElementById("ser");
    element?.classList.toggle("hidden");
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    setIsLoggedIn(false);
    navigate("/login");
    location.reload();
  };
  const { t } = useTranslation();
  const btn = t("buttons");

  return (
    <>
      <div className="flex justify-center items-center p-2 h-full gap-5 lg:gap-0 bg-slate-950 border-b border-green-500">
        <div className="w-full h-full flex justify-between items-center ">
          <div
            className="lg:text-3xl flex text-white justify-center items-center gap-1 "
            id="logo"
          >
            <i
              className="lg:hidden bi bi-list text-2xl"
              onClick={handleNav}
            ></i>
            {t("title")}
          </div>
          <div className="h-full w-full lg:w-2/4 flex lg:justify-center justify-end items-center ">
            <input
              className="h-2/3 hidden w-2/3 lg:flex lg:w-full text-white  px-1 border border-green-500 outline-0"
              type="text"
              name=""
              id="ser"
            />
            <i
              className="bi bi-search text-md border h-2/3 px-2.5 flex justify-center items-center hover:cursor-pointer text-green-500"
              onClick={searchBar}
            ></i>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {isLoggedIn ? (
              <div className="">
                <Link to="user-1/create-post">
                  <i className="bi text-2xl text-green-500 bi-plus-square"></i>
                </Link>
              </div>
            ) : null}
            <div className="hidden md:flex md:flex-row gap-3 items-center">
              <button
                className="rounded-xs text-sm lg:text-lg px-2 bg-yellow-500"
                type="button"
              >
                <Link to="/signup">{btn.signup}</Link>
              </button>
              {isLoggedIn ? (
                <div className="group">
                  <div className="border flex justify-center  items-center lg:text-3xl bg-white border-green-500 w-6 h-6 lg:w-10 lg:h-10 rounded-full">
                    <i className="bi bi-person-fill text-green-500 lg:text-2xl"></i>
                  </div>
                  <div className="hidden absolute group-hover:flex z-20 top-11 lg:top-13 right-6 border border-green-500 bg-slate-950 w-fit p-2">
                    <ul className="*:flex *:gap-2 *:hover:cursor-pointer lg:*:text-lg *:text-white *:text-sm">
                      <li onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right"></i>
                        {btn.logout}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}
              {/* <div className="">User</div> */}
              <div>
                <i
                  className="bi bi-toggle-on h-full w-full text-2xl text-white lg:text-3xl"
                  id="toggle-btn"
                  onClick={handleDark}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
