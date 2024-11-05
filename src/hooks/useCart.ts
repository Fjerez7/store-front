import { useContext } from "react";
import { CartContextType } from "../types/Cart";
import { CartContext } from "../context/CartContext";

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("error en el usecart");
  return context;
};
