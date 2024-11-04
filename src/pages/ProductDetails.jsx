// ProductDetails.js
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { addToCart, addToWish, getAllProducts, getAllWishProducts } from "../utils";
import { useCart } from '../components/CartProvider'; 

function ProductDetails() {
  const products = useLoaderData();
  const { product_id } = useParams();
  const [details, setDetails] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isAddWish, setIsAddWish] = useState(false);

  const { updateCartCount, updateWishCount } = useCart(); 

  useEffect(() => {
    const singleDetails = products.find(
      (details) => details.product_id == product_id
    );
    setDetails(singleDetails);
    const cartItems = getAllProducts();
    const isExist = cartItems.find(
      (item) => item.product_id == singleDetails.product_id
    );
    if (isExist) {
      setIsAdd(true);
    }

    const wishItems = getAllWishProducts();
    const isExistW = wishItems.find(
      (item2) => item2.product_id == singleDetails.product_id
    );
    if (isExistW) {
      setIsAddWish(true);
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

  // Add to cart button
  const handleAddToCart = (product) => {
    addToCart(product);
    setIsAdd(true);
    updateCartCount((prevCount) => prevCount + 1); // Update context
  };

  const handleAddToWish = (product) => {
    addToWish(product);
    setIsAddWish(true);
    updateWishCount((prevCount) => prevCount + 1); // Update context
  };

  return (
    <div className="relative">
      <div className="bg-[#9538E2] py-16 pb-52">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* Details card */}
      <div
        className="flex absolute top-64 left-7 lg:top-80 lg:left-44 border-2 w-[1100px]"
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
            <div>
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

          {/* Cart and wishlist buttons */}
          <div className="flex items-center gap-6 text-lg text-white">
            <button
              disabled={isAdd}
              className="btn flex items-center gap-2 bg-[#9538E2] text-lg font-semibold rounded-2xl border-2 px-6 py-2"
              onClick={() => handleAddToCart(details)} // Moved click handler to button
            >
              <h2>Add To Cart</h2>
              <CiShoppingCart />
            </button>
            <button
              disabled={isAddWish}
              onClick={() => handleAddToWish(details)}
              className="btn text-2xl rounded-full bg-white text-black p-3"
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
