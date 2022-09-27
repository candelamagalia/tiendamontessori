import React from 'react'
import '../styles/Header.css'
import {ItemList} from '../ItemList'
import { useState, useEffect } from 'react'
import {products} from '../../assets/productos'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams } from 'react-router-dom'




const ItemListContainer = ({greeting}) => {

    const {IdCategoria} = useParams();




    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(false)

    useEffect (() => {
        const getData = new Promise(resolve=>{
            setTimeout(() =>{
                resolve(products);
            },1000);
        });
        if(IdCategoria){
            getData.then(res=> 
                setData(res.filter(product=>product.category === IdCategoria)));

        }else {
            getData.then(res=> setData(res));
        }
        

    }, [IdCategoria])



    return  (       
        <>
        <h1 className="item" >{greeting}</h1>
        <div className='item-list-container'>
        <ItemList data={data}/>
        
        </div>

        
        </>

    )
  };

  export default ItemListContainer;
  
