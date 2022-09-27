import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
import { useState, useEffect } from 'react'
import {products} from '../../assets/productos'
import { useParams } from 'react-router-dom'





const ItemListContainer = ({greeting}) => {

    const {IdCategoria} = useParams();

    const [product, setProduct] = useState([]);


    useEffect (() => {

        const getProduct = new Promise(resolve=>{
            setTimeout(() =>{
                resolve(products);
            },0);
        });
        if(IdCategoria){
            getProduct.then(res=> 
                setProduct(res.filter(product=>product.category === IdCategoria)));

        }else {
            getProduct.then(res=> setProduct(res));
        }
        

    }, [IdCategoria])



    return  (       
        <>
        <h1 className="item" >{greeting}</h1>
        <div className='item-list-container'>
 <ItemList item={product}/>
        </div>

        
        </>

    )
  };

  export default ItemListContainer;
  
