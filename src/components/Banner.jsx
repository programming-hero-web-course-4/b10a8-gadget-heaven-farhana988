// import React from 'react'
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Heading from "./Heading";
function Banner() {
  return (
    <div
      className="bg-[#9538E2]  rounded-2xl text-white items-center
     text-center relative h-[400px] lg:h-[750px] pt-36 mt-8 w-[1380px] mx-auto"
    >
      <Heading
        title={"Elevate your devices with premium accessories that blend style and performance "}
        subtitle={
          " From futuristic wearables to game-changing accessories, discover gadgets that bring convenience, style, and performance together."
        }
      ></Heading>
      <button className="bg-white rounded-2xl px-9 py-3 text-black font-bold text-xl mt-6">
       <Link to={'/dashboard'}> Shop Now</Link>
      </button>
      <div className="border-2 absolute top-64 left-7 lg:top-[460px] lg:left-36 p-2 lg:p-4  rounded-2xl ">
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
