import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail';
import {db} from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"
import '../../index.css'



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
            {loading ? (
                <div className='item-list-container'
                style={{
                    width:"100%",
                    height:"60hv",
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop:"200px"
                }}>
                    <ClimbingBoxLoader color="#EEB98D"/> 
                </div>
            ): error ? (
                <h1>Ocurrió un error</h1>
            )
             : (
            <ItemDetail item={product}/>
            )
            }
        </>
        )
    }
    
    export default ItemDetailContainter;




