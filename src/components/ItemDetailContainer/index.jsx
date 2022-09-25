import React from 'react'
import '../styles/Header.css'
import { customFetch } from '../../utils/customFetch'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect, useParams } from 'react'
import ItemDetail from '../ItemDetail'
import { products } from '../../assets/productos'




const ItemDetailContainer= () => {

    let {IdProducto} = useParams();


    const [product, setProduct] = useState({}) 
    const [loading, setLoading] = useState(true)


    useEffect (() => {

        const getItem = async () => {
            try {
                const respuesta= await fetch(products)
                const data = await respuesta.json();
                setProduct(data);

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
    }, [IdProducto])



    return (
        <>
        <div className='item-detail-container'>

            {
                loading? <ClimbingBoxLoader color="#EEB98D" />:<ItemDetail product={product}/>
            }
            
        </div>

        
        </>

    )
}

export default ItemDetailContainer