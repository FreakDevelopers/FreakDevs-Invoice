import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addInvoiceItems } from "../../features/invoice/invoiceSlice";

function ItemDetails() {
  const dispatch = useDispatch();
  const { invoiceItems, amountTotal, amountPaid, balanceDue } = useSelector(
    (state) => state.invoice
  );
  const [itemDescription, setItemDescription] = useState("");
  const [itemRate, setItemRate] = useState("");
  const [itemQuantity, setItemQuantity] = useState("1");
  const [itemAmount, setItemAmount] = useState("");
  // console.log(invoiceItems);

  const inputChangeHandler = (id, value) => {
    if (id === "description") {
      setItemDescription(value);
    } else if (id === "rate") {
      setItemRate(value);
      setItemAmount(value * itemQuantity);
    } else if (id === "quantity") {
      setItemQuantity(value);
      setItemAmount(itemRate * value);
    }
  };

  const addItemHandler = () => {
    const data = {
      description: itemDescription,
      rate: parseInt(itemRate),
      quantity: parseInt(itemQuantity),
      amount: itemAmount,
    };
    dispatch(addInvoiceItems(data));
    setItemDescription("");
    setItemRate("");
    setItemQuantity("1");
    setItemAmount("");
    toast.success("Item Added..!");
  };

  return (
    <>
      {/* <h6 className="font-bold">ITEM DETAILS:</h6> */}
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border">
            <tr>
              <th className="py-3 px-3 text-center">#</th>
              <th className="py-3 px-3">Description</th>
              <th className="py-3 text-center">Rate</th>
              <th className="py-3 text-center">Quantity</th>
              <th className="py-3 text-center">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 border-y divide-y-2">
            {invoiceItems.length > 0 ? (
              invoiceItems
                .slice()
                .reverse()
                .map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-4 text-center whitespace-nowrap">
                      {idx + 1}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      {item.description}
                    </td>
                    <td className="py-4 text-center whitespace-nowrap">
                      ₹{item.rate}
                    </td>
                    <td className="py-4 text-center whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="py-4 text-center whitespace-nowrap">
                      ₹{item.amount}
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-lg font-bold text-center">
                  <p>Please Add Items</p>
                </td>
              </tr>
            )}
            <tr>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-left">TOTAL</td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center">₹{amountTotal}</td>
            </tr>
            <tr>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-left">BALANCE PAID</td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center">₹{amountPaid}</td>
            </tr>
            <tr>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-left">BALANCE DUE</td>
              <td className="px-0 py-2 text-center whitespace-nowrap"></td>
              <td className="px-0 py-2 text-center">₹{balanceDue}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Item Details Inputs */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-x-4">
        <div className="">
          <label htmlFor="Description" className="block py-2 text-gray-600">
            Item
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="Description"
            placeholder="Description"
            onChange={(e) => {
              inputChangeHandler("description", e.target.value);
            }}
            value={itemDescription}
          />
        </div>
        <div className="">
          <label htmlFor="Rate" className="block py-2 text-gray-600">
            Rate
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="Rate"
            placeholder="Rate"
            min={0}
            onChange={(e) => {
              inputChangeHandler("rate", e.target.value);
            }}
            value={itemRate}
          />
        </div>
        <div className="">
          <label htmlFor="Quantity" className="block py-2 text-gray-600">
            Quantity
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="Quantity"
            placeholder="Quantity"
            min={0}
            onChange={(e) => {
              inputChangeHandler("quantity", e.target.value);
            }}
            onBlur={
              /^0+$/g.test(itemQuantity) ? setItemQuantity("1") : undefined
            }
            value={itemQuantity}
          />
        </div>
        <div className="">
          <label htmlFor="Amount" className="block py-2 text-gray-600">
            Amount
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="Amount"
            placeholder="Amount"
            readOnly
            value={itemAmount}
          />
        </div>
      </div>

      {/* Add Item Button */}
      <div className="">
        <button
          type="button"
          className="mt-4 px-4 py-2 border text-white bg-slate-800 rounded-lg duration-150 hover:bg-slate-700 active:bg-indigo-200"
          onClick={addItemHandler}
        >
          Add Item
        </button>
      </div>
    </>
  );
}

export default ItemDetails;
