import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

import AllCards from "../components/AllCards";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../components/ShoppingCart";
import Wishlist from "../components/Wishlist";


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
        children:[
          {
              path: "/dashboard",
              element:<ShoppingCart></ShoppingCart>
            },
            {
              path: "cart",
              element:<ShoppingCart></ShoppingCart>
            },
            {
              path: "wishlist",
              element:<Wishlist></Wishlist>
            },
            

      ]
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
