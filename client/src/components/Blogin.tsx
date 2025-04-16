import { useState } from "react";

const Blogin = () => {
  const [signup, setSignup] = useState(true);
  return (
    <>
      <div className="w-full h-full">
        {signup ? (
          <div className="h-full py-4 flex *:dark:text-white *:text-black flex-col gap-2">
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
            <div className="h-full w-full flex *:text-white items-center justify-center py-5">
              <button className="px-10 py-1 bg-green-500" type="button">
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
              onClick={() => setSignup(true)}
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
        )}
      </div>
    </>
  );
};

export default Blogin;
