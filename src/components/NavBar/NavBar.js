import React from "react"
import logo from "../../assets/logo.png"
import { CartWidget} from "../CartWidget/CartWidget"
import '../styles/Header.css'
import { Nav } from './Nav/Nav';

const NavBar = ({ nombre, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'Inicio' },
        { id: 1, nombre: 'Productos' },
        { id: 2, nombre: 'Contacto' },

    ]

    return ( < >
        <header className = "container" >
        <img className = "imagen" src = { logo } alt = "logo" />
        <h1 className = "titulo" > Montessori Deco</h1>     
        <Nav categorias = { categorias }/> 
        <CartWidget/> 


        </header> 
        </>
    )
};



export default NavBar;