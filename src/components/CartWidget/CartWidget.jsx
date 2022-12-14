import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../../index.css';
import { useCartContext } from '../../context/CartContext';



export const CartWidget = () => {

  const {totalQuantity} = useCartContext()
  
    return  (
      <>
      <div className='carrito'>
        <ShoppingCartIcon sx = {{ fontSize: 40 } }/> 
      <span className='carrito-cantidad'>{totalQuantity()}</span>
        </div>        
        </>




 
    )
  };
  
