import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
import { useState, useEffect } from 'react'
import {products, getProducts} from '../../assets/productos'
import { customFetch } from '../../utils/customFetch'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams } from 'react-router-dom'




const ItemListContainer = ({greeting}) => {

    let {IdCategoria} = useParams();
    console.log(IdCategoria);

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const URL_BASE = (products)
    const URL_CATEGORY = (getProducts)

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




    // useEffect (() => {
    //     fetch(products)
    //     .then (res => {
    //         setLoading(false)
    //         setListProducts(res)
    //         })
    // }, [IdCategoria])

    // useEffect (() => {
    //     fetch(IdCategoria === undefined ? URL_BASE : `${URL_CATEGORY}${IdCategoria}`)
    //     .then ((response) => response.json())
    //     .then((data) => {
    //         setListProducts(data)
    //     })
    //     .catch((error) =>{
    //         setError(true)
    //         console.log("error");
    //         console.error(error)
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    // }, [])



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
  
