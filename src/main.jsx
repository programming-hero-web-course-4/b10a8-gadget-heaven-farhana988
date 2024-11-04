import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import { CartProvider } from './components/CartProvider';



createRoot(document.getElementById('root')).render(
  
  <CartProvider>
    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
  </CartProvider>,
)
