import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("TheCart");
//   // if (localCartData === []) {
//   //   return [];
//   // } else {
//   //   return JSON.parse(localCartData);
//   // }
//   const parsedData = JSON.parse(localCartData);
//   if (!Array.isArray(parsedData)) return[];

//   return parsedData;
// };
const intialState = {     
  cart: [],
  // cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 10000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
 

  //Add Items to the cart:
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //Increment and decrement the product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  //To remove or discard the indiviual  item from cart:
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //To Empty or clear the Cart Items:
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  
  //To add the data in local storage:
  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEM"});
    // dispatch({type:"CART_TOTAL_PRICE"});
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("TheCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
