import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getAxiosInstance } from "../../utility/axiosApiConfig";
import PaginationButtons from "../Utility/PaginationButtons";
import { SERVER_URL } from "../../data/constants";
import { Link, useLocation } from "react-router-dom";

function CustomerInvoices() {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const [tableItems, setTableItems] = useState([]);
  const [user, setUser] = useState({
    _id: "",
    userName: "",
    userEmail: "",
  });

  const fetchData = async () => {
    await getAxiosInstance()
      .get(`${SERVER_URL}/getCustomer/${pathname.substring(10)}`, {})
      .then((res) => {
        const data = res.data.data;
        setUser({
          _id: data._id,
          userName: data.userName,
          userEmail: data.userEmail,
        });
        setTableItems(data.userInvoices);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCustomers = function (page, limit) {
    let array = [];
    let j = 0;
    for (let i = (page - 1) * limit; i < page * limit && tableItems[i]; i++) {
      array.push(tableItems[i]);
      array[j].id = i + 1;
      j++;
    }
    return array;
  };
  useEffect(() => {
    let result = getCustomers(currentPage + 1, limit);
    setLoading(false);
    if (search != "") {
      let result1 = tableItems.filter((item) => {
        return search === ""
          ? item
          : item.invoiceNumber.includes(search) ||
              item.amountTotal.toString().includes(search);
      });
      setTotalPages(Math.ceil(result.length / limit));
      setInvoices(result1);
    } else {
      setInvoices(result);
      setTotalPages(Math.ceil(tableItems.length / limit));
    }
  }, [limit, currentPage, tableItems, search]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-full flex flex-wrap gap-y-4 justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            {user.userName}
          </h3>
          <span className="uppercase text-sm">
            Total Invoices : {tableItems.length}
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="w-96">
          <div className="flex justify-end gap-x-4">
            <div className="relative">
              <FaSearch className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3" />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
              />
            </div>
            <p className="self-center">Records</p>
            <select
              name="records"
              id="records"
              className="px-3 py-2 outline-none border bg-gray-50 rounded-md"
              onClick={(e) => setLimit(e.target.value)}
              defaultValue={limit}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[55vh]">
          <div className="animate-spin h-16 w-16 rounded-full border-4 border-r-transparent border-indigo-500"></div>
        </div>
      ) : (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr className="divide-x">
                <th className="py-3 px-6">Invoice Number</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Customer</th>
                <th className="py-3 px-6 text-center">Amount</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {invoices.map((item, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{idx + 1}</span>
                    {item.invoiceNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.invoiceDate
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                    {/* {item.invoiceDate} */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.userName}
                    <p className="text-sm"> {user.userEmail}</p>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    ₹{item.amountTotal}
                  </td>
                  <td className="text-center space-x-3 whitespace-nowrap">
                    <Link
                      to={`/customer/${user._id}/${item._id}`}
                      className="py-2 px-3 border font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-md"
                    >
                      Preview
                    </Link>
                    <button
                      onClick={() => history.back()}
                      className="py-2 leading-none border px-3 font-medium text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-md"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default CustomerInvoices;
