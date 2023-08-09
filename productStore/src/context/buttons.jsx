import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const buttonContext = createContext;

export function buttonProvider({ children }) {
  const AddButton = function butt({ data }) {
    const { addToCart } = useCart();
    return (
      <button
        onClick={() => {
          addToCart(data);
        }}
      ></button>
    );
  };
  return (
    <buttonContext.Provider
      value={{
        AddButton
      }}
    >
      {children}
    </buttonContext.Provider>
  );
}
