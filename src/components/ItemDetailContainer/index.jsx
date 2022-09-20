import React from 'react'
import '../styles/Header.css'
import { customFetch } from '../../utils/customFetch'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'




const ItemDetailContainer= () => {


    const [producto, setProducto] = useState({}) 
    const [loading, setLoading] = useState(true)


    useEffect (() => {

        const getItem = async () => {
            try {
                const respuesta= await fetch('https://fakestoreapi.com/products/1')
                const data = await respuesta.json();
                setProducto(data);

            }

            catch (error) {
                console.log(error);}
            finally{
                setLoading(false)
            }
        }

        getItem()
        


            
        // customFetch(products)
        // .then (res => {
        //     setLoading(false)
        //     setListProducts(res)
        //     })
    }, [])



    return (
        <>
        <div className='item-detail-container'>

            {
                loading? <ClimbingBoxLoader color="#EEB98D" />:<ItemDetail producto={producto}/>
            }
            
        </div>

        
        </>

    )
}

export default ItemDetailContainer