import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../../index.css';
import { NavLink } from 'react-router-dom';
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
  
