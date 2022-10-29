import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
// import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'

const ItemDetail = ({ item }) => {

    const { image, product, price, stock, description, initial } = item;

    const [goToCart, setGoToCart] = useState(false);
    
    const {addProduct, carrito} = useCartContext()


    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }

    console.log(carrito)



    return (
        <>
        {item ? 
        <div className='item-list-container'>
            <div className='greeting'>
                <h1>{item.product}</h1> 
               </div>
        <div key={item.id} className='producto'>
            
            <div className='producto__img'>
            <img src={item.image} alt="" />
            
            </div>
        <div className='producto'>
            <p>{item.description}</p>
            <h5 className='item-detail-price'>${item.price}</h5>  
            {
                goToCart? 
                <div className='producto__footer'>
                    <Link to='/cart'>
                    <button className='btn'>Terminar compra</button>
                    </Link>
                </div>
                
                    :

                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>            }
                <div className='producto__footer'>
                    <Link to='/'><button className='btn'>Volver al inicio</button></Link>
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