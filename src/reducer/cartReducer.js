const cartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let{id,color, amount, product}= action.payload;
        console.log(product);
    }
  return (
    <div>
      This is the cart page
    </div>
  )
}

export default cartReducer
