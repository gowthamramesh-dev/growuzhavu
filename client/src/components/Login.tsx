import { useState } from "react";
import Blogin from "./Blogin";

const Login = () => {
  const [signup, setSignup] = useState(true);
  const [farmer, setFarmer] = useState(true);

  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center">
        <div className="flex flex-col items-center p-5 border bg-slate-950 text-white dark:bg-transparent border-green-500 w-full lg:w-1/3 h-fit">
          <div className="flex items-center justify-around bg-gray-900 w-2/3 *:cursor-pointer *:w-full *:m-0.5 my-5 ">
            <button
              className="focus:bg-gray-600"
              type="button"
              onClick={() => setFarmer(true)}
            >
              <label className="text-2xl p-2 text-green-500">Farmer</label>
            </button>
            <button
              className="focus:bg-gray-600"
              type="button"
              onClick={() => setFarmer(false)}
            >
              <label className="text-2xl p-2 text-green-500">Buyer</label>
            </button>
          </div>

          <div className="w-full h-full p-2">
            {farmer ? (
              signup ? (
                <div className="h-full py-4 flex flex-col *:text-white gap-2">
                  <input
                    type="text"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="User Name"
                  />
                  <input
                    type="text"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Email Id"
                  />
                  <input
                    type="text"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Farmer Id"
                  />
                  <input
                    type="number"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    maxLength={10}
                    placeholder="Mobile Number"
                  />
                  <input
                    type="password"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Enter Password"
                  />
                  <input
                    type="password"
                    className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={() => setSignup(false)}
                    className="hover:text-green-500 hover:underline cursor-pointer"
                  >
                    already signup? then Login
                  </button>
                  <div className="h-full w-full flex items-center justify-center py-5">
                    <button
                      className="px-10 py-1 text-white bg-green-500"
                      type="button"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full py-4 flex *:dark:text-white *:text-black flex-col gap-2">
                  <input
                    type="text"
                    className="w-full h-1/2 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Username/Email/Mobile"
                  />
                  <input
                    type="password"
                    className="w-full h-1/2 border border-green-500 outline-0 p-2 rounded"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSignup(true);
                      alert("hiyou");
                    }}
                    className="hover:text-green-500 hover:underline cursor-pointer"
                  >
                    not signup? then Signup
                  </button>
                  <div className="h-full w-full flex items-center justify-center py-5">
                    <button
                      className="px-10 py-1 text-white bg-green-500"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
              )
            ) : (
              <Blogin />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
