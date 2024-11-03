import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ product }) {
  const { product_image, product_title, price,product_id } = product;
  return (
    <div className="space-y-3 rounded-xl border-2 border-red-700 p-4 bg-white h-[340px]">
      <img className="w-[282px] h-[180px] rounded-xl border-2" src={product_image} alt="" />
      <h1>{product_title}</h1>
      <p>{price}</p>
      <button
      className="text-[#9538E2] text-lg font-semibold rounded-2xl border-2 px-6 py-2">
        <Link to={`/productDetails/${product_id}`}>View Details</Link>
        </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  handleProductDetails: PropTypes.object,
};

export default Card;
