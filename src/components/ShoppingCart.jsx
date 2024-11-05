import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { getAllProducts, removeCart, clearCart } from "../utils"; 
import { GiSettingsKnobs } from "react-icons/gi";
import modal from '../assets/Group.png'


function ShoppingCart() {
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const addCart = getAllProducts();
    setProduct(addCart);
    calculateTotalPrice(addCart);
  }, []);

  const calculateTotalPrice = (products) => {
    const total = products.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleSort = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setProduct(sorted);
    calculateTotalPrice(sorted);
  };

  const handleRemoveFromCart = (product_id) => {
    removeCart(product_id);
    const addCart = getAllProducts();
    setProduct(addCart);
    calculateTotalPrice(addCart);
  };

  const handlePurchase = () => {
    calculateTotalPrice(product);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    clearCart();
    setProduct([]); 
    setTotalPrice(0); 
    setIsModalOpen(false);
    navigate("/"); 
  };

  const isCartEmpty = product.length === 0;

  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between mb-10 flex-col lg:flex-row gap-20 lg:gap-0">
        <div className="font-bold text-3xl">Cart</div>
        <div className="flex items-center gap-10 ">
          <h2 className=" font-bold text-2xl">Total cost: {totalPrice.toFixed(2)}$</h2>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <button
              onClick={handleSort}
              className="flex gap-1 lg:gap-4 items-center text-[#9538E2] text-sm lg:text-xl font-semibold rounded-full border-2 border-[#9538E2] px-3 lg:px-8 py-2 lg:py-2"
            >
              Sort by Price <GiSettingsKnobs />
            </button>
            <button
              onClick={handlePurchase}
              className={`bg-[#9538E2] text-white text-base lg:text-2xl font-semibold rounded-full border-2 px-3 lg:px-8 py-2 lg:py-4 ${
                isCartEmpty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isCartEmpty}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-32 space-y-6 ">
        {isCartEmpty ? (
          <div className="text-5xl text-center font-bold shadow-2xl shadow-[#9538e2d3] 
          rounded-2xl py-20">Your cart is empty!</div>
        ) : (
          product.map((product) => (
            <Card key={product.product_id} product={product} handleRemoveFromCart={handleRemoveFromCart} />
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 shadow-lg flex items-center justify-center text-center
          flex-col w-96 rounded-2xl gap-3">
            <img src={modal} alt="" />
            <h2 className="text-3xl font-bold mt-5">Payment Successfully Done</h2>
            <p className=" font-medium text-base text-[#09080F99]">Thanks for purchasing.
            </p>
            <p className="font-medium text-base text-[#09080F99]">Total Cost: {totalPrice.toFixed(2)}$</p> 
            <button
              onClick={closeModal}
              className=" bg-[#11000028] text-[#09080F] px-32 py-2 rounded-full font-semibold
              text-lg border-2 border-[#9538E2]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
