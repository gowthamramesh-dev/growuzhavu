import NavbarTop from "./components/NavbarTop";
import Banner from "../public/Banner.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="fixed z-20 top-0 h-1/12 w-full">
          <NavbarTop />
        </div>
        <div className="relative w-full group">
          <img
            className="w-full h-dvh object-cover group-hover:opacity-70"
            src={Banner}
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-2xl lg:text-4xl text-white font-bold">
            A platform for Buy and Sell Commodities Between Farmer and Local
            Market.
            <Link
              to="/signup"
              className="font-normal text-md lg:text-2xl bg-yellow-500 hover:bg-yellow-600 px-2 py-0.5 flex items-center justify-center rounded-xs"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
