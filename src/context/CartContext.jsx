import React, {useState, useContext, createContext, useEffect} from "react";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const IsInCart = (id) =>cart.some((product)=>product.id === id);




    const addProduct = (item, quantity) => {
        if(IsInCart(item.id)) {
            const newCart = cart.map(product => {
                if(product.id === item.id) {
                    const newQuantity = product.quantity + quantity
                    return {...product, quantity: newQuantity}
                }else{
                    return product
                }
            })
            setCart(newCart)
    }else {
        const newProduct = {...item, quantity: quantity}
        setCart([...cart, newProduct])
    }
}


const removeProduct = (id) => {
    setCart(
        cart.filter((product)=>{
            return product.id !== id;
        })
    )
}

const clearCart= () => setCart([]);

const totalPrice = () => {
    return cart.reduce((acc, product) => acc += (product.price * product.quantity), 0)
}

const totalQuantity = () => {
    return cart.reduce((acc, product) => acc += product.quantity, 0)
}




    return (
        <>
        <CartContext.Provider value = {{cart, clearCart, IsInCart, removeProduct, addProduct, totalPrice, totalQuantity}}
        >
            {children}

        </CartContext.Provider>
        </>
    )
}

export default CartProvider