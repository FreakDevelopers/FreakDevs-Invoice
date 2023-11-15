import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MasterLayout from './layouts/MasterLayout'
import Invioce from './components/Invoice'
import NewInvoice from "./components/NewInvoice";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        {path:'/', element: <Invioce />},
        {path:'/invoice', element: <NewInvoice />},
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
