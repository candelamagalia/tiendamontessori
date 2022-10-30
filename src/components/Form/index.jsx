import React from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from "react";
import Swal from 'sweetalert2'
import '../../index.css'







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
                console.log(res.id)        
            });
            Swal.fire(
                'Datos ingresados correctamente',
                'No te olvides de anotar tu ID de compra',
                'success'
              );
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oh no',
                    text: 'Faltan ingresar datos',
                  });
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
    



    return (

        <>

        <div className="item-list-container">
                <h1 className="greeting">Completa tus datos para finalizar la compra</h1>
            <div>
                    {carrito.map((product) => 
        <div key={product.id.id} name="items">
                    <p>{product.product}</p>
                    <p>{product.quantity}</p>
                    <p>${totalPrice()}</p>
        </div>
                    )}

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
            <p>Tu ID de compra es <b>{saleId}</b> </p>
         </div>

            
        </div>
        </div>

        </>
                
    )

 

};

export default Form;