import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Dashboard from "./Dashboard.tsx";

const Index = () => (
  <>
    <div className="flex flex-row h-dvh w-full">
      <div className="w-2/12 h-dvh fixed top-0 left-0 z-10 bottom-0">
        <Navbar />
      </div>
      <div className="w-10/12 ml-auto">
        <div className="sticky top-0 h-1/12 z-10">
          <NavbarTop />
        </div>
        <div className="h-dvh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  </>
);

export default Index;
