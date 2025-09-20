import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Expenses from "../pages/Expenses/Expenses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
    ],
  },
]);
