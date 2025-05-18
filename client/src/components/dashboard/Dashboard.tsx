import { useParams } from "react-router-dom";
import Editprofile from "./Editprofile";
import { useEffect, useState } from "react";
import Post from "./Post";
import History from "./History";
import { useTranslation } from "react-i18next";
import HomePrice from "../HomePrice";
import axios from "axios";

interface FarmerProfile {
  _id: string;
  author: string;
  picture: string;
  name: string;
  gender: "Male" | "Female" | "Others"; // restricts to known gender values
  mobile: string;
  address: string;
  description: string;
}

const Dashboard = () => {
  const { id } = useParams();
  const uid = id;

  const [owner, setOwner] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("home");
  const [follow, setFollow] = useState(true);
  const { t } = useTranslation();
  const btn = t("buttons");
  const [data, setData] = useState<FarmerProfile>([]);

  const storedId = localStorage.getItem("userid");
  const rid = storedId ? JSON.parse(storedId) : null;

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/farmers/farmerdata`, {
        id: rid,
      })
      .then((result) => {
        setData(result.data);
        if (uid == rid) {
          setOwner(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
      });
  }, [rid]);

  const renderComponent = () => {
    switch (currentComponent) {
      case "history-page":
        return <History />;
      case "post":
        return <Post />;
      case "editProfile":
        return <Editprofile />;
      default:
        return <Post />;
    }
  };
  const handleFollow = () => {
    axios
      .post("http://localhost:5000/api/farmers/followCount", {
        follower: rid,
        following: uid,
      })
      .then(() => {
        location.reload();
        setFollow(false);
      });
  };

  return (
    <>
      <div className="w-full h-full lg:p-3 flex gap-2">
        <div className=" h-full lg:w-4/5 w-full">
          <div className="flex flex-col gap-3">
            <div className="w-full bg-slate-950 p-1 lg:p-3 flex items-center lg:gap-3 h-28 lg:h-52 border border-green-500">
              <img
                className="w-1/5 border border-green-500 h-3/4 lg:h-full object-cover rounded outline-0"
                src={data.picture}
                alt="Profile pic"
              />
              <div className="w-4/5  flex justify-between p-2 h-full text-white  flex-wrap ">
                <div className="h-full w-4/5 flex  flex-col flex-wrap">
                  <div className="lg:w-4/5 w-7/12 h-full flex flex-col justify-around flex-wrap overflow-hidden lg:justify-between">
                    <div className="w-full">
                      <h1 className="text-md lg:text-4xl">{data.name}</h1>
                      <span className="text-xs text lg:text-lg">
                        {data.description}
                      </span>
                    </div>
                    <h1 className="lg:text-md text-xs">000 Followers </h1>
                  </div>
                </div>
                <div className="flex  flex-col text-white *:cursor-pointer gap-2 flex-wrap items-start h-full">
                  {owner ? (
                    <button
                      className="bg-yellow-500 px-1 flex lg:w-fit w-30  py-1 lg:px-2 rounded-xs lg:rounded text-xs lg:text-md"
                      type="button"
                      onClick={() => setCurrentComponent("editProfile")}
                    >
                      <i className="bi bi-pencil-square"></i> {btn.editprofile}
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 *:px-0.5 py-1 *:lg:px-2 rounded-xs lg:rounded text-xs lg:text-md *:flex *:gap-2"
                      type="button"
                      onClick={() => setFollow(!follow)}
                    >
                      {follow ? (
                        <div onClick={handleFollow} className="">
                          <i className="bi bi-person-plus-fill"></i>{" "}
                          {btn.follow}
                        </div>
                      ) : (
                        <div className="">
                          <i className="bi bi-person-check-fill"></i>
                          {btn.following}
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className=" h-dvh flex flex-col p-3 gap-5">
              <div className="flex gap-3 *:bg-yellow-500 *:rounded-xs *:cursor-pointer  *:px-2 *:text-md">
                <button onClick={() => setCurrentComponent("post-page")}>
                  {btn.post}
                </button>
                <button onClick={() => setCurrentComponent("history-page")}>
                  {btn.history}
                </button>
              </div>
              <div className="w-full">{renderComponent()}</div>
            </div>
          </div>
        </div>
        <div className="hidden  text-white bg-slate-950 lg:flex border border-green-500 w-1/5 h-screen overflow-scroll no-scrollbar">
          <HomePrice />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
