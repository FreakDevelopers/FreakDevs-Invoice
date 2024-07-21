import React from "react";
import logo from "../../assets/logo.png";
import "./InvoicePreview.css";

function NewInvoice({ data, user }) {
  return (
    <div className="invoice_container">
      <div className="header">
        <p>INVOICE</p>
        <div className="h-line" />
      </div>
      <div className="section-1">
        <div className="company_logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="company_info">
          <p>
            <b>FreakDevs</b>
          </p>
          <p>Business Number 8237941681</p>
          <p>Banda</p>
          <p>Maharashtra</p>
          <p>416514</p>
          <p>7741941681</p>
          <p>thefreakdevelopers@gmail.com</p>
        </div>
        <div className="invoice_no">
          <b>INVOICE</b>
          <p>{data?.invoiceNumber}</p>
          {/* <p>INV0001</p> */}
          <b>DATE</b>
          <p>{data?.invoiceDate?.substring(0, 10)}</p>
          <b>BALANCE DUE</b>
          <p>INR ₹{data?.balanceDue}</p>
        </div>
      </div>
      <hr />
      <div className="section-2">
        <div className="customer_info">
          <p>BILL TO</p>
          <p>
            <b>{user?.userName}</b>
          </p>
          <p>{user?.userAddress}</p>
          <p>
            {user?.userCity +
              ", " +
              user?.userState +
              " - " +
              user?.userZipCode}
          </p>
          <p>{user?.userMobile}</p>
          <p>{user?.userEmail}</p>
        </div>
      </div>
      <hr />
      <div className="section-3">
        <div className="items_desk">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DESCRIPTION</th>
                <th>RATE</th>
                <th>QTY</th>
                <th>AMT</th>
              </tr>
            </thead>
            <tbody>
              {data?.invoiceItems?.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.description}</td>
                  <td>₹{item.rate}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="items_total">
          <div className="total">
            <div className="w-76">
              <p>TOTAL</p>
            </div>
            <div className="w-24">
              <p>₹{data?.amountTotal}</p>
            </div>
          </div>
          <div className="total">
            <div className="w-76">
              <p>BALANCE PAID</p>
            </div>
            <div className="w-24">
              <p>₹{data?.amountPaid}</p>
            </div>
          </div>
          <div className="total">
            <div className="w-76">
              <p>BALANCE DUE</p>
            </div>
            <div className="w-24">
              <p>₹{data?.balanceDue}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <b>NOTE</b>
        <p>{data?.note}</p>
      </div>
    </div>
  );
}

export default NewInvoice;
