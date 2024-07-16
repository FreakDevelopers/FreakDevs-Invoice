import React from "react";
import {
  FaArrowRight,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaSearchDollar,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-4 my-2">
        Dashboard
      </h3>
      <div className="py-4 grid sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div className="p-4 rounded shadow-lg mx-auto sm:mx-0 w-64 sm:w-auto h-56 lg:h-60 text-center flex flex-col justify-evenly items-center border-t-4 border-t-indigo-100 hover:border-indigo-600 hover:scale-105 transition-all ease-linear duration-300">
          <FaUserPlus className="w-16 h-16 text-white bg-indigo-600 rounded-lg p-2" />
          <h1 className="font-bold uppercase text-lg">Create Customer</h1>
          <Link to="/create-customer" className="">
            <FaArrowRight className="inline-block w-6 h-6 p-1 text-xl text-white duration-150 font-medium bg-indigo-600 rounded-full outline-none border hover:bg-white hover:text-indigo-600 hover:border-indigo-600 hover:border-solid" />{" "}
            <span className="inline hover:text-blue-500">
              Click to Create Customer
            </span>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg mx-auto sm:mx-0 w-64 sm:w-auto h-56 lg:h-60 text-center flex flex-col justify-evenly items-center border-t-4 border-t-indigo-100 hover:border-indigo-600 hover:scale-105 transition-all ease-linear duration-300">
          <FaFileInvoiceDollar className="w-16 h-16 text-white bg-indigo-600 rounded-lg p-2" />
          <h1 className="font-bold uppercase text-lg">Create Invoice</h1>
          <Link to="/create-invoice" className="">
            <FaArrowRight className="inline-block w-6 h-6 p-1 text-xl text-white duration-150 font-medium bg-indigo-600 rounded-full outline-none border hover:bg-white hover:text-indigo-600 hover:border-indigo-600 hover:border-solid" />{" "}
            <span className="inline hover:text-blue-500">
              Click to Create Invoice
            </span>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg mx-auto sm:mx-0 w-64 sm:w-auto h-56 lg:h-60 text-center flex flex-col justify-evenly items-center border-t-4 border-t-indigo-100 hover:border-indigo-600 hover:scale-105 transition-all ease-linear duration-300">
          <FaSearchDollar className="w-16 h-16 text-white bg-indigo-600 rounded-lg p-2" />
          <h1 className="font-bold uppercase text-lg">Search Invoice</h1>
          <Link to="/All-invoices" className="">
            <FaArrowRight className="inline-block w-6 h-6 p-1 text-xl text-white duration-150 font-medium bg-indigo-600 rounded-full outline-none border hover:bg-white hover:text-indigo-600 hover:border-indigo-600 hover:border-solid" />{" "}
            <span className="inline hover:text-blue-500">Click to Search Invoice</span>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg mx-auto sm:mx-0 w-64 sm:w-auto h-56 lg:h-60 text-center flex flex-col justify-evenly items-center border-t-4 border-t-indigo-100 hover:border-indigo-600 hover:scale-105 transition-all ease-linear duration-300">
          <FaFileInvoice className="w-16 h-16 text-white bg-indigo-600 rounded-lg p-2" />
          <h1 className="font-bold uppercase text-lg">Manage Invoices</h1>
          <Link to="/manage-invoices" className="">
            <FaArrowRight className="inline-block w-6 h-6 p-1 text-xl text-white duration-150 font-medium bg-indigo-600 rounded-full outline-none border hover:bg-white hover:text-indigo-600 hover:border-indigo-600 hover:border-solid" />{" "}
            <span className="inline hover:text-blue-500">
              Click to Manage Invoices
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
