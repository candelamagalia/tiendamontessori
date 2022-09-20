import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
import {ItemCount} from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import {products} from '../../assets/productos'
import { customFetch } from '../../utils/customFetch'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect (() => {
        customFetch(products)
        .then (res => {
            setLoading(false)
            setListProducts(res)
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
  
