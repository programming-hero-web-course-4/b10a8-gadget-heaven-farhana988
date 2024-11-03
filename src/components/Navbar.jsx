import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Navbar() {
  return (
    <div className="bg-[#9538E2 ">
        <div
      className="navbar bg-[#9538E2] lg:px-32 rounded-b-none rounded-t-xl
       text-white"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="font-bold text-lg" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold text-lg" to={"/statistics"}>
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold text-lg" to={"/dashboard"}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4 mr-7">
        <Link className="lg:text-3xl rounded-full bg-white text-black p-3">
          {" "}
          <CiShoppingCart></CiShoppingCart>{" "}
        </Link>

        <Link className="lg:text-3xl rounded-full bg-white text-black p-3">
          {" "}
          <CiHeart></CiHeart>{" "}
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
