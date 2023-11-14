import React from 'react'
import InvoiceForm from './InvioceForm';

function Invoice() {
    const saveInvoiceDataHandler = (enteredInvoiceData) => {
        const invoiceData = {
          ...enteredInvoiceData,
          id: (Math.trunc(Math.random()*100)).toString()
        }
        console.log(invoiceData);
      }
  return (
    <>
        <div className="container">
        <h2 className='text-center my-4'>Invoice Details</h2>
        <hr />
        <InvoiceForm onSaveInvoiceData={saveInvoiceDataHandler} />
      </div>
    </>
  )
}

export default Invoice