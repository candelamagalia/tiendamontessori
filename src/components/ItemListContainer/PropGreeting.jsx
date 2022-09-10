import React from 'react'
import '../styles/Header.css';

const ItemListContainer = ({greeting}) => {
    return  (       
        <>
        <h1 className="item" >{greeting}</h1>
        </>

    )
  };

  export default ItemListContainer;
  
