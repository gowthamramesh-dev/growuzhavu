import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const TOKEN_KEY = "authToken";
const TOKEN_EXPIRY_KEY = "authTokenExpiry";

const Login = () => {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check token expiry on mount
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

    if (token && expiry) {
      const now = new Date().getTime();
      if (now < Number(expiry)) {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!data.email || !data.password) {
      alert("Email and Password are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/farmers/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("userinfo", res.data);

      const token = res.data.token;
      localStorage.setItem(TOKEN_KEY, token);
      const expiryTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());

      setIsLoggedIn(true);
      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  // If already logged in, redirect away from login page
  if (isLoggedIn) {
    location.reload();
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center">
        <div className="flex flex-col items-center p-5 border bg-slate-950 text-white dark:bg-transparent border-green-500 w-full lg:w-1/3 h-fit">
          <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
            <label className="text-2xl">Login</label>
            <form
              className="h-full w-full px-7 py-4 flex *:text-white flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-2/12 border border-green-500 outline-0 p-2 rounded"
                placeholder="Email Id"
              />
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
              <button
                type="button"
                className="hover:text-green-500 hover:underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                New here? Signup
              </button>
              <div className="h-full w-full flex *:text-white items-center justify-center py-5">
                <button
                  className="px-10 py-1 bg-green-500"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
