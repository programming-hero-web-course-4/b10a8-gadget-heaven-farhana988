import PropTypes from "prop-types";

function Card({ product }) {
  const { product_image, product_title, price } = product;
  return (
    <div className="space-y-3 rounded-xl border-2 border-red-700 p-4 bg-white h-[340px]">
      <img className="w-[282px] h-[180px] rounded-xl border-2" src={product_image} alt="" />
      <h1>{product_title}</h1>
      <p>{price}</p>
      <button className="text-[#9538E2] rounded-2xl border-2 px-6 py-2">
        View Details
        </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
