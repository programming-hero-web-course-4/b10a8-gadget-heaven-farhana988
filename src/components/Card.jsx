import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Card({ product, handleRemoveFromCart, handleRemoveFromWishlist }) {
  const pathname = useLocation();
  console.log(pathname);
  const handleDelete = (product_id) => {
    if (pathname.pathname === "/dashboard") {
      handleRemoveFromCart(product_id);
    } else if (pathname.pathname === "/dashboard/wishlist") {
      handleRemoveFromWishlist(product_id);
    }
  };
  const { product_image, product_title, price, product_id } = product;
  return (
    <div className="space-y-3 rounded-xl  p-4 bg-white h-[375px]">
      <img
        className="w-[282px] h-[180px] rounded-xl shadow-2xl shadow-[#9538e2ad] mb-8"
        src={product_image}
        alt=""
      />
      {/* delete btn */}
      {(pathname.pathname === "/dashboard" ||
        pathname.pathname === "/dashboard/cart" ||
        pathname.pathname === "/dashboard/wishlist") && (
        <div
          className="text-5xl border-2
       border-[#9538E2]  p-3 rounded-full cursor-pointer bg-white absolute  right-72 "
          onClick={() => handleDelete(product_id)}
        >
          <FaTrashAlt size={20} />
        </div>
      )}
      {/* delete btn shesh */}
      <h1 className="font-semibold text-xl text-[#09080F]">{product_title}</h1>
      <p className="font-medium text-base text-[#09080F99]">Price: {price}K</p>

      <button
        className="text-[#9538E2] text-lg font-semibold rounded-2xl border-2
       border-[#9538E2]  px-6 py-2  "
      >
        <Link to={`/productDetails/${product_id}`}>View Details</Link>
      </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  handleProductDetails: PropTypes.object,
  handleRemoveFromCart: PropTypes.func,
  handleRemoveFromWishlist: PropTypes.func,
};

export default Card;
