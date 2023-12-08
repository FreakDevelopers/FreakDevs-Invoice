import React, { useEffect, useState } from "react";
import { InvoiceNumber } from "invoice-number";
import ItemDetails from "../ItemDetails/ItemDetails";

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

  const [invoiceNo, setInvoiceNo] = useState("INV0000");
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
  const [customerAddressLine1, setCustomerAddressLine1] = useState("");
  const [customerAddressLine2, setCustomerAddressLine2] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZip, setCustomerZip] = useState("");
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
    } else if (id === "date") {
      setInvoiceDate(value);
    } else if (id === "amountPaid") {
      setAmountPaid(value);
    }
  };

  const test = "INV0003";
  const invoiceNumber = (prevInvoiceNumber) => {
    if (!prevInvoiceNumber) {
      return InvoiceNumber.next("INV0000");
    }
    return InvoiceNumber.next(prevInvoiceNumber);
  };

  useEffect(() => {
    setInvoiceNo(invoiceNumber(test));
  }, [test]);

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
      cAddress1: customerAddressLine1,
      cAddress2: customerAddressLine2,
      cCity: customerCity,
      cState: customerState,
      cZip: customerZip,
      cNote: customerNote,
      cItem: [itemsData],
    };
    props.onSaveInvoiceData(customerData);
    setInvoiceDate(new Date().toISOString().substring(0, 10));
    setAmountTotal("");
    setAmountPaid("");
    setAmountDue("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerMobile("");
    setCustomerAddressLine1("");
    setCustomerAddressLine2("");
    setCustomerCity("");
    setCustomerState("");
    setCustomerZip("");
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
      setCustomerAddressLine1("");
      setCustomerAddressLine2("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZip("");
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
    <form className="" onSubmit={submitHandler}>
      <h2 className="text-center py-6 text-xl uppercase">Invoice Details</h2>
      <hr className="mb-4" />
      <h6>INVOICE NO:</h6>

      <div className="py-3">
        <label htmlFor="invoiceNumber" className="block py-2 text-gray-600">
          Invoice Number
        </label>
        <input
          id="invoiceNumber"
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          value={invoiceNo}
          // readOnly
          disabled
        />
      </div>
      <div className="py-2">
        <label htmlFor="invoiceDate" className="block py-2 text-gray-600">
          Invoice Date
        </label>
        <input
          id="invoiceDate"
          type="date"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          placeholder="Date"
          onChange={(e) => {
            inputChangeHandler("date", e.target.value);
          }}
          value={invoiceDate}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <label htmlFor="amountPaid" className="block py-2 text-gray-600">
          Paid Amount
        </label>
        <div className="input-group">
          <input
            id="amountPaid"
            type="number"
            min={0}
            className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            placeholder="Amount Paid"
            onChange={(e) => {
              inputChangeHandler("amountPaid", e.target.value);
            }}
            value={amountPaid}
          />
          <span className="input-group-text">₹</span>
        </div>
      </div>

      <h6>BILL TO:</h6>

      <div className="col-md-4 col-sm-12">
        <label htmlFor="inputName" className="block py-2 text-gray-600">
          Customer Name
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputName"
          placeholder=" e.g. John Doe"
          onChange={(e) => {
            inputChangeHandler("name", e.target.value);
          }}
          value={customerName}
        />
      </div>

      <div className="col-md-4 col-sm-12">
        <label htmlFor="inputEmail" className="block py-2 text-gray-600">
          Customer Email
        </label>
        <input
          type="email"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputEmail"
          placeholder="Enter Email Address"
          onChange={(e) => {
            inputChangeHandler("email", e.target.value);
          }}
          value={customerEmail}
        />
      </div>

      <div className="col-md-4 col-sm-12">
        <label htmlFor="inputMobile" className="block py-2 text-gray-600">
          Customer Mobile
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputMobile"
          placeholder="Enter Mobile Number"
          onChange={(e) => {
            inputChangeHandler("mobile", e.target.value);
          }}
          value={customerMobile}
        />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="block py-2 text-gray-600">
          Address Line 1
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputAddress"
          placeholder="Flat No/Apartment/Building Name"
          onChange={(e) => {
            inputChangeHandler("address1", e.target.value);
          }}
          value={customerAddressLine1}
        />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress2" className="block py-2 text-gray-600">
          Address Line 2
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputAddress2"
          placeholder="Area/Street/Locality"
          onChange={(e) => {
            inputChangeHandler("address2", e.target.value);
          }}
          value={customerAddressLine2}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputCity" className="block py-2 text-gray-600">
          City
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputCity"
          placeholder="Enter City"
          onChange={(e) => {
            inputChangeHandler("city", e.target.value);
          }}
          value={customerCity}
        />
      </div>

      <div className="col-md-4 col-sm-12">
        <label htmlFor="inputState" className="block py-2 text-gray-600">
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
        <label htmlFor="inputZip" className="block py-2 text-gray-600">
          Zip Code
        </label>
        <input
          type="text"
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          id="inputZip"
          placeholder="Enter Zip"
          onChange={(e) => {
            inputChangeHandler("zip", e.target.value);
          }}
          value={customerZip}
        />
      </div>

      {/* Item Deails Table */}
      <ItemDetails
        onSaveItemsData={saveItemsDataHandler}
        itemsData={itemsData}
        amountData={amountData}
      />

      {/* Note section */}
      <div className="my-4">
        <label htmlFor="floatingTextarea" className="block py-2 text-gray-600">
          Note:
        </label>
        <textarea
          className="w-full px-8 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
    // </div>
  );
}

export default InvoiceForm;
