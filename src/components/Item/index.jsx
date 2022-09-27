import '../styles/Header.css'
import { Link, useParams } from 'react-router-dom'
// import {ItemCount} from '../ItemCount/ItemCount'

export function Item({data}) {


    return (
        <>
        <img className="itemImagen" src={`../../assets/${data.image}`} alt=""/>
            <p>{data.product}</p>
            <p>${data.price}</p>
        <Link to={`producto/${data.id}`} className='item-container'>
         
            <button className='btnDetalle'>Ver detalle</button>
        </Link>
        {/* <ItemCount initial={1} stock={5} onAdd={() => {}}/> */}

        </>

      

    )
}


//  <>
// <div className='item-container'>
//     <p>{product.product}</p>
//     <img className="itemImagen" src={product.image} />
//     <p>${product.price}</p>

//     <Link to="IdProducto"><button className='btnDetalle'>Ver detalle</button></Link>
    
//     {/* <ItemCount initial={1} stock={5} onAdd={() => {}}/> */}

// </div>


// </> 