import React, { useState } from "react";
import { SERVER_URL, states } from "../data/constants";
import toast from "react-hot-toast";
import { getAxiosInstance } from "../utility/axiosApiConfig";

function CreateCustomer() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZipCode, setCustomerZipCode] = useState("");

  const inputChangeHandler = (id, value) => {
    if (id === "name") {
      setCustomerName(value);
    } else if (id === "email") {
      setCustomerEmail(value);
    } else if (id === "mobile") {
      setCustomerMobile(value);
    } else if (id === "address1") {
      setCustomerAddress(value);
    } else if (id === "city") {
      setCustomerCity(value);
    } else if (id === "state") {
      setCustomerState(value);
    } else if (id === "zip") {
      setCustomerZipCode(value);
    }
  };

  const resetHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear form data?"
    );
    if (confirmed) {
      setCustomerName("");
      setCustomerEmail("");
      setCustomerMobile("");
      setCustomerAddress("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZipCode("");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const customerData = {
      userName: customerName,
      userEmail: customerEmail,
      userMobile: customerMobile,
      userAddress: customerAddress,
      userCity: customerCity,
      userState: customerState,
      userZipCode: customerZipCode,
    };
    console.log(customerData);
    await getAxiosInstance()
      .post(`${SERVER_URL}/createCustomer`, customerData)
      .then((req) => {
        setCustomerName("");
        setCustomerEmail("");
        setCustomerMobile("");
        setCustomerAddress("");
        setCustomerCity("");
        setCustomerState("");
        setCustomerZipCode("");
        toast.success("Customer Created Successfully");
      })
      .catch((err) => {
        toast.error("Customer already exist with that email");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <form className="" onSubmit={submitHandler}>
        <h2 className="text-center py-4 text-xl uppercase">Customer Details</h2>
        <hr className="mb-4" />
        <h6>BILL TO:</h6>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div className="">
            <label htmlFor="inputName" className="block py-2 text-gray-600">
              Customer Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputName"
              placeholder="e.g. John Doe"
              onChange={(e) => {
                inputChangeHandler("name", e.target.value);
              }}
              value={customerName}
            />
          </div>

          <div className="">
            <label htmlFor="inputEmail" className="block py-2 text-gray-600">
              Customer Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputEmail"
              placeholder="Enter Email Address"
              onChange={(e) => {
                inputChangeHandler("email", e.target.value);
              }}
              value={customerEmail}
            />
          </div>

          <div className="">
            <label htmlFor="inputMobile" className="block py-2 text-gray-600">
              Customer Mobile
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputMobile"
              placeholder="Enter Mobile Number"
              onChange={(e) => {
                inputChangeHandler("mobile", e.target.value);
              }}
              value={customerMobile}
            />
          </div>
        </div>

        <div>
          <label htmlFor="inputAddress" className="block py-2 text-gray-600">
            Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="inputAddress"
            placeholder="Flat No/Apartment/Building Name"
            onChange={(e) => {
              inputChangeHandler("address1", e.target.value);
            }}
            value={customerAddress}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div>
            <label htmlFor="inputCity" className="block py-2 text-gray-600">
              City
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputCity"
              placeholder="Enter City"
              onChange={(e) => {
                inputChangeHandler("city", e.target.value);
              }}
              value={customerCity}
            />
          </div>

          <div>
            <label htmlFor="inputState" className="block py-2 text-gray-600">
              State
            </label>
            <select
              id="inputState"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(e) => {
                inputChangeHandler("state", e.target.value);
              }}
              value={customerState}
            >
              <option>Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="inputZip" className="block py-2 text-gray-600">
              Zip Code
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputZip"
              placeholder="Enter Zip"
              onChange={(e) => {
                inputChangeHandler("zip", e.target.value);
              }}
              value={customerZipCode}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mt-4 md:mt-8 justify-end">
          <button
            type="reset"
            className="px-4 py-2 border text-white bg-red-500 rounded-lg duration-150 hover:bg-red-600 active:bg-indigo-200"
            onClick={resetHandler}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-4 md:ml-6 px-4 py-2 border text-white bg-indigo-500 rounded-lg duration-150 hover:bg-indigo-600 active:bg-indigo-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCustomer;
