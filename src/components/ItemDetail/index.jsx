import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {


    const onAdd = (contador) => {
    }


    return (
        <>
        {item ? 
        <div>
        <p className='titulo-item'>{item.product}</p>        
        <div key={item.id} className='item-detail'>
            <div className='item-detail1'>
            <img className='item-detail-img'src={item.image} alt="" />
            </div>
        <div className='item-detail2'>
            <span className='item-detail-description'>{item.description}</span>
            <p className='item-detail-price'>${item.price}</p>  
           <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
           <Link to='/'><button className='btnDetalle'>Volver al inicio</button></Link>
            
        </div>
        </div> 
        </div>
        :
        ""}
        </>
    )
}


export default ItemDetail