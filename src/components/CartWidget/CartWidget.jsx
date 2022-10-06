import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import { CartContext, useCartContext } from '../../context/CartContext';



export const CartWidget = () => {

  const {totalQuantity} = useCartContext()
  
    return  (
      <NavLink to="/cart" className = "carrito">
        <ShoppingCartIcon sx = {{ fontSize: 40 } }/> 
        <h3 className='carrito-cantidad'>{totalQuantity()}</h3>


      </NavLink>       
    )
  };
  
