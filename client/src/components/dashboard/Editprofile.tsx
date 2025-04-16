// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";

import { useState } from "react";

const Editprofile = () => {
  // const { id } = useParams();
  const mobile_otp = () => {
    const element = document.getElementById("otp-enter");
    element?.classList.toggle("hidden");
  };
  const otpEnterElement = document.getElementById("otp-enter");

  const [data, setData] = useState({
    picture: "",
    name: "",
    gender: "",
    mobile: "",
    oldPass: "",
    newPass: "",
    address: "",
    description: "",
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(function (prevData) {
          return {
            ...prevData,
            picture: reader.result,
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   axios
  //     .post(`http://localhost:5000/api/${id}/editProfile`, data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };
  return (
    <>
      <div className="flex text-black dark:text-white flex-col gap-5">
        <h1 className="text-3xl">Edit Profile</h1>
        <form
          className="flex flex-col gap-2.5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="">Photo</label>
          <div className="flex gap-5 flex-col">
            <img
              className="w-44 h-50 border object-cover  border-green-500"
              id="pro-ph"
              src={data.picture}
              alt=""
            />
            <input
              className="file:cursor-pointer w-fit h-fit bg-slate-500 p-2 file:px-2 file:text-white file:bg-yellow-500 rounded-xs file:rounded "
              type="file"
              name=""
              onChange={handleFileChange}
              id="hello"
            />
          </div>
          <label className="text-md">Name</label>
          <input
            className="bg-slate-500 text-black dark:text-white w-xs h-10 rounded outline-0 p-2"
            placeholder="Enter Name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleInputChange}
          />
          <label className="text-md">Gender</label>
          <select
            className="bg-slate-500 w-xs h-10 rounded text-black dark:text-white outline-0 p-2"
            name="gender"
            id="profilePhoto"
            value={data.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <label className="text-md">Number</label>
          <div className="flex flex-col text-black dark:text-white gap-5">
            <input
              className="bg-slate-500 w-xs h-10 rounded  outline-0 p-2"
              placeholder="Enter Number"
              value={data.mobile}
              name="mobile"
              type="number"
              onChange={handleInputChange}
            />
            <input
              id="otp-enter"
              className="hidden bg-slate-500 w-40 h-10 rounded  outline-0 p-2"
              placeholder="Enter OTP"
              type="number"
            />
            <button
              className="bg-yellow-500 text-white w-fit h-fit text-md py-1 px-2.5 rounded-xs"
              type="button"
              onClick={mobile_otp}
            >
              {otpEnterElement?.classList.toggle("hidden")
                ? "Send OTP"
                : "Enter OTP"}
            </button>
          </div>
          <label className="text-md">Password</label>
          <div className="flex flex-col lg:flex-row text-black dark:text-white gap-5">
            <input
              className="bg-slate-500 w-xs h-10 rounded  outline-0 p-2"
              placeholder="Old Password"
              type="password"
              name="oldPass"
              value={data.oldPass}
              onChange={handleInputChange}
            />
            <input
              className="bg-slate-500 w-xs h-10 rounded  outline-0 p-2"
              placeholder="New Password"
              type="password"
              name="newPass"
              value={data.newPass}
              onChange={handleInputChange}
            />
          </div>
          <label className="text-md">Address</label>
          <div className="">
            <textarea
              className="bg-slate-500 text-black dark:text-white w-xs h-30 lg:w-2xl lg:h-20 rounded  outline-0 p-2 resize-none"
              id=""
              placeholder="Address: Door no, Street, Area, City, District."
              rows={2}
              name="address"
              value={data.address}
              onChange={handleInputChange}
            />
          </div>
          <label className="text-md">Description</label>
          <div className="">
            <textarea
              className="bg-slate-500 text-black dark:text-white w-xs h-30 lg:w-2xl  rounded  outline-0 p-2 resize-none"
              id=""
              placeholder="Description of the Dashboard."
              rows={2}
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-yellow-500 text-white w-fit h-fit text-md py-1 px-2.5 rounded-xs hover:cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Editprofile;
