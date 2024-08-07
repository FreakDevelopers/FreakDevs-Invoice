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
import AllInvioces from "./components/AllInvioces/AllInvioces";
import CreateInvoice from "./pages/CreateInvoice";
import Reset from "./pages/Reset";
import SignUp from "./pages/SignUp";
import CreateCustomer from "./pages/CreateCustomer";
import { useSelector } from "react-redux";
import UpdateCustomer from "./pages/UpdateCustomer";
import CustomerInvoices from "./components/CustomerInvoices/CustomerInvoices";

function App() {
  const { token, user } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={token && user ? <Home /> : <Login />} />
          <Route
            path="/signup"
            element={token && user ? <Home /> : <SignUp />}
          />
          <Route path="/Reset-Password" element={<Reset />} />
          <Route
            path="/create-customer"
            element={token && user ? <CreateCustomer /> : <Error401 />}
          />
            <Route
              path="/update-customer/:id"
              element={token && user ? <UpdateCustomer /> : <Error401 />}
            />
          <Route
            path="/create-invoice"
            element={token && user ? <CreateInvoice /> : <Error401 />}
          />
          <Route
            path="/manage-invoices"
            element={token && user ? <ManageInvoices /> : <Error401 />}
          />
          <Route
            path="/invoices"
            element={token && user ? <AllInvioces /> : <Error401 />}
          />
          <Route
            path="/customer/:id"
            element={token && user ? <CustomerInvoices /> : <Error401 />}
          />
          <Route
            path="/customer/:id/:invoiceId"
            element={token && user ? <InvoicePreview /> : <Error401 />}
          />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
