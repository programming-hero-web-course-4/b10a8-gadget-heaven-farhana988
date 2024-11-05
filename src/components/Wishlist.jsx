// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";
import {  getAllWishProducts, removeWishlist } from "../utils";

function Wishlist() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const addWish = getAllWishProducts();
    setProduct(addWish);
  }, []);

  const handleRemoveFromWishlist = (product_id) =>{
    removeWishlist(product_id)
    const addWish = getAllWishProducts();
    setProduct(addWish)
  }
  return (
    <div className="container mx-auto my-20">
    
        <div className="font-bold text-3xl">WishList</div>
       
    
        <div className="px-10 lg:px-32 space-y-6  mt-20">
        {product.length === 0 ? (
          <div className="text-5xl text-center font-bold">Your wishlist is empty!</div>
        ) : (
          product.map((product) => (
            <Card key={product.product_id} product={product} handleRemoveFromWishlist={handleRemoveFromWishlist}/>
          ))
        )}
      </div>
    </div>
  )
}

export default Wishlist