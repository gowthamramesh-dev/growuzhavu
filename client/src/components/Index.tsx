import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Signup from "./Signup.tsx";
import PostDetail from "./PostDetail.tsx";
import PostCreation from "./PostCreation.tsx";
import History from "./History1.tsx";
import Chats from "./Chats.tsx";
import Chatbot from "./Chatbot.tsx";
import Login from "./Blogin.tsx";
import { useEffect, useState } from "react";
import Post from "./dashboard/Post.tsx";
import Progress from "./Progress.tsx";


const TOKEN_KEY = "authToken";
const TOKEN_EXPIRY_KEY = "authTokenExpiry";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

    if (token && expiry && new Date().getTime() < Number(expiry)) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-dvh z-40 flex items-center justify-center text-white">
        <div
          className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>
    );
  }

  return (
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
            <div className="w-full m-2 lg:ml-14 mt-20 lg:mt-18">
            
              <Routes>
                <Route
                  path="/signup"
                  element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
                />
                <Route
                  path="/login"
                  element={isLoggedIn ? <Navigate to="/" /> : <Login />}
                />

                <Route path="/" element={<Home />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/:id/chats/" element={<Chats />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/dashboard/:id" element={<Dashboard />} />
                <Route path="/:id/created" element={<Post />} />
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/:id/history" element={<History />} />
                <Route path="/:id/create-post" element={<PostCreation />} />
                

              </Routes>
            </div>
            <Chatbot />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
