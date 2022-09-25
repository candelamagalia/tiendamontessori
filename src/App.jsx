import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from "./components/CartView"

const App = () => {

const dash = "Bienvenidos a Tienda Montessori";


  return ( <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={dash}/>}/>
      <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={dash}/>}/>
      <Route path='/producto/:IdProducto' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </BrowserRouter>
  </>
  )

};

export default App;