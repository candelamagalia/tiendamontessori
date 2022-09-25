import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
// import {ItemCount} from '../ItemCount/ItemCount'
import { useState, useEffect, } from 'react'
import {products} from '../../assets/productos'
import { customFetch } from '../../utils/customFetch'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState


    useEffect (() => {
        customFetch(products)
        .then ((response) => response.json())
        .then((data) => {
            setListProducts(data)
        })
        .catch((error) =>{
            setError(true)
            console.log("error");
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])



    return  (       
        <>
        <h1 className="item" >{greeting}</h1>
        <div className='item-list-container'>
        {loading ? <ClimbingBoxLoader color="#EEB98D" /> : <ItemList listProducts={listProducts}/>}
        
        </div>

        
        </>

    )
  };

  export default ItemListContainer;
  
