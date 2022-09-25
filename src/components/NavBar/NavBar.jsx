import React from "react"
import logo from "../../assets/logo.png"
import { CartWidget} from "../CartWidget/CartWidget"
import '../styles/Header.css'
import { Nav } from './Nav/Nav';
import { Link } from "react-router-dom";

const NavBar = ({ nombre, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'Deco', ruta:'/categoria/Deco' },
        { id: 1, nombre: 'Juegos', ruta: '/categoria/Juegos' },
        { id: 2, nombre: 'Muebles', ruta: '/categoria/Muebles' },
        { id: 3, nombre: 'Accesorios', ruta: '/categoria/Accesorios' },
    ]

    return ( < >
        <header className = "container" >
            <Link to="/">
                <img className = "imagen" src = { logo } alt = "logo" />
            </Link>
        
        <h1 className = "titulo" > Montessori Deco</h1>     
        <Nav categorias = { categorias }/> 
        <Link to="cart"><CartWidget/></Link>
         


        </header> 
        </>
    )
};



export default NavBar;