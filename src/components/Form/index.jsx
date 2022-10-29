import React from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from "react";
// import '../../index.css'





export const Form = () => {

    const {carrito, totalPrice} = useCartContext();
    const [ saleId, setSaleId ] = useState()

    const [ dataClient, setDataClient ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''  
    });


    const finalizarCompra = () => {
        const ventasCollection = collection (db, 'ventas');
        if (dataClient.length === 0){
            console.log("faltan ingresar datos");
        } else{
        addDoc (ventasCollection, {
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
}

    const clientChange = (e) => {
        const { name, value } = e.target
        setDataClient({
            ...dataClient, [name] : value
        })
    }
    



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
           
            <form onSubmit={finalizarCompra} onChange={clientChange} id="form-1">
                <input type="text" placeholder="Nombre" name="nombre" onChange={clientChange} required={true}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={clientChange} required={true}/>
                <input type="email" placeholder="Email" name="email" onChange={clientChange} required={true}/>
                <input type="number" placeholder="Teléfono" name="telefono" onChange={clientChange} required={true}/>
 

            </form>    
        <button onClick={finalizarCompra}>Finalizar compra</button>
        <p>Tu ID de compra es {saleId}</p>
            
        </div>
        </div>

        </>
                
    )

 

};

export default Form;