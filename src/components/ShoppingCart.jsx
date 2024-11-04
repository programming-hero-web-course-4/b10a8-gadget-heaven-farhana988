import { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../utils";
import { GiSettingsKnobs } from "react-icons/gi";

function ShoppingCart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const addCart = getAllProducts();
    setProduct(addCart);
  }, []);
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between mb-10 flex-col lg:flex-row gap-20 lg:gap-0">
        <div className="font-bold text-3xl">Cart</div>
        <div className="flex items-center gap-10 ">
          <h2>Total cost:</h2>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <button
            className=" flex gap-1 lg:gap-4 items-center text-[#9538E2]  text-sm lg:text-xl font-semibold rounded-full
                border-2 border-[#9538E2] px-3 lg:px-8 py-2 lg:py-2
                
            
               "
          >
            Sort by Price <GiSettingsKnobs></GiSettingsKnobs>{" "}
          </button>
          <button
            className=" bg-[#9538E2]  text-white text-base lg:text-2xl  font-semibold rounded-full
                 border-2 px-3 lg:px-8 py-2 lg:py-4
                 
             
                "
          >
            Purchase
          </button>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-32 space-y-6">
        {product.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
