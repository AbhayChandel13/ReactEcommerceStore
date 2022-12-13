const cartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let{id,color, amount, product}= action.payload;
        console.log(product);

      let cartProduct;

      cartProduct={
        id:id+color,
        name : product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,
      };
      return{
        ...state,
        cart:[...state.cart, cartProduct],
      };

    }

    if(action.type=== "REMOVE_ITEM"){
      let updatedCart = state.cart.filter(
        (curItem)=> curItem.id !== action.payload
      );
      return{
        ...state,
        cart: updatedCart,
      }
    }
  return state;
}

export default cartReducer
