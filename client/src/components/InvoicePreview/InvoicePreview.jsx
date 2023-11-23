import React from "react";
import logo from "../../assets/logo.png";
import "./InvoicePreview.css";


function NewInvoice() {
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
          <p>INV0003</p>
          {/* <p>INV0001</p> */}
          <b>DATE</b>
          <p>Dec 19, 2023</p>
          <b>BALANCE DUE</b>
          <p>INR ₹950.00</p>
        </div>
      </div>
      <hr />
      <div className="section-2">
        <div className="customer_info">
          <p>BILL TO</p>
          <p>
            <b>Amrut Gawade</b>
          </p>
          <p>Banda, Sawantwadi, Sindhudurg</p>
          <p>Maharashtra</p>
          <p>416514</p>
          <p>7741941681</p>
          <p>webdeveloper.amrut@gmail.com</p>
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
              <tr>
                <td>1</td>
                <td>Hosting</td>
                <td>₹500</td>
                <td>1</td>
                <td>₹500</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Domain</td>
                <td>₹1000</td>
                <td>1</td>
                <td>₹1000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Website</td>
                <td>15000</td>
                <td>1</td>
                <td>15000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="items_total">
          <div className="total">
            <div className="w-76">
              <p>TOTAL</p>
            </div>
            <div className="w-24">
              <p>₹950</p>
            </div>
          </div>
          <div className="total">
            <div className="w-76">
              <p>BALANCE PAID</p>
            </div>
            <div className="w-24">
              <p>₹2000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <b>NOTE</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          incidunt facere ullam enim voluptatum. Fugiat, perspiciatis quia.
          Dolorum, obcaecati adipisci.
        </p>
      </div>
      {/* <Link className="btn-custom non-printable" to={"/"}>
        Back
      </Link> */}
      <button
        type="button"
        className="btn-custom btn-red non-printable"
        id="print"
        onClick={window.print}
      >
        Print
      </button>
    </div>
  );
}

export default NewInvoice;
