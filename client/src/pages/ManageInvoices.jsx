import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageInvoices() {
  const [customers, setCustomers] = useState([]);
  const fetchData = async () => {
    await axios
      .get("http://127.0.0.1:8000/getAllCustomers", {})
      .then((res) => {
        const tableData = res.data.data;
        setCustomers(tableData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Manage Customers
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <Link
            to="/create-customer"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Customer
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Mobile</th>
              <th className="py-3 text-center">Invoices</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {customers?.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.userEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.userMobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.userInvoices?.length}
                </td>
                <td className="text-center space-x-3 px-6 whitespace-nowrap">
                  <Link
                    to="/manage-invoices"
                    className="py-2 px-3 border font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-md"
                  >
                    View Invoices
                  </Link>
                  <Link
                    to={`/update-customer/${item?._id}`}
                    className="py-2 leading-none border px-3 font-medium text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-md"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageInvoices;
