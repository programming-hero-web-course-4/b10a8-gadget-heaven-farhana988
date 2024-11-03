// import React from 'react'
import banner from "../assets/banner.jpg";
import Heading from "./Heading";
function Banner() {
  return (
    <div
      className="bg-[#9538E2]  rounded-b-xl text-white items-center
     text-center relative h-[400px] lg:h-[550px] pt-10"
    >
      <Heading
        title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      ></Heading>
      <button className="bg-white rounded-2xl px-9 py-3 text-black font-bold text-xl mt-6">
        Shop Now
      </button>
      <div className="border-2 absolute top-64 left-7 lg:top-80 lg:left-44 p-2 lg:p-4  rounded-2xl ">
        <img
          className="w-[350px] lg:w-[1062px] lg:h-[450px] rounded-2xl 
        "
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
