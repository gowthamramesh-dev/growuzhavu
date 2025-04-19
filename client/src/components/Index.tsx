import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Login from "./Login.tsx";
import PostDetail from "./PostDetail.tsx";
import PostCreation from "./PostCreation.tsx";
import History from "./History1.tsx";

const Index = () => (
  <>
    <div className="flex flex-row h-dvh w-full">
      <div className="w-full">
        <div className="fixed z-20 top-0 h-1/12 w-full">
          <NavbarTop />
        </div>
        <div className="flex mt-auto">
          <div
            id="nav"
            className="hidden w-2/5 z-10 lg:w-fit lg:flex fixed h-full lg:hover:w-2/12 border-r group border-green-500 "
          >
            <Navbar />
          </div>
          <div className="w-full m-2 lg:ml-14 mt-20 lg:mt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
              <Route path="/signup" element={<Login />} />
              <Route path="/:id/history" element={<History />} />
              <Route path="/:id/create-post" element={<PostCreation />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Index;
