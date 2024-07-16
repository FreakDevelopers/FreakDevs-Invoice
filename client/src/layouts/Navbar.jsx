import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../features/auth/authSlice";

function Navbar() {
  const [state, setState] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    localStorage.clear();
    sessionStorage.clear();
    dispatch(setToken(null));
    dispatch(setUser(null));
    toast.success("Logout Successful..!");
    navigate("/");
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Create invoice", path: "/create-invoice" },
    { title: "Users", path: "/users" },
    { title: "Invoices", path: "/invoice-preview" },
    { title: "Manage", path: "/manage-invoices" },
  ];
  return (
    <>
      <nav className="bg-white mb-auto border-b w-full md:static md:text-sm non-printable">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link
              to="/"
              onClick={() => setState(false)}
              className="flex justify-center items-center font-semibold text-xl gap-x-3"
            >
              <img src={logo} width={45} height={45} alt="FD logo" /> INVOICE
            </Link>
            <div className="md:hidden">
              {token && (
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    //
                    <FaBars className="h-6 w-6" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            {token && (
              <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-700 hover:text-indigo-600">
                    <Link
                      onClick={() => setState(!state)}
                      to={item.path}
                      className="block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                  <li>
                    <button
                      onClick={() => {
                        logoutHandler();
                        setState(!state);
                      }}
                      className="block w-[100%] py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Logout
                    </button>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
