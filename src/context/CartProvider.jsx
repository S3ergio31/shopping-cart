import { createContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();
const { Provider, Consumer } = CartContext;

const CartProvider = ({ children }) => (
  <Provider value={useCart()}>{children}</Provider>
);

export default CartProvider;

export { CartContext, Consumer };
