import { Link } from 'react-router-dom'
import React from 'react';
import '../../index.css'


export function Item({product}) {




    return (

      <>

      <div className='item-list-container'>

        <div className='item'>
              <div className='producto__img'>
                <img src={product.image} alt="" />
              </div>
              <div className='producto'>
                <h1>{product.product}</h1>
                <p>{product.description}</p>
              </div>
              <div className='producto__footer'>
                <Link to={`producto/${product.id}`} className='item-container'>
                <button className='btn'>Ver detalle</button>
                </Link>
              </div>
        </div>
      
      </div>
      </>

      

    )
}






