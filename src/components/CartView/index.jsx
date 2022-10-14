import React from 'react'
import { useContext, useState } from 'react'
import { CartContext, useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';

export const Cart = () => {

    const {cart, totalPrice, removeProduct, clearCart} = useCartContext();
    const [IdCompra, setIdCompra] = useState("");



    const [user, setUser] = useState({
      nombre: "",
      apellido: "",
      email: ""
    })

    const buyer = (e) => {
      const {target} = e;
      const {name, value} = target;
      const newValues = {
        ...user,
        [name]: value,
    }; 
    setUser(newValues)
    }

    const finalizarCompra = () => {
      const ventasCollection = collection(db,"ventas")
      addDoc(ventasCollection, {
        buyer: user,
        items: cart,
        date: serverTimestamp(),
        total: totalPrice
      })
      .then((result) => {
        setIdCompra(result.id)
        cart.forEach(product => {
          actualizarStock(product)
        });
      })

    }

    const actualizarStock = (product) => {
      const updateStock = doc(db, "products", product.id)
      updateDoc(updateStock, {stock: (product.stock - product.quantity)})
    }

    const terminar = () => {
      finalizarCompra()
  }



    return(
        <>
        {cart.map(product =>


        
        <Card className="cartview-card">     
            
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          {product.product}
        </Typography>
            </CardContent>

            <CardMedia
            component="img"
            height="140"
            image={product.image}
            />

<CardActions>
        <Link to={`producto/${product.id}`} className='item-container'>
         
        <button className='btnDetalle' onClick={()=>removeProduct(product.id)}>Eliminar</button>

        </Link>
      </CardActions>

            
        

        </Card>
       
        
        )
        }
        {cart.length === 0 ?
        <h1>Tu carrito está vacio, puedes empezar tu compra desde <Link to="/">aquí</Link></h1>:
        <div className='finalizar-compra'>
        <h2>Total: ${totalPrice()}</h2>
        <button onClick={clearCart} className="btnDetalle">Eliminar todo</button>
        <h3>Datos del comprador</h3>
        <h5>Id de compra: {IdCompra}</h5>
        <form>
          <div>
            <div>
              <input type="text" name='nombre' placeholder='ingresar nombre' onChange={buyer} value={user.nombre}/>
              <input type="text" name='apellido' placeholder='ingresar apellido' onChange={buyer} value={user.apellido}/>
              <input type="text" name='email' placeholder='ingresar email' onChange={buyer} value={user.email}/>
        <button className="btnDetalle" onClick={terminar}>Finalizar Compra</button>
            </div>
          </div>
        </form>

        </div>

        }
        

        </>
    )};