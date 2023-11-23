import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  
  const logoutHandler = () => {
    localStorage.clear();
    toast.success("Logout Successful..!");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark non-printable">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-center me-2"
            />
            FreakDevs-Invoice
          </Link>

          {localStorage.getItem("token") && (
            <ul className="navbar-nav flex-row align-items-baseline">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/manage-invoices">
                  Manage Invoices
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <button
                  className="btn btn-outline-light"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
