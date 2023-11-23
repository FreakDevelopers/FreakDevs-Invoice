import React, { useState } from "react";
import toast from "react-hot-toast";

function ItemDetails(props) {
  const [itemDescription, setItemDescription] = useState('');
  const [itemRate, setItemRate] = useState('');
  const [itemQuantity, setitemQuantity] = useState('');
  const [itemAmount, setItemAmount] = useState('');

  const inputChangeHandler = (id, value) => {
    if (id === "description") {
      setItemDescription(value);
    } else if (id === "rate") {
      setItemRate(value);
      setItemAmount(value * itemQuantity);
    } else if (id === "quantity") {
      setitemQuantity(value);
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
    setItemDescription('');
    setItemRate('');
    setitemQuantity('');
    setItemAmount('');
    toast.success("Item Added..!");
  };
  return (
    <>
      {/* Item Details Table */}
      <div className="col-md-12 mt-5">
        <h6>ITEM DETAILS:</h6>
        <table id="item-details" className="table table-hover">
          <thead>
            <tr>
              <th scope="col" width="50%">
                Description
              </th>
              <th scope="col" width="20%" className="text-center">
                Rate
              </th>
              <th scope="col" width="10%" className="text-center">
                Qty
              </th>
              <th scope="col" width="20%" className="text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FreakDevs Domain</td>
              <td align="center" className="text-center">
                ₹4499
              </td>
              <td align="center" className="text-center">
                2
              </td>
              <td align="center" className="text-center">
                ₹8985.0
              </td>
            </tr>
            <tr>
              <td>FreakDevs Domain</td>
              <td align="center" className="text-center">
                ₹4499
              </td>
              <td align="center" className="text-center">
                2
              </td>
              <td align="center" className="text-center">
                ₹8985.0
              </td>
            </tr>
            <tr>
              <td>FreakDevs Domain</td>
              <td align="center" className="text-center">
                ₹4499
              </td>
              <td align="center" className="text-center">
                2
              </td>
              <td align="center" className="text-center">
                ₹8985.0
              </td>
            </tr>
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
            <p className="text-end me-5 mb-1">₹2455.0</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-4 border-dark border-bottom offset-5">
            <p className="mb-1">BALANCE DUE</p>
          </div>
          <div className="col-3 border-dark border-bottom">
            <p className="text-end me-5 mb-1">₹2455.0</p>
          </div>
        </div>
      </div>

      {/* Item Details Inputs */}
      <div className="col-md-12 text-center">
        <div className="row">
          <div className="col-md-6 g-3"><div className="input-group">
              <span className="input-group-text">Item</span>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={(e) => {
                inputChangeHandler("description", e.target.value);
              }}
              value={itemDescription}
            />
          </div>
          </div>
          <div className="col-md-2 g-3 ">
            <div className="input-group">
              <span className="input-group-text">₹</span>
              <input
                type="number"
                className="form-control text-center"
                placeholder="Rate"
                min={0}
                onChange={(e) => {
                  inputChangeHandler("rate", e.target.value);
                }}
                value={itemRate}
              />
            </div>
          </div>
          <div className="col-md-2 g-3">
            <div className="input-group">
              <span className="input-group-text">Qauntity</span>
              <input
                type="number"
                min={1}
                className="form-control text-center"
                placeholder="Quantity"
                onChange={(e) => {
                  inputChangeHandler("quantity", e.target.value);
                }}
                value={itemQuantity}
              />
            </div>
          </div>
          <div className="col-md-2 g-3">
            <div className="input-group">
              <span className="input-group-text">₹</span>
              <input
                type="text"
                className="form-control text-center"
                placeholder="Amount"
                value={itemAmount}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Item Button */}
      <div className="col-md-12 text-center">
        <button
          type="button"
          className="btn btn-outline-dark px-4 my-2"
          onClick={addItemHandler}
        >
          Add Items
        </button>
      </div>
    </>
  );
}

export default ItemDetails;
