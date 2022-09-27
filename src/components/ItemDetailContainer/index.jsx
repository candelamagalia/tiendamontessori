import React from 'react'
import '../styles/Header.css'
import { products } from '../../assets/productos'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail';

const ItemDetailContainer= () => {

    const[data, setData] = useState({});
    // const [loading, setLoading] = useState(true)
    const {IdProducto} = useParams

    // useEffect(()=>{
    //     const getData = new Promise (resolve =>{
    //         setTimeout(() => {
    //             resolve(products);
    //         },1000);
    //     });
    //     getData.then(res =>setData(res));
    // },[]);



    useEffect(()=>{
    const getData = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products);

        },1000);
    });
    if(IdProducto){
    getData.then(res=> 
        setData(res[parseInt(IdProducto)]));
    }else {
        getData.then(res=> setData(res));
    }

},[IdProducto])



return (

    <>
<div className='item-detail-container'>  

                <ItemDetail data={data}/>
</div>
    
</>

);
}


export default ItemDetailContainer





// const ItemDetailContainer= () => {

//     let {IdProducto} = useParams();


//     const [product, setProduct] = useState({}) 
//     const [loading, setLoading] = useState(true)


//     useEffect (() => {

//         const getItem = async () => {
//             try {
//                 const res= await customFetch(products)
//                 setProduct(res[0]);

//             }

//             catch (error) {
//                 console.log(error);}
//             finally{
//                 setLoading(false)
//             }
//         }

//         getItem()
        


            
//         // customFetch(products)
//         // .then (res => {
//         //     setLoading(false)
//         //     setListProducts(res)
//         //     })
//     }, [IdProducto])



//     return (
//         <>
//         <div className='item-detail-container'>

//             {
//                 loading? <ClimbingBoxLoader color="#EEB98D" />:<ItemDetail product={product}/>
//             }
            
//         </div>

        
//         </>

//     )
// }