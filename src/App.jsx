import React from 'react';
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/CartView"  
import CartProvider from './context/CartContext';
import Form from "./components/Form";
import '../src/index.css'

export const CartContext = React.createContext([]);

const App = () => {

const dash = "Bienvenidos a Tienda Montessori";


  return ( <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={dash}/>}/>
      <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={dash}/>}/>
      <Route path='/producto/:IdProducto' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path= '/formulario' element={<Form/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  </>
  )

};

export default App;