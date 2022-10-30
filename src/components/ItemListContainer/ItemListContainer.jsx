import React from 'react'
// import '../styles/Header.css'
import {ItemList} from '../ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {db} from "../../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import '../../index.css'
import arcoiris2 from '../../assets/arcoiris2.jpeg'





const ItemListContainer = ({greeting}) => {

    const {IdCategoria} = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);


    useEffect (() => {

        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('category', '==', `${IdCategoria}`))
        let url= (IdCategoria === undefined ? productsCollection : q)
        getDocs(url)
        .then((data)=>{
            const lista = data.docs.map((product)=>{
                return {
                    ...product.data(),
                    id: product.id

                }
            })
            setProduct(lista);

        })
        .catch((e)=>{setError(true);})
        .finally(()=>{
            setLoading(false)
        })
},[IdCategoria])


    return  (       
        <>
        
        <div className='item-list-container'>
            <div className='greeting'>
                        <h1>{greeting}</h1>
            <img src={arcoiris2} alt="Tienda Montessori" />
            </div>

            {loading ? (
                <div 
                style={{
                    width:"100%",
                    height:"100hv",
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <ClimbingBoxLoader color="#EEB98D"/> 
                </div>
            ): error ? (
                <h1>Ocurrió un error</h1>
            )
             : (
                <div className='item-list-container-2'>
                    <ItemList item={product}/>
                </div>
            
            )
            }

        </div>

        
        </>

    )}


export default ItemListContainer;