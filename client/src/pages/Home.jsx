import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mt-4 m-2">
        Dashboard
      </h3>
      <div className="py-4 grid sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded shadow-lg w-full h-56 md:h-60 md:w-60 text-center flex flex-col justify-evenly items-center border hover:border-blue-500">
          <h1 className="font-bold uppercase text-lg">Create Invoice</h1>
          <Link
            to="javascript:void(0)"
            className="inline-block p-4 text-xl text-white duration-150 font-medium bg-slate-900 rounded-full outline-none border hover:bg-white hover:text-slate-900 hover:border-slate-900 hover:border-solid active:bg-slate-700 active:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg w-full h-56 md:h-60 md:w-60 text-center flex flex-col justify-evenly items-center border hover:border-blue-500">
          <h1 className="font-bold uppercase text-lg">Create Invoice</h1>
          <Link
            to="javascript:void(0)"
            className="inline-block p-4 text-xl text-white duration-150 font-medium bg-slate-900 rounded-full outline-none border hover:bg-white hover:text-slate-900 hover:border-slate-900 hover:border-solid active:bg-slate-700 active:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg w-full h-56 md:h-60 md:w-60 text-center flex flex-col justify-evenly items-center border hover:border-blue-500">
          <h1 className="font-bold uppercase text-lg">Create Invoice</h1>
          <Link
            to="javascript:void(0)"
            className="inline-block p-4 text-xl text-white duration-150 font-medium bg-slate-900 rounded-full outline-none border hover:bg-white hover:text-slate-900 hover:border-slate-900 hover:border-solid active:bg-slate-700 active:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 rounded shadow-lg w-full h-56 md:h-60 md:w-60 text-center flex flex-col justify-evenly items-center border hover:border-blue-500">
          <h1 className="font-bold uppercase text-lg">Create Invoice</h1>
          <Link
            to="javascript:void(0)"
            className="inline-block p-4 text-xl text-white duration-150 font-medium bg-slate-900 rounded-full outline-none border hover:bg-white hover:text-slate-900 hover:border-slate-900 hover:border-solid active:bg-slate-700 active:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
