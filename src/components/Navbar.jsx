import { Link, NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useCart } from '../components/CartProvider'; 

function Navbar() {
  const location = useLocation();
  const { cartCount, wishCount } = useCart();

  const navbarBackgroundColor =( location.pathname === '/' || 
    location.pathname === '/category/Laptops'  || 
   location.pathname === '/category/Phones' || 
   location.pathname === '/category/Smart%20Watches' || 
   location.pathname === '/category/Accessories' || 
   location.pathname === '/category/MacBook' || 
   location.pathname === '/category/iPhone' 
  )
    ? '#9538E2' : '#ffffff'; 
  const textColor = ( location.pathname === '/' || 
    location.pathname === '/category/Laptops'  || 
   location.pathname === '/category/Phones' || 
   location.pathname === '/category/Smart%20Watches' || 
   location.pathname === '/category/Accessories' || 
   location.pathname === '/category/MacBook' || 
   location.pathname === '/category/iPhone' 
  )? 'text-white' : 'text-black';

  return (
    <div className={`bg-[${navbarBackgroundColor}]  ${textColor} 
    mt-5 w-[1380px]  rounded-2xl py-4 fixed backdrop-blur-3xl top-0 left-8 z-50 `}>
      <div className={` flex lg:px-32  rounded-2xl `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/statistics">Statistics</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-2xl font-bold">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/bestSeller">BestSeller</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex  gap-4 mr-7">
          <Link 
          className="lg:text-3xl rounded-full bg-white text-black p-3" to="/cart">
            <CiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-4 right-56 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
            )}
          </Link>
          <Link className="lg:text-3xl rounded-full bg-white text-black p-3" to="/wishlist">
            <CiHeart />
            {wishCount > 0 && (
              <span className="absolute top-4 right-36 bg-red-500 text-white text-xs rounded-full px-1">{wishCount}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
