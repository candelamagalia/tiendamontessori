import React, {useState, useContext, createContext} from "react";


export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart= () => setCart([]);

    const IsInCart = (id) =>cart.some((product)=>product.id === id);


    const removeProduct = (id) => {
        setCart(
            cart.filter((product)=>{
                return product.id !== id;
            })
        )
    }

    const addProduct = (item, quantity) => {
        console.log(item);
        console.log(quantity);
        if(IsInCart(item.id)) {
            setCart(cart.map(product=> {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...item,quantity}]);
        }
    }




    return (
        <>
        <CartContext.Provider value = {{cart, clearCart, IsInCart, removeProduct, addProduct}}
        >
            {children}

        </CartContext.Provider>
        </>
    )
}

export default CartProvider