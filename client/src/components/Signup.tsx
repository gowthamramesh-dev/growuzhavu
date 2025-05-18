import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface UserData {
  username: string;
  fullname: string;
  email: string;
  usertype: string;
  number: string;
  password: string;
  confirmPassword: string;
}

const TOKEN_KEY = "authToken";
const TOKEN_EXPIRY_KEY = "authTokenExpiry";

const Signup = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    setIsLoggedIn(false);
  });
  const [data, setData] = useState<UserData>({
    username: "",
    fullname: "",
    email: "",
    usertype: "farmer",
    number: "",
    password: "",
    confirmPassword: "",
  });

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic empty check
    if (
      !data.username ||
      !data.fullname ||
      !data.email ||
      !data.usertype ||
      !data.number ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert("All fields are required!");
      return;
    }

    // Check passwords match
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/farmers/signup", {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        number: data.number,
        usertype: data.usertype,
        password: data.password,
      });

      console.log("Signup success", res.data);
      alert("Signup successful!");
    } catch (err: any) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center">
        <div className="flex flex-col items-center p-5 border bg-slate-950 text-white dark:bg-transparent border-green-500 w-full lg:w-1/3 h-fit">
          <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
            <label className="text-2xl">SignUp</label>
            <form
              className="h-full w-full px-7 py-4 flex *:text-white flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                placeholder="User Name"
              />
              <input
                type="text"
                name="fullname"
                value={data.fullname}
                onChange={handleChange}
                className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                placeholder="Full Name"
              />
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                placeholder="Email Id"
              />

              <select
                className="h-2/12 border border-green-500 outline-0 p-2 rounded *:rounded-none *:bg-slate-950 *:border"
                name="usertype"
                value={data.usertype}
                onChange={handleChange}
              >
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>

              <input
                type="text"
                className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                name="number"
                value={data.number}
                onChange={handleChange}
                maxLength={10}
                placeholder="Mobile Number"
              />

              {/* Password input with show/hide */}
              <div className="relative w-full h-2/12">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-full border border-green-500 outline-0 p-2 rounded pr-10"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2 right-2 text-green-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Confirm password input with show/hide */}
              <div className="relative w-full h-2/12">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full h-full border border-green-500 outline-0 p-2 rounded pr-10"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-2 right-2 text-green-500"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              <Link
                className="hover:text-green-500 hover:underline cursor-pointer"
                to="/login"
              >
                Already signup? Then Login
              </Link>

              <div className="h-full w-full flex *:text-white items-center justify-center py-5">
                <button
                  className="px-10 py-1 bg-green-500"
                  type="button"
                  onClick={handleSubmit}
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
