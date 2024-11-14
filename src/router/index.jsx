import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Products from "../pages/products/Products";
import CreateProduct from "../Pages/createProduct/CreateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Products/>,
      },
      {
        path: "/create-product",
        element: <CreateProduct/>,
      },
    ]
  }
])