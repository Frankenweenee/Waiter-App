import { useReducer, createContext } from "react";
import { TYPE, inicialStateCart, shopReducer } from "../reducer/shopReducer";

export const CartContext = createContext();

export function actions() {
  const [state, dispatch] = useReducer(shopReducer, inicialStateCart);
 
  const addToCart = (data) => {
    dispatch({
      type: TYPE.ADD_TO_CART,
      payload: data,
    });
  };

  const deleteItemFromCart = (data) => {
    dispatch({
      type: TYPE.DELETE_ITEM_FROM_CART,
      payload: data,
    });
  };

  const clearCart = () => {
    dispatch({
      type: TYPE.CLEAR_CART,
    });
  };

  return { state, addToCart, deleteItemFromCart, clearCart  };
}

export function CartProvider({ children }) {
  const { state, addToCart, deleteItemFromCart, clearCart } = actions();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        deleteItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

