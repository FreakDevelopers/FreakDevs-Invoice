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
import { useContext } from "react";
import UserContext from "./context/UserContext";
import SignUp from "./pages/SignUp";

function App() {
  const { user, token } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={token && user ? <Home /> : <Login />} />
          <Route path="/signup" element={token && user ? <Home /> : <SignUp />} />
          <Route path="/Reset-Password" element={<Reset />} />
          <Route
            path="/create-invoice"
            element={token && user ? <CreateInvoice /> : <Error401 />}
          />
          <Route
            path="/manage-invoices"
            element={token && user ? <ManageInvoices /> : <Error401 />}
          />
          <Route
            path="/invoice-preview"
            element={token && user ? <InvoicePreview /> : <Error401 />}
          />
          <Route
            path="/All-invoices"
            element={token && user ? <AllInvioces /> : <Error401 />}
          />
          <Route
            path="/manage-invoices/:userid/:invoiceId"
            element={token && user ? <InvoicePreview /> : <Error401 />}
          />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
