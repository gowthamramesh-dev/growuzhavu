import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Dashboard from "./Dashboard.tsx";
import Login from "./Login.tsx";

const Index = () => (
  <>
    <div className="flex flex-row h-dvh w-full">
      <div
        id="nav"
        className="w-1/4 lg:w-2/12 h-dvh fixed top-0 left-0 z-10 bottom-0 ease-in-out"
      >
        <Navbar />
      </div>
      <div id="maine" className="lg:w-10/12 w-3/4 ml-auto">
        <div className="sticky z-10 top-0 h-1/12 ">
          <NavbarTop />
        </div>
        <div className="h-dvh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  </>
);

export default Index;
