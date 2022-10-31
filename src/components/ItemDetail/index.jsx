import React, {useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'

const ItemDetail = ({ item }) => {

    const { image, product, price, stock, description, initial } = item;

    const [goToCart, setGoToCart] = useState(false);
    
    const {addProduct} = useCartContext()


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }




    return (
        <>
        {item ? 
        <div className='item-list-container'>
            <div className='greeting'>
                <h1>{item.product}</h1> 
            </div>
            <div key={item.id} className='item__detail'>

                <div className='item__detail__img'>
                <img src={item.image} alt="" />

                </div>
            

                <div className='item__detail__description'>
                    <p>{item.description}</p>
                    <h5 className='item-detail-price'>${item.price}</h5>  
            {
                goToCart? 
                        <div className='btn__volver'>
                        <Link to='/cart'>
                        <button className='btn'>Terminar compra</button>
                        </Link>
                        </div>
                
                :
                
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>            }
                            <div className='btn__volver'>
                                <Link to='/'><button className='btn'>Volver</button></Link>
                            </div>
                </div>
           
           
                
            </div> 
        </div>
        :
        ""}
        </>
    )
}


export default ItemDetail