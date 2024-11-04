// import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { addToCart, getAllProducts, } from "../utils";

function ProductDetails() {
  const products = useLoaderData();
 
  const { product_id } = useParams();
 
  const [details, setDetails] = useState([]);



  const [isAdd,setIsAdd]=useState(false)
  useEffect(() => {
   
    const singleDetails = products.find(
      (details) => details.product_id == product_id
    );
    setDetails(singleDetails);
    const cartItems = getAllProducts();
    const isExist =   cartItems.find(item=> item.product_id ==singleDetails.product_id)
   if(isExist){
    setIsAdd(true)
   }
  }, [product_id, products]);

  const {
    product_image,
    product_title,
    price,
    description,
    Specification,
    rating,
  } = details || {};
// add to cart button
  const handleAddToCart= product =>{
    addToCart(product)
    setIsAdd(true)
  }
  return (
    <div className="relative">
      <div className="bg-[#9538E2] py-16 pb-52">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>

      {/* detaails card */}
      <div
        className="flex absolute top-64 left-7 lg:top-80 lg:left-44
        border-2 w-[1100px]"
      >
        <img
          className="lg:w-[424px] lg:h-[503px] border-2 border-red-400"
          src={product_image}
          alt=""
        />
        <div>
          <p>{product_title}</p>
          <p>{price}</p>
          <p>{description}</p>

          <h3 className="mt-4">Specifications:</h3>
          {Specification && Specification.length > 0 ? (
            <div className="">
              {Specification.map((spec, index) => (
                <div key={index}>
                  {index + 1}. {spec}
                </div>
              ))}
            </div>
          ) : (
            <p>No specifications available.</p>
          )}

          <p>{rating}</p>
          <p></p>

          {/* cart and wishlist btn */}
          <div className="flex items-center gap-6 text-lg text-white">
            <button 
          disabled={isAdd}
            className=" btn flex items-center gap-2 bg-[#9538E2] text-lg font-semibold
             rounded-2xl border-2 px-6 py-2 ">
              <h2 
                
              onClick={()=> handleAddToCart(details)}>Add To Card</h2>
              <CiShoppingCart></CiShoppingCart>
            </button>
            <button className="btn  text-2xl rounded-full bg-white text-black p-3 ">
              <CiHeart></CiHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
