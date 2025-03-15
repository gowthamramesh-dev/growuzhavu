import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";

const Index = () => (
  <>
    <div className="flex flex-row h-dvh w-full">
      <div className="w-2/12 ">
        <Navbar />
      </div>
      <div className="w-10/12">
        <div className="sticky top-0 h-1/12 z-10">
          <NavbarTop />
        </div>
        <div className="">
          <Home />
        </div>
      </div>
    </div>
  </>
);

export default Index;
