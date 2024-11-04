// get all cart items
const getAllProducts = () => {
 const all = localStorage.getItem("cartItems");
 if(all){
    const parseAll =JSON.parse(all)
    return parseAll
 }
 else{
    return []
 }
};

// add to cart
const addToCart = (product) => {
  const cartItems = getAllProducts();
  const isExist =   cartItems.find(item=> item.product_id === product.product_id)
  console.log(isExist)
  if(isExist) return alert('error')
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export { addToCart, getAllProducts };
