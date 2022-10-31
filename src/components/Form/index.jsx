import React from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { useState } from "react";
import Swal from 'sweetalert2'
import '../../index.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'


export const Form = () => {

    const {carrito, totalPrice, clearCart} = useCartContext();
    const [ saleId, setSaleId ] = useState()

    const [ dataClient, setDataClient ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''  
    });


    const finalizarCompra = () => {
        const ventasCollection = collection (db, 'ventas');
        if (dataClient.nombre && dataClient.apellido && dataClient.email && dataClient.telefono){
            addDoc (ventasCollection, {
                dataClient,
                items: carrito.map(product=>({price: product.price, title: product.product, quantity: product.quantity, id: product.id.id})),
                date: serverTimestamp(),
                total: `${totalPrice()}`
            })
            .then((res) => {
                setSaleId(res.id)
                carrito.forEach(products => {
                    updateStock(products)})        
            });
            Swal.fire(
                'Datos ingresados correctamente',
                'No te olvides de anotar tu ID de compra',
                'success'
              );setTimeout(()=>{
                    clearCart();    
                },3000);
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oh no',
                    text: 'Faltan ingresar datos',
                  })
                  
        } 
    }

    const clientChange = (e) => {
        const inpt = {
            name: e.target.name,
            value: e.target.value
        }
        setDataClient({
            ...dataClient, [inpt.name] : inpt.value
        })
    }

    const updateStock = (products) => {
        const updStk = doc(db, "products", products.id.id)
        updateDoc(updStk, {stock:(products.stock - products.quantity)})
    }
    



    return (

        <>

        <div className="item-list-container">
                <h1 className="greeting">Completa tus datos para finalizar la compra</h1>
            <div>
                <div className="compra__final">
                <h3>Estás comprando:</h3>
                    {carrito.map((product) => 
        <div key={product.id.id} name="cart__view">
            <ul>
                <li><p>{product.product}</p></li>
            </ul>
                    
        </div>
                    )}

                    <p>Total: <b>${totalPrice()}</b></p>
                </div>

                    <div className="div__form">


           
            <form className="form" onSubmit={finalizarCompra} onChange={clientChange}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={clientChange} required={true}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={clientChange} required={true}/>
                <input type="email" placeholder="Email" name="email" onChange={clientChange} required={true}/>
                <input type="number" placeholder="Teléfono" name="telefono" onChange={clientChange} required={true}/>
 

            </form>    
         <button onClick={finalizarCompra} className="btn">Finalizar compra</button> 
                    </div>
            

         <div className="gracias">
            <h3>Gracias por tu compra!</h3>
            <p>Acá debajo podes ver tu ID de compra. Guardalo para coordinar la entrega!</p>
            <p>Tu ID de compra es <b>{saleId}</b> 
                </p>

                <CopyToClipboard text={saleId}>
                    <button className="btn">Copiar Id</button>
                
                </CopyToClipboard>
                

         </div>

            
        </div>
        </div>

        </>
                
    )

 

};

export default Form;