import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider, Consumer } = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isProductOnCart = product => cart.some(p => p.id === product.id);

    const toggle = product => {
        if(!isProductOnCart(product)){
            setCart([...cart, product]);
        } else {
            setCart(cart.filter(p => p.id !== product.id));
        }
    };
    
    const value = {
        cart, 
        toggle,
        isProductOnCart
    }

    return <Provider value={value}>
        {children}
    </Provider>
}

export default CartProvider;

export { CartContext }
