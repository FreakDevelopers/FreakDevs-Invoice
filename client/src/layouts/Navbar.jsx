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
          <Link className="navbar-brand" style={{ fontSize: "1.2rem" }} to="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block me-2"
            />
            FreakDevs-Invoice
          </Link>

          {localStorage.getItem("token") && (
            <button className="btn btn-outline-light me-2" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
