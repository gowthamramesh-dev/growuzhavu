import { useParams } from "react-router-dom";
import Editprofile from "./Editprofile";
import { useEffect, useState } from "react";
import Post from "./Post";
import History from "./History";
// import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import HomePrice from "../HomePrice";
import axios from "axios";

interface FarmerProfile {
  _id: string;
  author: string;
  picture: string;
  fullname: string;
  name: string;
  gender: "Male" | "Female" | "Others";
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
  const [data, setData] = useState<FarmerProfile | null>(null);

  const storedId = localStorage.getItem("userid");

  useEffect(() => {
    if (!storedId) return;
    axios
      .post("http://localhost:5000/api/farmers/farmerdata", {
        id: storedId,
      })
      .then((result) => {
        setData(result.data);
        console.log(result);
        if (!result.data.picture) {
          alert("Please complete your profile by adding a picture.");
        }
        if (uid === storedId) {
          setOwner(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch farmer data:", err);
      });
  }, [storedId, uid]);

  const renderComponent = () => {
    switch (currentComponent) {
      case "history-page":
        return <History />;
      case "post":
      case "post-page":
        return <Post />;
      case "editProfile":
        return <Editprofile />;
      default:
        return <Post />;
    }
  };

  const handleFollow = () => {
    if (!storedId || !uid) return;
    axios
      .post("http://localhost:5000/api/farmers/followCount", {
        follower: storedId,
        following: uid,
      })
      .then(() => {
        setFollow(false);
      })
      .catch((err) => console.error("Follow failed:", err));
  };

  if (!data)
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
      </div>
    );

  return (
    <div className="w-full h-full lg:p-3 flex gap-2">
      <div className="h-full lg:w-4/5 w-full">
        <div className="flex flex-col gap-3">
          <div className="w-full bg-slate-950 p-1 lg:p-3 flex items-center lg:gap-3 h-28 lg:h-52 border border-green-500">
            <img
              className="w-1/5 border border-green-500 h-3/4 lg:h-full object-cover rounded outline-0"
              src={data.picture}
              alt="Profile pic"
            />
            <div className="w-4/5 flex justify-between p-2 h-full text-white flex-wrap">
              <div className="h-full w-4/5 flex flex-col flex-wrap">
                <div className="lg:w-4/5 w-7/12 h-full flex flex-col justify-around flex-wrap overflow-hidden lg:justify-between">
                  <div className="w-full">
                    <h1 className="text-md lg:text-4xl">
                      {data.name || data.fullname}
                    </h1>
                    <span className="text-xs lg:text-lg">
                      {data.description}
                    </span>
                  </div>
                  <h1 className="lg:text-md text-xs">000 Followers</h1>
                </div>
              </div>
              <div className="flex flex-col text-white *:cursor-pointer gap-2 flex-wrap items-start h-full">
                {owner ? (
                  <button
                    className="bg-yellow-500 px-1 flex lg:w-fit w-30 py-1 lg:px-2 rounded-xs lg:rounded text-xs lg:text-md"
                    type="button"
                    onClick={() => setCurrentComponent("editProfile")}
                  >
                    <i className="bi bi-pencil-square"></i> {btn.editprofile}
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 *:px-0.5 py-1 *:lg:px-2 rounded-xs lg:rounded text-xs lg:text-md *:flex *:gap-2"
                    type="button"
                    onClick={handleFollow}
                  >
                    {follow ? (
                      <div>
                        <i className="bi bi-person-plus-fill"></i> {btn.follow}
                      </div>
                    ) : (
                      <div>
                        <i className="bi bi-person-check-fill"></i>{" "}
                        {btn.following}
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="h-dvh flex flex-col p-3 gap-5">
            <div className="flex gap-3 *:bg-yellow-500 *:rounded-xs *:cursor-pointer *:px-2 *:text-md">
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

      <div className="hidden text-white bg-slate-950 lg:flex border border-green-500 w-1/5 h-screen overflow-scroll no-scrollbar">
        <HomePrice />
      </div>
    </div>
  );
};

export default Dashboard;
