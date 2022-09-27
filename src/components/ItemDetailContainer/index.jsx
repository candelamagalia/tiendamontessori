import React from 'react'
import '../styles/Header.css'
import { products } from '../../assets/productos'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail';
import { customFetch } from '../../utils/customFetch'



const ItemDetailContainter = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);

    const {IdProducto} = useParams();

    useEffect (()=> {
        const getItem = async () =>{ 
            try{
                setLoading(true)
                const res = await customFetch(products)
                if (IdProducto){
                    setProduct(res[parseInt(IdProducto)]);
                }else{
                    setProduct(res);
                }
            }
            catch(err){
                console.error("No se encontraron productos.", err);
            }
            finally{
                setLoading(false);
            }
        }
        getItem();

    },[IdProducto])

    return (
        <>
        {loading ? 

        <ClimbingBoxLoader color="#EEB98D"/> 
        :
        <ItemDetail item={product}/> 
        }
        </>
        )
    }
    
    export default ItemDetailContainter;




