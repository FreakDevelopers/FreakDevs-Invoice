import React, { useState } from "react";
import InvoiceForm from "../components/InvioceForm/InvioceForm";

function Home() {
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

export default Home;
