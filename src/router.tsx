import { createBrowserRouter } from "react-router";
import { Dashboard, Expenses, Layout } from "./pages";

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
      {
        path: "/settings",
        element: <Dashboard />,
      },
    ],
  },
]);
