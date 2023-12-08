import React, { useState } from "react";
import InvoiceForm from "../components/InvioceForm/InvioceForm";

function CreateInvoice() {
  const [invoiceData, setInvoiceData] = useState();
  const onSaveInvoiceData = (enteredInvoiceData) => {
    setInvoiceData(enteredInvoiceData);
  };
  console.log(invoiceData);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <InvoiceForm onSaveInvoiceData={onSaveInvoiceData} />
    </div>
  );
}

export default CreateInvoice;
