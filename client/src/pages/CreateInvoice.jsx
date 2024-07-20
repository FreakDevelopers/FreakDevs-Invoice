import React, { useEffect, useState } from "react";
import { InvoiceNumber } from "invoice-number";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import { SERVER_URL } from "../data/constants";
import { getAxiosInstance } from "../utility/axiosApiConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmountPaid,
  setUser,
  setNote,
  setInvoiceDate,
  setInvoiceNumber,
  setInvoiceItems,
  setAmountTotal,
} from "../features/invoice/invoiceSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  setUserEmail,
  setUserId,
  setUserMobile,
  setUserName,
} from "../features/customer/customerSlice";

function CreateInvoice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [customers, setCustomers] = useState([]);
  const {
    invoiceNumber,
    invoiceDate,
    amountTotal,
    amountPaid,
    balanceDue,
    note,
    invoiceItems,
  } = useSelector((state) => state.invoice);
  const { _id, userEmail, userMobile } = useSelector((state) => state.customer);

  const fetchData = async () => {
    await getAxiosInstance()
      .get(`${SERVER_URL}/getInvoiceNumber`, {})
      .then((res) => {
        // console.log(res.data.data);
        dispatch(setInvoiceNumber(getInvoiceNumber(res?.data?.data)));
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch All Customers
    await getAxiosInstance()
      .get(`${SERVER_URL}/getAllCustomers`, {})
      .then((res) => {
        setCustomers(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInvoiceNumber = (prevInvoiceNumber) => {
    return InvoiceNumber.next(prevInvoiceNumber);
  };

  const setCustomerHandler = (item) => {
    setShowDropDown(false);
    setUserSearch(item.userName);
    dispatch(setUser(item._id));
    dispatch(setUserId(item._id));
    dispatch(setUserName(item.userName));
    dispatch(setUserEmail(item.userEmail));
    dispatch(setUserMobile(item.userMobile));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const customerData = {
      invoiceNumber,
      invoiceDate,
      amountTotal,
      amountPaid: parseInt(amountPaid),
      balanceDue,
      user: _id,
      note,
      invoiceItems,
    };
    await getAxiosInstance()
      .post(`${SERVER_URL}/createInvoice`, customerData)
      .then((res) => {
        dispatch(setInvoiceDate(new Date().toISOString().substring(0, 10)));
        dispatch(setAmountPaid(""));
        dispatch(setAmountTotal(""));
        dispatch(setUser(""));
        dispatch(setNote(""));
        dispatch(setInvoiceItems([]));
        setUserSearch("");
        dispatch(setUserId(""));
        dispatch(setUserName(""));
        dispatch(setUserEmail(""));
        dispatch(setUserMobile(""));
        toast.success("Invoice Created Successfully");
      })
      .catch((err) => {
        toast.error("Please Add Items");
      });
  };

  const resetHandler = () => {
    dispatch(setInvoiceDate(new Date().toISOString().substring(0, 10)));
    dispatch(setAmountPaid(""));
    dispatch(setUser(""));
    dispatch(setNote(""));
    dispatch(setInvoiceItems([]));
    setUserSearch("");
    dispatch(setUserId(""));
    dispatch(setUserName(""));
    dispatch(setUserEmail(""));
    dispatch(setUserMobile(""));
    navigate("/");
  };

  useEffect(() => {
    console.log("Called");
    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <form className="" onSubmit={submitHandler}>
        <h2 className="text-center py-6 text-xl uppercase">Invoice Details</h2>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div>
            <label htmlFor="invoiceNumber" className="block py-2 text-gray-600">
              Invoice Number
            </label>
            <input
              id="invoiceNumber"
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={invoiceNumber}
              // readOnly
              disabled
            />
          </div>
          <div>
            <label htmlFor="invoiceDate" className="block py-2 text-gray-600">
              Invoice Date
            </label>
            <input
              id="invoiceDate"
              type="date"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              placeholder="Date"
              onChange={(e) => dispatch(setInvoiceDate(e.target.value))}
              value={invoiceDate}
            />
          </div>
          <div>
            <label htmlFor="amountPaid" className="block py-2 text-gray-600">
              Paid Amount
            </label>
            <div className="input-group">
              <input
                id="amountPaid"
                type="number"
                min={0}
                required
                className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                placeholder="In Rupees"
                onChange={(e) => dispatch(setAmountPaid(e.target.value))}
                value={amountPaid}
              />
            </div>
          </div>
        </div>

        {/* <h6 className="mt-6">BILL TO:</h6> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div>
            <label className="block py-2 text-gray-600">Customer Name</label>
            <div className="relative z-10" id="dropdown-container">
              <input
                type="text"
                className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                required
                placeholder="e.g. John Doe"
                onFocus={() => setShowDropDown(true)}
                onChange={(e) => setUserSearch(e.target.value)}
                value={userSearch}
              />
              <div
                className={`${
                  showDropDown ? "block" : "hidden"
                } absolute w-full bg-white`}
              >
                {/* Use map function */}
                {userSearch.length > 1 &&
                  customers
                    ?.filter((item) => {
                      return userSearch === ""
                        ? item
                        : item.userEmail.toLowerCase().includes(userSearch) ||
                            item.userMobile.toString().includes(userSearch) ||
                            item.userName.includes(userSearch) ||
                            item.userName.toLowerCase().includes(userSearch);
                    })
                    .map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCustomerHandler(item)}
                        className="w-full px-3 py-2 mt-1 appearance-none bg-white hover:bg-indigo-100 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      >
                        <p className="text-s">{item.userName}</p>
                        <p className="text-xs font-thin">{item.userEmail}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="inputEmail" className="block py-2 text-gray-600">
              Customer Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputEmail"
              placeholder="e.g. john@example.com"
              disabled
              value={userEmail}
            />
          </div>

          <div>
            <label htmlFor="inputMobile" className="block py-2 text-gray-600">
              Customer Mobile
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              id="inputMobile"
              placeholder="e.g. 98XXXXXX10"
              disabled
              value={userMobile}
            />
          </div>
        </div>

        {/* Item Deails Table */}
        <ItemDetails />

        {/* Note section */}
        <div className="my-4">
          <label
            htmlFor="floatingTextarea"
            className="block py-2 text-gray-600"
          >
            Note:
          </label>
          <textarea
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows={5}
            onChange={(e) => dispatch(setNote(e.target.value))}
            value={note}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="my-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-500 border rounded-lg duration-150 hover:bg-indigo-600 active:bg-indigo-200"
          >
            Submit
          </button>
          <button
            type="reset"
            className="ml-4 px-4 py-2 text-indigo-600 bg-indigo-50 border rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
            onClick={resetHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateInvoice;
