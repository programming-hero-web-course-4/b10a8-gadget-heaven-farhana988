// import React from 'react'

import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";

function Dashboard() {
  return (
    <div>
      <div className="bg-[#9538E2] py-16 pb-52">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        {/* buttons */}
        <div className="text-center">
          <NavLink 
           className={({ isActive }) =>
            ` text-2xl font-semibold  ${isActive ? 'text-lg font-semibold rounded-2xl border-2 px-6 py-2' 
              : 'px-8 py-2 rounded-xl bg-[#09080F0D]'}`
          }
          >Cart</NavLink>
          <NavLink className={({ isActive }) =>
            ` text-2xl font-semibold  ${isActive ? 'text-lg font-semibold rounded-2xl border-2 px-6 py-2' 
              : 'px-8 py-2 rounded-xl bg-[#09080F0D]'}`
          }>Wishlist</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
