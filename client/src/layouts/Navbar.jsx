import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark non-printable">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="45"
              height="45"
              className="d-inline-block align-text-center me-2"
            />
            INVOICE - FreakDevs
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
