import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Dashboard from "./Dashboard.tsx";
import Login from "./Login.tsx";

const Index = () => (
  <>
    <div className="flex flex-row h-dvh w-full">
      <div className="w-full">
        <div className="fixed z-10 top-0 h-1/12 w-full">
          <NavbarTop />
        </div>
        <div className="flex mt-auto">
          <div className="fixed mt-13 h-full hover:w-2/12 z-10 border-r group border-green-500 ">
            <Navbar />
          </div>
          <div className="w-full ml-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Index;
