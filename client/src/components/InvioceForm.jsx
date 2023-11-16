import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./InvoiceForm.css";

function InvoiceForm(props) {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerAddressLine1, setCustomerAddressLine1] = useState("");
  const [customerAddressLine2, setCustomerAddressLine2] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZip, setCustomerZip] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "name") {
      setCustomerName(value);
    } else if (id === "email") {
      setCustomerEmail(value);
    } else if (id === "mobile") {
      setCustomerMobile(value);
    } else if (id === "address1") {
      setCustomerAddressLine1(value);
    } else if (id === "address2") {
      setCustomerAddressLine2(value);
    } else if (id === "city") {
      setCustomerCity(value);
    } else if (id === "state") {
      setCustomerState(value);
    } else if (id === "zip") {
      setCustomerZip(value);
    } else if (id === "note") {
      setCustomerNote(value);
    }
  };

  const addItemHandler = () => {
    console.log("addItemHandler Clicked..");
    toast.success("Item Added..!");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const customerData = {
      cName: customerName,
      cEmail: customerEmail,
      cMobile: customerMobile,
      cAddress1: customerAddressLine1,
      cAddress2: customerAddressLine2,
      cCity: customerCity,
      cState: customerState,
      cZip: customerZip,
      cNote: customerNote,
    };
    props.onSaveInvoiceData(customerData);
    setCustomerName("");
    setCustomerEmail("");
    setCustomerMobile("");
    setCustomerAddressLine1("");
    setCustomerAddressLine2("");
    setCustomerCity("");
    setCustomerState("");
    setCustomerZip("");
    setCustomerNote("");
  };

  const resetHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear form data?"
    );
    if (confirmed) {
      setCustomerName("");
      setCustomerEmail("");
      setCustomerMobile("");
      setCustomerAddressLine1("");
      setCustomerAddressLine2("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZip("");
      setCustomerNote("");
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <form className="row mt-2 g-3" onSubmit={submitHandler}>
        <h6>BILL TO:</h6>

        <div className="col-md-4 col-sm-12 col-sm-12">
          <label htmlFor="inputName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Customer FullName"
            onChange={(e) => {
              inputChangeHandler("name", e.target.value);
            }}
            value={customerName}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            Customer Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter Email Address"
            onChange={(e) => {
              inputChangeHandler("email", e.target.value);
            }}
            value={customerEmail}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <label htmlFor="inputMobile" className="form-label">
            Customer Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMobile"
            placeholder="Enter Mobile Number"
            onChange={(e) => {
              inputChangeHandler("mobile", e.target.value);
            }}
            value={customerMobile}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address Line 1
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Flat No/Apartment/Building Name"
            onChange={(e) => {
              inputChangeHandler("address1", e.target.value);
            }}
            value={customerAddressLine1}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address Line 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Area/Street/Locality"
            onChange={(e) => {
              inputChangeHandler("address2", e.target.value);
            }}
            value={customerAddressLine2}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter City"
            onChange={(e) => {
              inputChangeHandler("city", e.target.value);
            }}
            value={customerCity}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => {
              inputChangeHandler("state", e.target.value);
            }}
            value={customerState}
          >
            <option>Select</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Enter Zip"
            onChange={(e) => {
              inputChangeHandler("zip", e.target.value);
            }}
            value={customerZip}
          />
        </div>

        {/* Item Details Table */}
        <div className="col-md-12 mt-5">
          <h6>ITEM DETAILS:</h6>
          <table className="my-table">
            <thead>
              <tr>
                <th scope="col" width="50%">
                  Description
                </th>
                <th scope="col" width="20%" style={{ textAlign: "center" }}>
                  Rate
                </th>
                <th scope="col" width="10%" style={{ textAlign: "center" }}>
                  Qty
                </th>
                <th scope="col" width="20%" style={{ textAlign: "center" }}>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FreakDevs Domain</td>
                <td align="center">₹4499</td>
                <td align="center">2</td>
                <td align="center">₹8985.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Item Total */}
        <div className="col-md-12 mt-4">
          <div className="row">
            <hr />
            <div className="col-4 border-dark border-bottom offset-5">
              <p className="mb-1">TOTAL</p>
            </div>
            <div className="col-3 border-dark border-bottom">
              <p className="text-end me-5 mb-1">₹2455.0</p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-4 border-dark border-bottom offset-5">
              <p className="mb-1">BALANCE DUE</p>
            </div>
            <div className="col-3 border-dark border-bottom">
              <p className="text-end me-5 mb-1">₹2455.0</p>
            </div>
          </div>
        </div>

        {/* Item Details Inputs */}
        <div className="col-md-12 text-center">
          <div className="row">
            <div className="col-6 g-3">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
              />
            </div>
            <div className="col-6 g-3">
              <input type="text" className="form-control" placeholder="Rate" />
            </div>
            <div className="col-6 g-3">
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="form-control"
                placeholder="Quantity"
              />
            </div>
            <div className="col-6 g-3">
              <input
                type="text"
                className="form-control"
                placeholder="Amount"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Add Item Button */}
        <div className="col-md-12 text-center">
          <button
            type="button"
            className="btn btn-outline-dark px-4 my-2"
            onClick={addItemHandler}
          >
            Add Items
          </button>
        </div>

        {/* Note section */}
        <div className="col-12">
          <label htmlFor="floatingTextarea" className="form-label">
            Note:
          </label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows={5}
            onChange={(e) => {
              inputChangeHandler("note", e.target.value);
            }}
            value={customerNote}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="col-12 mb-4">
          <button type="submit" className="btn btn-success me-3">
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-danger me-3 ps-3 pe-3"
            onClick={resetHandler}
          >
            Reset
          </button>
          <Link to="/invoice" className="btn btn-dark ps-4 pe-4">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
