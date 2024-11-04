// -------------------         get all cart items
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

//  -------------------         add to cart
const addToCart = (product) => {
  const cartItems = getAllProducts();
  const isExist =   cartItems.find(item=> item.product_id === product.product_id)
  console.log(isExist)
  if(isExist) return alert('error')
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};




//  -------------------           remove from cart

const removeCart = product_id =>{
    const cartItems= getAllProducts()
    const remainCart = cartItems.filter(product=> product.product_id!=product_id)
    localStorage.setItem("cartItems", JSON.stringify(remainCart))
}



// -------------------          get all wish items
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



// -------------------          add to wishlist

const addToWish = (product) => {
    const wishItems = getAllWishProducts();
    const isExist =   wishItems.find(item=> item.product_id === product.product_id)
    console.log(isExist)
    if(isExist) return alert('error')
    wishItems.push(product);
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  };



//  -------------------           remove from wishlist

const removeWishlist = product_id =>{
    const wishItems =  getAllWishProducts()
    const remainWish = wishItems.filter(product=> product.product_id!=product_id)
    localStorage.setItem("wishItems", JSON.stringify(remainWish))
}








export { addToCart, getAllProducts ,addToWish, getAllWishProducts ,removeCart ,removeWishlist};
