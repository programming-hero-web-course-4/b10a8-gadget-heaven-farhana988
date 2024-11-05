// import React from 'react'

import { Helmet } from "react-helmet";
import Heading from "../components/Heading";
import { useLoaderData } from "react-router-dom";
import { MdRateReview } from "react-icons/md";

function BestSeller() {
  const bestSeller = useLoaderData();
  console.log(bestSeller);
  //   const { product_title, best_selling_review } = bestSeller;
  return (
    <div>
      <Helmet>
        <title>BestSeller- Gadget Heaven</title>
        <meta name="description" content="Discover the BestSeller items." />
      </Helmet>
      {/* heading and button */}
      <div className="bg-[#9538E2]  mt-32 py-20 text-white">
        <Heading
          title={"BestSeller"}
          subtitle={"Explore the best products that everyone is raving about!"}
        ></Heading>
      </div>
      {/* cards */}
      <div className="pt-10 container mx-auto grid gap-10  ">
        {bestSeller && bestSeller.length > 0 ? (
          bestSeller.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-xl shadow-lg flex gap-10 p-8"
            >
              <img
                className="w-[450px] h-[250px]  rounded-2xl"
                src={product.product_image}
              
              />
              <div className="p-6 space-y-4 ">
                <h2 className="text-3xl font-bold ">
                  {product.product_title}
                </h2>
                <h2 className="text-xl font-semibold opacity-70">
                Category: {product.category} 
                </h2>
                <div className="text-base pr-10 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold flex gap-2">Customer review<MdRateReview /></h2>
                 <p className="opacity-70 text-lg"> {product.best_selling_review}</p>
                </div>
              </div>
            
            </div>
          ))
        ) : (
          <p>No best-selling products found.</p>
        )}
      </div>
    </div>
  );
}

export default BestSeller;
