import React, { useEffect, useState } from "react";
import { InvoiceNumber } from "invoice-number";
import "./InvoiceForm.css";
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
  const [invoiceDate, setInvoiceDate] = useState("");
  const [amountTotal, setAmountTotal] = useState("");
  const [amountPaid, setAmountPaid] = useState("0");
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
    setInvoiceDate("");
    setAmountTotal("");
    setAmountPaid("0");
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
      setInvoiceDate("");
      setAmountTotal("");
      setAmountPaid("0");
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
  }, [itemsData,balanceSum]);
  // console.log(balanceSum);

  return (
    <div className="container px-4">
      <h2 className="text-center my-4">Invoice Details</h2>
      <hr />
      <div className="col-md-12 mt-5">
        <h6>INVOICE NO:</h6>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2 col-sm-12 g-3">
              <label htmlFor="invoiceNumber" className="form-label">
                Invoice Number
              </label>
              <input
                id="invoiceNumber"
                type="text"
                className="form-control"
                value={invoiceNo}
                // readOnly
                disabled
              />
            </div>
            <div className="col-md-2 col-sm-12 g-3">
              <label htmlFor="invoiceDate" className="form-label">
                Invoice Date
              </label>
              <input
                id="invoiceDate"
                type="date"
                className="form-control"
                placeholder="Date"
                onChange={(e) => {
                  inputChangeHandler("date", e.target.value);
                }}
                value={invoiceDate}
              />
            </div>
            <div className="col-md-2 col-sm-12 g-3">
              <label htmlFor="amountPaid" className="form-label">
                Paid Amount
              </label>
              <div className="input-group">
                <input
                  id="amountPaid"
                  type="number"
                  min={0}
                  className="form-control"
                  placeholder="Amount Paid"
                  onChange={(e) => {
                    inputChangeHandler("amountPaid", e.target.value);
                  }}
                  value={amountPaid}
                />
                <span className="input-group-text">₹</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="row mt-2 g-3" onSubmit={submitHandler}>
        <h6>BILL TO:</h6>

        <div className="col-md-4 col-sm-12">
          <label htmlFor="inputName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder=" e.g. John Doe"
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

        <ItemDetails
          onSaveItemsData={saveItemsDataHandler}
          itemsData={itemsData}
          amountData={amountData}
        />

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
          <button type="submit" className="btn btn-dark me-3">
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-secondary px-3"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
