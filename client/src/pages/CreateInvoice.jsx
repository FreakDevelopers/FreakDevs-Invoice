import React, { useEffect, useState } from "react";
import { InvoiceNumber } from "invoice-number";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import axios from "axios";

function CreateInvoice() {
  const [invoiceNo, setInvoiceNo] = useState("");
  // Add current date to the field instead of no value at all.
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [amountTotal, setAmountTotal] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [amountDue, setAmountDue] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [itemsData, setItemsData] = useState([]);

  const saveItemsDataHandler = (enteredItemData) => {
    setItemsData((prevItems) => {
      return [enteredItemData, ...prevItems];
    });
  };

  const inputChangeHandler = (id, value) => {
    if (id === "name") {
      setCustomerName(value);
    } else if (id === "email") {
      setCustomerEmail(value);
    } else if (id === "mobile") {
      setCustomerMobile(value);
    } else if (id === "note") {
      setCustomerNote(value);
    } else if (id === "date") {
      setInvoiceDate(value);
    } else if (id === "amountPaid") {
      setAmountPaid(value);
    }
  };

  const invoiceNumber = (prevInvoiceNumber) => {
    return InvoiceNumber.next(prevInvoiceNumber);
  };

  const fetchData = async () => {
    await axios
      .get("http://127.0.0.1:8000/getInvoiceNumber", {})
      .then((res) => {
        // console.log(res.data.data);
        setInvoiceNo(invoiceNumber(res?.data?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const customerData = {
      cInvoiceNumber: invoiceNo,
      cInvoiceDate: invoiceDate,
      cAmountTotal: amountTotal,
      cAmountPaid: parseInt(amountPaid),
      cAmountDue: amountDue,
      cName: customerName,
      cEmail: customerEmail,
      cMobile: customerMobile,
      cNote: customerNote,
      cItem: [itemsData],
    };
    console.log(customerData);
    setInvoiceDate(new Date().toISOString().substring(0, 10));
    setAmountTotal("");
    setAmountPaid("");
    setAmountDue("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerMobile("");
    setCustomerNote("");
    setItemsData([]);
  };

  const resetHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear form data?"
    );
    if (confirmed) {
      setInvoiceDate(new Date().toISOString().substring(0, 10));
      setAmountTotal("");
      setAmountPaid("");
      setAmountDue("");
      setCustomerName("");
      setCustomerEmail("");
      setCustomerMobile("");
      setCustomerNote("");
      setItemsData([]);
    }
  };

  const balanceSum = itemsData
    .map((i) => i.amount)
    .reduce((accumulator, current) => accumulator + current, 0);

  const amountData = {
    balanceTotal: balanceSum,
    balancePaid: amountPaid,
    balanceDue: balanceSum - amountPaid,
  };

  useEffect(() => {
    balanceSum && setAmountTotal(balanceSum);
    balanceSum && setAmountDue(balanceSum - amountPaid);
  }, [itemsData, balanceSum]);
  // console.log(balanceSum);

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
              value={invoiceNo}
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
              onChange={(e) => {
                inputChangeHandler("date", e.target.value);
              }}
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
                className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                placeholder="Amount Paid"
                onChange={(e) => {
                  inputChangeHandler("amountPaid", e.target.value);
                }}
                value={amountPaid}
              />
            </div>
          </div>
        </div>

        {/* <h6 className="mt-6">BILL TO:</h6> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div>
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

          <div>
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

          <div>
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

        {/* Item Deails Table */}
        <ItemDetails
          onSaveItemsData={saveItemsDataHandler}
          itemsData={itemsData}
          amountData={amountData}
        />

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
            onChange={(e) => {
              inputChangeHandler("note", e.target.value);
            }}
            value={customerNote}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="my-4">
          <button
            type="submit"
            className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
          >
            Submit
          </button>
          <button
            type="reset"
            className="ml-4 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateInvoice;
