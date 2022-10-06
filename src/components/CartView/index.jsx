import React from 'react'
import { useContext } from 'react'
import { CartContext, useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Cart = () => {

    const {cart, totalPrice, removeProduct, cleanCart} = useCartContext();



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
        <button onClick={cleanCart} className="btnDetalle">Eliminar todo</button>

        </div>

        }
        

        </>
    )};

    // {cart.map(product =>
        
    //     <div>     
            
    //         <p className='titulo-item'>{product.product}</p>        
    //         <div key={product.id} >
    //             <div className='item-detail1'>
    //             <img className='item-detail-img'src={product.image} alt="" />
    //             </div>
    //             <p className='item-detail-price'>${product.price}</p> 
    //             <button className='btnDetalle' onClick={()=>removeProduct(product.id)}>Eliminar</button>
    //         </div>
            
        

    //     </div>
       
        
    //     )
    //     }
    //     {cart.length === 0 ?
    //     <h1>Tu carrito está vacio</h1>:
    //     <><h2>Total: ${totalPrice()}</h2>
    //     <button onClick={cleanCart}>Eliminar todo</button></>
    //     }
        

    //     </>