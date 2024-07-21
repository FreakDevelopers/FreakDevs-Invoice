import React, { useEffect, useState } from "react";
import { SERVER_URL, states } from "../data/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAxiosInstance } from "../utility/axiosApiConfig";

function UpdateCustomer() {
const { pathname } = useLocation();
  const navigate = useNavigate();
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

  const fetchData = async () => {
    await getAxiosInstance()
      .get(`${SERVER_URL}/getCustomer/${pathname.substring(17)}`, {})
      .then((res) => {
        const data = res.data.data;
        // console.log(data);
        setCustomerName(res.data.data.userName);
        setCustomerEmail(data.userEmail);
        setCustomerMobile(data.userMobile);
        setCustomerAddress(data.userAddress);
        setCustomerCity(data.userCity);
        setCustomerState(data.userState);
        setCustomerZipCode(data.userZipCode);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const resetHandler = () => {
    navigate("/manage-invoices")
  };

  const updateCustomerHandler = async (event) => {
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
    // console.log(customerData);
    await getAxiosInstance()
      .put(`${SERVER_URL}/customer/${pathname.substring(17)}`, customerData)
      .then((req) => {
        navigate("/manage-invoices");
        toast.success("Customer Updated Successfully");
      })
      .catch((err) => {
        toast.error("Customer already exist with that email");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <form className="" onSubmit={updateCustomerHandler}>
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
              placeholder=" e.g. John Doe"
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

        <div className="col-12">
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
          <div className="col-md-6">
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

          <div className="">
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

          <div className="col-md-2">
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCustomer;
