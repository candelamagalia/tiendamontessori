import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {db} from "../../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"





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
        <h1 className="item" >{greeting}</h1>
        <div className='item-list-container'>


            {loading ? 
            <ClimbingBoxLoader color="#EEB98D"/> : 
            <ItemList item={product}/>
            }

        </div>

        
        </>

    )}


export default ItemListContainer;