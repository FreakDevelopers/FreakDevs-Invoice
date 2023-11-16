import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MasterLayout from './layouts/MasterLayout'
import Invioce from './components/Invoice'
import NewInvoice from "./components/NewInvoice";
import Login from "./components/Login";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        {path:'/', element: <Login />},
        {path:'/home', element: <Invioce />},
        {path:'/invoice', element: <NewInvoice />},
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
