import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container px-4">
      <h2 className="my-4 text-center">Welcome, Amrut</h2>
      <hr />
      <div className="row my-4 justify-content-evenly align-items-center">
        <div
          className="col-10 col-sm-5 col-lg-3 col-xl-4 m-3 text-center bg-dark text-light card shadow ponter p-4"
          role="button"
        >
          <p className="fs-5">Create New Invoice</p>
          <Link
            className="btn btn-outline-light rounded-circle align-self-center"
            to="/create-invoice"
            style={{ height: "50px", width: "50px" }}
          >
            <span className="fs-4 text-center fw-bolder">+</span>
          </Link>
        </div>

        <div
          className="col-10 col-sm-5 col-lg-3 col-xl-4 m-3 text-center bg-dark text-light  card shadow ponter p-4"
          role="button"
        >
          <p className="fs-5">Manage All Invoices</p>
          <Link
            className="btn btn-outline-light rounded-circle align-self-center"
            to="/manage-invoices"
            style={{ height: "50px", width: "50px" }}
          >
            <span className="fs-4 fw-bolder">→</span>
          </Link>
        </div>

        <div
          className="col-10 col-sm-5 col-lg-3 col-xl-4 m-3 text-center bg-dark text-light  card shadow ponter p-4"
          role="button"
        >
          <p className="fs-5">Search Invoices</p>
          <Link
            className="btn btn-outline-light rounded-circle align-self-center"
            to="/invoice-preview"
            style={{ height: "50px", width: "50px" }}
          >
            <span className="fs-4 fw-bolder">→</span>
          </Link>
        </div>

        <div
          className="col-10 col-sm-5 col-lg-3 col-xl-4 m-3 text-center bg-dark text-light  card shadow ponter p-4"
          role="button"
        >
          <p className="fs-5">Update Existing Customer</p>
          <Link
            className="btn btn-outline-light rounded-circle align-self-center"
            to="/create-invoice"
            style={{ height: "50px", width: "50px" }}
          >
            <span className="fs-4 fw-bolder">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
