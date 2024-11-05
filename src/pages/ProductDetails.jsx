// ProductDetails.js
import { CiShoppingCart, CiHeart, CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import {
  addToCart,
  addToWish,
  getAllProducts,
  getAllWishProducts,
} from "../utils";
import { useCart } from "../components/CartProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";

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
    availability,
  } = details || {};

  // Add to cart button
  const handleAddToCart = (product) => {
    toast.success("Congratulations Added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    addToCart(product);
    setIsAdd(true);
    updateCartCount((prevCount) => prevCount + 1);
  };

  const handleAddToWish = (product) => {
    toast.success("Congratulations Added to Wishlist", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    addToWish(product);
    setIsAddWish(true);
    updateWishCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="relative   mt-32 text-white mb-96">
      <div className="bg-[#9538E2] py-16 pb-72">
        <Heading
          title={"Product Details"}
          subtitle={
            "Discover everything you need to know about our latest gadgets and accessories! From features and specifications to customer ratings and pricing, all the information to make an informed decision."
          }
        />
      </div>

      {/* Details card */}
      <div
        className="flex absolute top-64 left-7 lg:top-64 lg:left-44 border-2 w-[1100px]
        bg-white text-black rounded-2xl p-8 gap-9"
      >
        <img
          className="w-[424px] h-[550px] shadow-2xl shadow-[#9538e2d3] rounded-2xl"
          src={product_image}
          alt=""
        />
        <div className="space-y-3 text-[#09080F]">
          <p className="font-semibold text-2xl">{product_title}</p>
          <p className="font-semibold text-xl text-[#09080FCC]">
            Price: {price}
          </p>

          <button
            className={`border-2 rounded-full py-1 px-5 font-medium text-base ${
              availability === true
                ? "border-[#2f9c088f] text-[#309C08]"
                : "border-red-500 text-red-500"
            }`}
          >
            {availability === true ? "In Stock" : "Stock Out"}
          </button>

          <p className="font-normal text-lg text-[#09080F99]">{description}</p>

          <h3 className="font-bold text-xl text-[#09080F]">Specifications:</h3>
          {Specification && Specification.length > 0 ? (
            <div className="font-normal text-lg text-[#09080F99]">
              {Specification.map((spec, index) => (
                <div key={index}>
                  {index + 1}. {spec}
                </div>
              ))}
            </div>
          ) : (
            <p>No specifications available.</p>
          )}
          <p className="font-bold text-xl text-[#09080F]">rating</p>
          <div className="font-medium text-lg flex items-center gap-4">
            <div className="flex text-yellow-500 items-center gap-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
              <span className="text-yellow-600">
                <CiStar size={25} />
              </span>
            </div>
            {rating}
          </div>

          {/* Cart and wishlist buttons */}
          <div className="flex items-center gap-6 text-lg text-white">
            <button
              disabled={isAdd}
              className="btn text-white flex items-center gap-2 bg-[#9538E2] text-lg 
              font-semibold rounded-full border-2 px-8"
              onClick={() => handleAddToCart(details)}
            >
              <h2>Add To Cart</h2>
              <CiShoppingCart size={26} />
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default ProductDetails;
