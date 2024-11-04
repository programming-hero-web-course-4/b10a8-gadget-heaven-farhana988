import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function Card({ product ,handleRemoveFromCart,handleRemoveFromWishlist }) {
  const pathname=useLocation()
  console.log(pathname)
  const handleDelete = (product_id) => {
    if (pathname.pathname === "/dashboard") {
      handleRemoveFromCart(product_id);
    } else if (pathname.pathname === "/dashboard/wishlist") {
      handleRemoveFromWishlist(product_id);
    }
  };
  const { product_image, product_title, price,product_id, } = product;
  return (
    <div className="space-y-3 rounded-xl border-2 border-red-700 p-4 bg-white h-[340px]">
      <img className="w-[282px] h-[180px] rounded-xl border-2" src={product_image} alt="" />
      <h1>{product_title}</h1>
      <p>{price}</p>
      <button
      className="text-[#9538E2] text-lg font-semibold rounded-2xl border-2 px-6 py-2">
        <Link to={`/productDetails/${product_id}`}>View Details</Link>
        </button>

        {
          (pathname.pathname==="/dashboard" || 
            pathname.pathname==="/dashboard/cart" || 
            pathname.pathname==="/dashboard/wishlist"  ) && (
            <div className="text-5xl absolute"
            onClick={()=> handleDelete(product_id)}
           
            >delete</div>
          )
        }
        
        
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  handleProductDetails: PropTypes.object,
  handleRemoveFromCart:PropTypes.func,
  handleRemoveFromWishlist :PropTypes.func
};

export default Card;
