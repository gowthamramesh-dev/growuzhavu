import { useParams } from "react-router-dom";
import Editprofile from "./Editprofile";
import { useState } from "react";

const Dashboard = () => {
  const { id } = useParams();
  const [currentComponent, setCurrentComponent] = useState("home");

  const renderComponent = () => {
    switch (currentComponent) {
      case "editProfile":
        return <Editprofile />;
    }
  };
  return (
    <>
      <div className="w-full h-dvh lg:p-3 flex gap-2">
        <div className=" h-full w-4/5">
          <div className="flex flex-col gap-3">
            <div className="w-full p-3 flex gap-3 h-52 border border-green-500">
              <img
                className="w-1/5 border border-green-500 h-full rounded outline-0"
                src=""
                alt="hello"
              />
              <div className="w-4/5 flex justify-between p-2 h-full  flex-wrap ">
                <div className="h-full flex flex-col flex-wrap">
                  <div className="w-4/5 h-full flex flex-col justify-between">
                    <div className="">
                      <h1 className="text-4xl">{id}</h1>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates repellat harum quaerat voluptatum veritatis
                        animi ipsam debitis. Modi earum nemo vel! Id, explicabo.
                        Totam deleniti reprehenderit dolores eligendi inventore
                        eos?
                      </span>
                    </div>
                    <h1 className="text-md">000 Followers </h1>
                  </div>
                  <div className="flex flex-col gap-2 flex-wrap items-start h-full">
                    <button
                      className="bg-yellow-500 px-2 rounded text-lg"
                      type="button"
                      onClick={() => setCurrentComponent("editProfile")}
                    >
                      <i className="bi bi-pencil-square"></i> Edit Profile
                    </button>
                    <button
                      className="bg-yellow-500 px-2 rounded text-lg"
                      type="button"
                    >
                      <i className="bi bi-person-plus-fill"></i> Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-dvh flex flex-col p-3 gap-5">
              <div className="flex gap-3 *:border *:px-2 *:text-md">
                <button onClick={() => setCurrentComponent("home")}>
                  Posts
                </button>
                <button onClick={() => setCurrentComponent("about")}>
                  History
                </button>
              </div>
              <div className="">{renderComponent()}</div>
            </div>
          </div>
        </div>
        <div className="border border-green-500 w-1/5 ">hello</div>
      </div>
    </>
  );
};

export default Dashboard;
