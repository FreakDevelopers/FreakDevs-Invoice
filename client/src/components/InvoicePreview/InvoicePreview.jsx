import React from "react";
import logo from "../../assets/logo.png";

function NewInvoice({ data, user }) {
  return (
    <div id="invoice" className="p-8">
      <h1 className="mb-5 text-center text-[2em] leading-none">INVOICE</h1>
      <hr className="border-t-4 border-black leading-none" />

      <div className="outline-none border-b border-b-black/50 flex flex-wrap justify-between mx-8 py-6">
        <div className="flex gap-4">
          <img
            src={logo}
            className="self-start mt-1"
            alt="FreakDevs Logo"
            height={60}
            width={60}
          />
          <div className="text-xs tracking-wider leading-relaxed">
            <p className="text-lg font-bold">FreakDevs</p>
            <p>Business Number 8237941681</p>
            <p>Banda</p>
            <p>Maharashtra</p>
            <p>416514</p>
            <p>thefreakdevs@gmail.com</p>
          </div>
        </div>
        <div className="text-xs tracking-wider text-right flex flex-col justify-between">
          <div>
            <b>INVOICE</b>
            <p>{data?.invoiceNumber}</p>
          </div>
          <div>
            <b>DATE</b>
            <p>{data?.invoiceDate?.substring(0, 10)}</p>
          </div>
          <div>
            <b>BALANCE DUE</b>
            <p>₹{data?.balanceDue}</p>
          </div>
        </div>
      </div>

      <div className="mx-8 my-4 text-xs tracking-wider w-max">
        <p>BILL TO :</p>
        <b className="text-sm">{user?.userName}</b>
        <p>{user?.userAddress}</p>
        <p>
          {user?.userCity + ", " + user?.userState + " - " + user?.userZipCode}
        </p>
        <p>{user?.userMobile}</p>
        <p>{user?.userEmail}</p>
      </div>

      <div className="mx-8 flex flex-col">
        <table className="w-full text-xs tracking-wider">
          <thead className="text-center align-middle border-y border-y-black/50">
            <tr>
              <th className="px-2 py-3 align-middle w-[7%]">ID</th>
              <th className="px-2 py-3 align-middle w-[63%] text-left">
                DESCRIPTION
              </th>
              <th className="px-2 py-3 align-middle w-[10%]">RATE</th>
              <th className="px-2 py-3 align-middle w-[10%]">QUANTITY</th>
              <th className="px-2 py-3 align-middle w-[10%]">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="text-center align-middle divide-y-2 divide-dashed border-b border-b-black/50">
            {data?.invoiceItems?.map((item, idx) => (
              <tr key={idx}>
                <td className="px-2 py-3 align-middle w-[7%]">{idx + 1}</td>
                <td className="px-2 py-3 align-middle w-[63%] text-left">
                  {item.description}
                </td>
                <td className="px-2 py-3 align-middle w-[10%]">₹{item.rate}</td>
                <td className="px-2 py-3 align-middle w-[10%]">
                  {item.quantity}
                </td>
                <td className="px-2 py-3 align-middle w-[10%]">
                  ₹{item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[50%] self-end">
          <div className="flex justify-between items-center text-xs tracking-wider border-b border-b-black/30">
            <div className="w-[78%] text-left font-semibold py-2">
              <p>TOTAL</p>
            </div>
            <div className="w-[22%] text-center">
              <p>₹{data?.amountTotal}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs tracking-wider border-b border-b-black/30">
            <div className="w-[78%] text-left font-semibold py-2">
              <p>BALANCE PAID</p>
            </div>
            <div className="w-[22%] text-center">
              <p>₹{data?.amountPaid}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs tracking-wider border-b border-b-black/30">
            <div className="w-[78%] text-left font-semibold py-2">
              <p>BALANCE DUE</p>
            </div>
            <div className="w-[22%] text-center">
              <p>₹{data?.balanceDue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mx-8 text-xs tracking-wider leading-normal">
        <b>NOTE :</b>
        <p>{data?.note}</p>
      </div>
    </div>
  );
}

export default NewInvoice;
