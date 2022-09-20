import '../styles/Header.css'
// import {ItemCount} from '../ItemCount/ItemCount'


const Item = ({product}) => {

    return (

        <>
        <div className='item-container'>
            <p>{product.product}</p>
            <img className="itemImagen" src={product.image} />
            <p>${product.price}</p>
            <button className='btnDetalle'>Ver detalle</button>
            {/* <ItemCount initial={1} stock={5} onAdd={() => {}}/> */}

        </div>
        
        
        </>

    )
}

export {Item} 