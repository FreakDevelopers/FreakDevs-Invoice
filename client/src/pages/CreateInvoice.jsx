import React, { useState } from "react";
import InvoiceForm from "../components/InvioceForm/InvioceForm";

function CreateInvoice() {
  const [invoiceData, setInvoiceData] = useState();
  const onSaveInvoiceData = (enteredInvoiceData) => {
    setInvoiceData(enteredInvoiceData);
  };
  console.log(invoiceData);

  return (
    <>
      <InvoiceForm onSaveInvoiceData={onSaveInvoiceData} />
    </>
  );
}

export default CreateInvoice;
