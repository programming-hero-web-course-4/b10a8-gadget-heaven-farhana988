// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";
import {  getAllWishProducts } from "../utils";

function Wishlist() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const addWish = getAllWishProducts();
    setProduct(addWish);
  }, []);
  return (
    <div className="container mx-auto my-20">
    
        <div className="font-bold text-3xl">WishList</div>
       
    
        <div className="px-10 lg:px-32 space-y-6">
        {product.length === 0 ? (
          <div>Your wishlist is empty!</div>
        ) : (
          product.map((product) => (
            <Card key={product.product_id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default Wishlist