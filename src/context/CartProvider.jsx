import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const { Provider, Consumer } = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const isProductOnCart = product => cart.some(p => p.id === product.id);

    useEffect(() => {
        setTotal(cart.reduce(
            (totalPrice, p) => parseFloat(totalPrice + p.price).toFixed(2), 0
        ));
    }, [cart]);

    const toggle = product => {
        if(!isProductOnCart(product)){
            setCart([...cart, product]);
        } else {
            setCart(cart.filter(p => p.id !== product.id));
        }
    };
    
    const value = {
        cart,
        total,
        toggle,
        isProductOnCart
    }

    return <Provider value={value}>
        {children}
    </Provider>
}

export default CartProvider;

export { CartContext }
