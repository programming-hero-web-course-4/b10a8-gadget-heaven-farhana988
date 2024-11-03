import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

import AllCards from "../components/AllCards";
import ProductDetails from "../pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
            {
                path: "/",
                element:<AllCards></AllCards>,
                loader:()=> fetch ('../allProducts.json')
              },
              {
                path: "/category/:category",
                element:<AllCards></AllCards>,
                loader:()=> fetch ('../allProducts.json')
              },
              

        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/productDetails/:product_id",
        element:<ProductDetails></ProductDetails>,
        loader:()=> fetch ('../allProducts.json')
      },
    ],
  },
]);

export default router;
