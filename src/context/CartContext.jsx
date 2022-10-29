import React, {useState, useContext, createContext } from "react";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)
 

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const IsInCart = (id) =>carrito.find((prod)=>prod.id.id === id);

 

const addProduct = (item, quantity) => {
    if (IsInCart(item.id.id)) {
        const newCarrito = carrito.map(prod =>{
            if(prod.id.id === item.id.id){
              const newQuantity = prod.quantity + quantity
              return {...prod, quantity: newQuantity}  
            } else {
                return prod
            }            
        })
        setCarrito(newCarrito)
    } else {
        const newProduct = {...item, quantity: quantity}
        setCarrito([...carrito, newProduct])
    }

}

const removeProduct = (id) => 
    setCarrito(carrito.filter(prod => prod.id.id !== id))



const clearCart = () => setCarrito([]);

const totalPrice = () => {
    return carrito.reduce((acc, product) => acc += (product.price * product.quantity), 0)
}

const totalQuantity = () => {
    return carrito.reduce((acc, product) => acc += product.quantity, 0)
}




    return (
        <>
        <CartContext.Provider value = {{carrito, clearCart, removeProduct, addProduct, totalPrice, totalQuantity}}
        >
            {children}

        </CartContext.Provider>
        </>
    )
}

export default CartProvider