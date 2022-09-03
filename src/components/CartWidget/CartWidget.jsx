import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../styles/Header.css';

export const CartWidget = () => {
    return  (       
    <div className = "carrito" >
    <ShoppingCartIcon sx = {{ fontSize: 40 } }/> 
    </div>
    )
  };
  
