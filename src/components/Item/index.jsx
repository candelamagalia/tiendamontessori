import '../styles/Header.css'
import { Link, useParams } from 'react-router-dom'


export function Item({product}) {


    return (
        <>
        <img className="itemImagen" src={product.image} alt=""/>            
            <p className='item-precio'>${product.price}</p>
            <p className='item-descripcion'>{product.description}</p>
        <Link to={`producto/${product.id}`} className='item-container'>
         
            <button className='btnDetalle'>Ver detalle</button>
        </Link>

        </>

      

    )
}


