import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLayout from "./layouts/MasterLayout";
import InvoicePreview from "./components/InvoicePreview/InvoicePreview";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Error401 from "./pages/Error401";
import Home from "./pages/Home";
import ManageInvoices from "./pages/ManageInvoices";
import Invioces from "./components/Invoices/Invioces";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route
            path="/"
            element={localStorage.getItem("token") ? <Home /> : <Login />}
          />
          <Route
            path="/create-invoice"
            element={
              localStorage.getItem("token") ? <CreateInvoice /> : <Error401 />
            }
          />
          <Route
            path="/manage-invoices"
            element={
              localStorage.getItem("token") ? <ManageInvoices /> : <Error401 />
            }
          />
          <Route
            path="/invoice-preview"
            element={
              localStorage.getItem("token") ? <InvoicePreview /> : <Error401 />
            }
          />
          <Route
            path="/manage-invoices/:userId"
            element={
              localStorage.getItem("token") ? <Invioces /> : <Error401 />
            }
          />
          <Route
            path="/manage-invoices/:userid/:invoiceId"
            element={
              localStorage.getItem("token") ? <InvoicePreview /> : <Error401 />
            }
          />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
