const Editprofile = () => {
  const mobile_otp = () => {
    const element = document.getElementById("otp-enter");
    element?.classList.toggle("hidden");
  };
  const otpEnterElement = document.getElementById("otp-enter");
  return (
    <>
      <div className="bg-slate-950 flex flex-col gap-5">
        <h1 className="text-3xl">Edit Profile</h1>
        <form className="flex flex-col gap-2.5">
          <div className=""></div>
          <label className="text-md">Name</label>
          <input
            className="bg-slate-500 w-xs h-10 rounded text-white outline-0 p-2"
            placeholder="Enter Name"
            type="text"
          />
          <label className="text-md">Gender</label>
          <select
            className="bg-slate-500 w-xs h-10 rounded text-white outline-0 p-2"
            name=""
            id=""
          >
            <option value="">Male</option>
            <option value="">female</option>
            <option value="">Others</option>
          </select>
          <label className="text-md">Number</label>
          <div className="flex flex-col gap-5">
            <input
              className="bg-slate-500 w-xs h-10 rounded text-white outline-0 p-2"
              placeholder="Enter Number"
              type="number"
            />
            <input
              id="otp-enter"
              className="hidden bg-slate-500 w-40 h-10 rounded text-white outline-0 p-2"
              placeholder="Enter OTP"
              type="number"
            />
            <button
              className="bg-yellow-500 w-fit h-fit text-md py-1 px-2.5 rounded-xs"
              type="button"
              onClick={mobile_otp}
            >
              {otpEnterElement?.classList.contains("hidden")
                ? "Send OTP"
                : "Enter OTP"}
            </button>
          </div>
          <label className="text-md">Password</label>
          <div className="flex gap-5">
            <input
              className="bg-slate-500 w-xs h-10 rounded text-white outline-0 p-2"
              placeholder="Old Password"
              type="password"
            />
            <input
              className="bg-slate-500 w-xs h-10 rounded text-white outline-0 p-2"
              placeholder="New Password"
              type="password"
            />
          </div>
          <label className="text-md">Address</label>
          <div className="">
            <textarea
              className="bg-slate-500 w-2xl h-20 rounded text-white outline-0 p-2 resize-none"
              name=""
              id=""
              placeholder="Address: Door no, Street, Area, City, District."
              rows={2}
            />
          </div>
          <label className="text-md">Description</label>
          <div className="">
            <textarea
              className="bg-slate-500 w-2xl h-30 rounded text-white outline-0 p-2 resize-none"
              name=""
              id=""
              placeholder="Description of the Dashboard."
              rows={2}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Editprofile;
