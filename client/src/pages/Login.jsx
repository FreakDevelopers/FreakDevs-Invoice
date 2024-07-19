import React, { useState } from "react";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../features/auth/authSlice";
import { SERVER_URL } from "../data/constants";

function Login() {
  const dispatch = useDispatch();
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "username") {
      setUserame(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    // const user = ;
    const response = await axios
      .post(`${SERVER_URL}/login`, {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch(setToken(res.data.data.token));
        localStorage.setItem("user", res.data.data.admin.username);
        dispatch(setUser(res.data.data.admin.username));
        toast.success(res?.data?.message);
      })
      .catch((err) => {
        toast.error("Something Went Wrong..!");
      });
  };

  return (
    <main className="w-full flex flex-col items-center justify-center py-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img src={logo} width={100} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 font-bold text-3xl">Sign-in</h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              onChange={(e) => inputChangeHandler("username", e.target.value)}
              value={username}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              onChange={(e) => inputChangeHandler("password", e.target.value)}
              value={password}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            onClick={loginHandler}
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Sign In
          </button>
          <div className="text-center">
            <Link to="/Reset-Password" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
