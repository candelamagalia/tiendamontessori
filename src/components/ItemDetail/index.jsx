import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../styles/Header.css'

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {


    }

    return (
        <>
        <p >{producto.title}</p>
        <div className='item-detail'>
            <div className='item-detail1'>
            <img className='item-detail-img'src={producto.image} alt="" />
            </div>
        <div className='item-detail2'>
            <span className='item-detail-description'>{producto.description}</span>
            <p className='item-detail-price'>${producto.price}</p>  
           <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            
        </div>
            
        </div>
        
            
        </>
    )

}

export default ItemDetail