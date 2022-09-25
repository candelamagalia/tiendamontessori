import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../styles/Header.css'

const ItemDetail = ({product}) => {

    const onAdd = (contador) => {


    }

    return (
        <>
        <p >{product.title}</p>
        <div className='item-detail'>
            <div className='item-detail1'>
            <img className='item-detail-img'src={product.image} alt="" />
            </div>
        <div className='item-detail2'>
            <span className='item-detail-description'>{product.description}</span>
            <p className='item-detail-price'>${product.price}</p>  
           <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            
        </div>
            
        </div>
        
            
        </>
    )

}

export default ItemDetail