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



const getAllWishProducts = () => {
    const allw = localStorage.getItem("wishItems");
    if(allw){
       const parseAll =JSON.parse(allw)
       return parseAll
    }
    else{
       return []
    }
   };
// add to wishlist

const addToWish = (product) => {
    const wishItems = getAllWishProducts();
    const isExist =   wishItems.find(item=> item.product_id === product.product_id)
    console.log(isExist)
    if(isExist) return alert('error')
    wishItems.push(product);
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  };

export { addToCart, getAllProducts ,addToWish, getAllWishProducts};
