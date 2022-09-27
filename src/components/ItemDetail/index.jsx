import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../styles/Header.css'

const ItemDetail = ({ data }) => {


    const onAdd = (contador) => {
    }

    return (

        <>
        <p >{data.product}</p>
        <div key={data.id} className='item-detail'>
            <div className='item-detail1'>
            <img className='item-detail-img'src={data.image} alt="" />
            </div>
        <div className='item-detail2'>
            <span className='item-detail-description'>{data.description}</span>
            <p className='item-detail-price'>${data.price}</p>  
           <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            
        </div>
        </div> 
        </>
    )

}

export default ItemDetail