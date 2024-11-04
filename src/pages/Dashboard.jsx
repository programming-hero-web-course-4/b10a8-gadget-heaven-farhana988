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
      <div className="bg-[#9538E2] py-16 pb-52">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
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
