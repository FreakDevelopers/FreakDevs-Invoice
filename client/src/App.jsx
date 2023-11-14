import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MasterLayout from './layouts/MasterLayout'
import Invioce from './components/Invoice'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        {path:'/', element: <Invioce />},
        {path:'/invoice', element: <Invioce />},
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
