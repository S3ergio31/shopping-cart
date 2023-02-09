import { useCallback, useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState([]);

  const isProductOnCart = (product) => cart.some((p) => p.id === product.id);

  const toggle = (product) => {
    if (!isProductOnCart(product)) {
      setCart([...cart, product]);
      setUnits((units) => [...units, { id: product.id, count: 1 }]);
    } else {
      setCart(cart.filter((p) => p.id !== product.id));
      setUnits((units) => [...units.filter((u) => u.id !== product.id)]);
    }
  };

  const setProductUnits = (id, count) =>
    setUnits((units) => [
      ...units.filter((unit) => unit.id !== id),
      { id, count },
    ]);

  const getProductUnits = useCallback(
    (product_id) => units.find((u) => product_id === u.id)?.count ?? 0,
    [units]
  );

  useEffect(() => {
    const totalReducer = (subtotal, product) => {
      const partial = product.price * getProductUnits(product.id);
      return subtotal + partial;
    };
    setTotal(cart.reduce(totalReducer, 0));
  }, [cart, units, getProductUnits]);

  return {
    cart,
    total,
    toggle,
    isProductOnCart,
    getProductUnits,
    setProductUnits,
  };
}
