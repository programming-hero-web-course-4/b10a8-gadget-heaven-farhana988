// import React from 'react'

import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <div>
        <Helmet>
        <title>Dashboard - Gadget Heaven</title>
        <meta name="description" content="Manage your gadgets and accessories in the dashboard." />
      </Helmet>
      {/* heading and button */}
      <div className="bg-[#9538E2]  mt-32 py-20 text-white">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Your perfect tech haul is just a click away! Add your favorite gadgets and accessories to the cart and easily proceed to checkout when you're ready to buy."
          }
        ></Heading>
        {/* buttons */}
        <div className="text-center space-x-10 mt-10">
          <NavLink to={'cart'}
           className={({ isActive }) =>
            ` text-2xl font-semibold  ${isActive ? 'bg-white text-[#9538E2] text-2xl font-semibold rounded-full border-2 px-9 py-2' 
              : 'px-9 py-2 rounded-full border-2 text-white '}`
          }
          >Cart</NavLink>
          <NavLink to={'wishlist'}
          className={({ isActive }) =>
            ` text-2xl font-semibold  ${isActive ? 'bg-white text-[#9538E2] text-2xl font-semibold rounded-full border-2 px-9 py-2' 
              : 'px-9 py-2 rounded-full border-2 text-white'}`
          }>Wishlist</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
