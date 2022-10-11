import React from 'react'
import '../styles/Header.css'
import { products } from '../../assets/productos'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail';
import { customFetch } from '../../utils/customFetch'
import {db} from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"



const ItemDetailContainter = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    const {IdProducto} = useParams();

    useEffect (()=> {
        const productCollection = collection(db, 'products');
        const refDoc = doc(productCollection, IdProducto);
        getDoc(refDoc)
        .then((result)=>{
            setProduct(
                {
                    id:result,
                    ...result.data()
                }
            )
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false)
        })
        
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




