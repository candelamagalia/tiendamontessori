import '../styles/Header.css'
import { Link, useParams } from 'react-router-dom'
import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';




export function Item({product}) {




    return (
        

        <Card>
            <CardMedia
            component="img"
            height="140"
            image={product.image}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          {product.product}
        </Typography>
        <Typography variant="body2">
          {product.description}
        </Typography>
            </CardContent>
            <CardActions>
        <Link to={`producto/${product.id}`} className='item-container'>
         
        <button className='btnDetalle'>Ver detalle</button>

        </Link>
      </CardActions>


        </Card>

      

    )
}

{/* <img className="itemImagen" src={product.image} alt=""/>            
<p className='item-precio'>${product.price}</p>
<p className='item-descripcion'>{product.description}</p>
<Link to={`producto/${product.id}`} className='item-container'>

<button className='btnDetalle'>Ver detalle</button>
</Link> */}




