// Login.js
import { useState, useEffect } from "react";
import Blogin from "./Blogin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register, reset } from "../components/features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [signupMode, setSignupMode] = useState(true); // true: signup, false: login
  const [farmer, setFarmer] = useState(true); // true: farmer, false: buyer

  const [formData, setFormData] = useState({
    uname: "",
    fname: "",
    email: "",
    number: "",
    password: "",
    rpassword: "",
  });

  const { uname, fname, email, number, password, rpassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e {
    e.preventDefault();

    if (signupMode) {
      if (!uname || !fname || !email || !number || !password || !rpassword) {
        toast.error("Please fill in all fields");
        return;
      }

      if (password !== rpassword) {
        toast.error("Passwords do not match");
        return;
      }

      const userData = { uname, fname, email, number, password };
      dispatch(register(userData));
    } else {
      if (!uname || !password) {
        toast.error("Please enter username and password");
        return;
      }

      const userData = { uname, password };
      dispatch(login(userData));
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <div className="flex flex-col items-center p-5 border bg-slate-950 text-white dark:bg-transparent border-green-500 w-full lg:w-1/3 h-fit">
        <div className="flex items-center justify-around bg-gray-900 w-2/3 *:cursor-pointer *:w-full *:m-0.5 my-5">
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
            signupMode ? (
              <form onSubmit={onSubmit}>
                <div className="h-full py-4 flex flex-col *:text-white gap-2">
                  <input type="text" name="uname" value={uname} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="User Name" />
                  <input type="text" name="fname" value={fname} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Full Name" />
                  <input type="email" name="email" value={email} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Email Id" />
                  <input type="text" name="number" value={number} maxLength={10} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Mobile Number" />
                  <input type="password" name="password" value={password} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Enter Password" />
                  <input type="password" name="rpassword" value={rpassword} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Confirm Password" />

                  <button type="button" onClick={() => setSignupMode(false)} className="hover:text-green-500 hover:underline cursor-pointer">
                    Already signed up? Then Login
                  </button>

                  <div className="flex justify-center py-5">
                    <button className="px-10 py-1 text-white bg-green-500" type="submit">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="h-full py-4 flex *:dark:text-white *:text-black flex-col gap-2">
                  <input type="text" name="uname" value={uname} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Username/Email/Mobile" />
                  <input type="password" name="password" value={password} onChange={onChange} className="w-full border border-green-500 outline-0 p-2 rounded" placeholder="Password" />
                  <button type="button" onClick={() => setSignupMode(true)} className="hover:text-green-500 hover:underline cursor-pointer">
                    Not signed up? Then Signup
                  </button>
                  <div className="flex justify-center py-5">
                    <button className="px-10 py-1 text-white bg-green-500" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            )
          ) : (
            <Blogin />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
