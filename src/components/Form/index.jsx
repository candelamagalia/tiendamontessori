import React from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { useState } from "react";
// import '../../index.css'





export const Form = () => {

    const {carrito, totalPrice, removeProduct, clearCart} = useCartContext();
    const [ saleId, setSaleId ] = useState()

    const [ dataClient, setDataClient ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''  
    });


    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            dataClient,
            items: carrito.map(product=>({price: product.price, title: product.product, quantity: product.quantity, id: product.id.id})),
            date: serverTimestamp(),
            total: `${totalPrice()}`
        })
        .then((res) => {
            setSaleId(res.id)
            console.log(res.id)        
        })        
    }

    const clientChange = (e) => {
        const { name, value } = e.target
        setDataClient({
            ...dataClient, [name] : value
        })
    }
    

// const [dataClient, setDataClient] = useState({
//     nombre:'',
//     apellido: '',
//     email: '',
//     telefono: ''
// })

// const [saleId, setSaleId] = useState();

    // const finalizarCompra = () =>{
    //   const ventasCollection = collection(db, "ventas");
    //   addDoc(ventasCollection, {
    //     dataClient,
    //     items: carrito.map(product=>({price: product.price, title: product.product, quantity: product.quantity, id: product.id.id})),
    //     date: serverTimestamp(),
    //     total: totalPrice(),
    //   })
    //   .then(result=>{
    //       setSaleId(result.id);
    //       console.log(result.id);
    //         carrito.forEach(products => {
    //             updateStock(products);
    //         });
    //     clearCart();

    //   })       
    // }


    // const clientChange = (e) => {
    //     const {name, value} = e.target
    //     setDataClient ({
    //         ...dataClient, [name] : value
    //     })
        
    // }

    // const updateStock = (products) => {
    //     const updStk = doc(db, "products", products.id.id)
    //     updateDoc(updStk, {stock:(products.stock - products.quantity)})
    // }


    return (

        <>

        <div className="item-list-container">
                    {carrito.map((product) => 
        <div key={product.id.id} name="items">
                    <h1 className="greeting">Completa tus datos para finalizar la compra</h1>
                    <p>{product.product}</p>
                    <p>{product.quantity}</p>
                    <p>${totalPrice()}</p>
        </div>
                    )}

        <div>
           
            <form onSubmit={finalizarCompra} onChange={clientChange}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={clientChange} required={true}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={clientChange} required={true}/>
                <input type="email" placeholder="Email" name="email" onChange={clientChange} required={true}/>
                <input type="number" placeholder="Teléfono" name="telefono" onChange={clientChange} required={true}/>
                <button type="submit" onClick={finalizarCompra}>Finalizar compra</button>
            </form>            
            <p>Tu ID de compra es {saleId}</p>
            
        </div>
        </div>

        </>
                
    )

 

};

export default Form;