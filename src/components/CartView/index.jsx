import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import '../../index.css'

const Cart = () => {

    const {carrito, totalPrice, removeProduct, clearCart} = useCartContext();
    

    return(
        <>
        {carrito.map((product) =>
        
        <React.Fragment key={product.id.id}>

          <div className='item-list-container'>

            <h1 className='greeting'>Tu carrito</h1>
            <p>{product.product}</p>
            <p>{product.quantity}</p>
            <img src={product.image} alt="" />
            <button className='btn' onClick={()=>removeProduct(product.id.id)}>Eliminar</button>
          </div>

        </React.Fragment>
        )
        }
        {carrito.length === 0 ?

        <div className='item-list-container'>

          <h1 className='greeting'>Tu carrito está vacio, puedes empezar tu compra desde <Link to="/">aquí</Link></h1>

        </div>


        :

        <div className='item-list-container'>

          <h2>Total: ${totalPrice()}</h2>
            <button onClick={clearCart} className="btn">Eliminar todo</button>

          <Link to='/formulario'>
          <button className="btn">Finalizar Compra</button>
          </Link>
            


        </div>

        }
        

        </>
    )};

    export default Cart;