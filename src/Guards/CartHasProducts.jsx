import { CartContext } from "context/CartProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const CartHasProducts = ({ Component }) => {
  const { cart } = useContext(CartContext);
  if (cart.length) {
    return <Component />;
  }
  return <Navigate to="/" />;
};

export default CartHasProducts;
