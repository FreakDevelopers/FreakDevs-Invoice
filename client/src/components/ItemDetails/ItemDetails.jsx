import React, { useState } from "react";
import toast from "react-hot-toast";

function ItemDetails(props) {
  const tableItems = [
    {
      name: "Solo learn app",
      date: "Oct 9, 2023",
      status: "Active",
      price: "$35.000",
      plan: "Monthly subscription",
    },
    {
      name: "Window wrapper",
      date: "Oct 12, 2023",
      status: "Active",
      price: "$12.000",
      plan: "Monthly subscription",
    },
    {
      name: "Unity loroin",
      date: "Oct 22, 2023",
      status: "Archived",
      price: "$20.000",
      plan: "Annually subscription",
    },
    {
      name: "Background remover",
      date: "Jan 5, 2023",
      status: "Active",
      price: "$5.000",
      plan: "Monthly subscription",
    },
    {
      name: "Colon tiger",
      date: "Jan 6, 2023",
      status: "Active",
      price: "$9.000",
      plan: "Annually subscription",
    },
  ];

  const [itemDescription, setItemDescription] = useState("");
  const [itemRate, setItemRate] = useState("");
  const [itemQuantity, setItemQuantity] = useState("1");
  const [itemAmount, setItemAmount] = useState("");

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
    const myitemsData = {
      description: itemDescription,
      rate: itemRate,
      quantity: itemQuantity,
      amount: itemAmount,
    };
    props.onSaveItemsData(myitemsData);
    setItemDescription("");
    setItemRate("");
    setItemQuantity("1");
    setItemAmount("");
    toast.success("Item Added..!");
  };

  // console.log(props.itemsData);
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
            {props.itemsData
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
              ))}
          </tbody>
        </table>
      </div>

      {/* Item Total */}
      <div className="col-md-12 mt-4">
        <div className="row">
          <div className="col-4 border-dark border-bottom offset-5">
            <p className="mb-1">TOTAL</p>
          </div>
          <div className="col-3 border-dark border-bottom">
            <p className="text-end me-5 mb-1">
              ₹{props.amountData.balanceTotal}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-4 border-dark border-bottom offset-5">
            <p className="mb-1">BALANCE PAID</p>
          </div>
          <div className="col-3 border-dark border-bottom">
            <p className="text-end me-5 mb-1">
              ₹{props.amountData.balancePaid}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-4 border-dark border-bottom offset-5">
            <p className="mb-1">BALANCE DUE</p>
          </div>
          <div className="col-3 border-dark border-bottom">
            <p className="text-end me-5 mb-1">₹{props.amountData.balanceDue}</p>
          </div>
        </div>
      </div>

      {/* Item Details Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
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
