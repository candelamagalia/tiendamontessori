import React from "react"
import logo from "../../assets/logo.png"
import { CartWidget} from "../CartWidget/CartWidget"
import { Nav } from './Nav/Nav';
import { NavLink } from "react-router-dom";
import '../../index.css'

const NavBar = () => {

    const categorias = [
        { id: 0, nombre: 'Deco', ruta:'/categoria/Deco' },
        { id: 1, nombre: 'Juegos', ruta: '/categoria/Juegos' },
        { id: 2, nombre: 'Muebles', ruta: '/categoria/Muebles' },
        { id: 3, nombre: 'Accesorios', ruta: '/categoria/Accesorios' },
    ]

    return ( < >
        <header className = "header" >
            <NavLink to="/">
                <img className = "logo" src = { logo } alt = "logo" width="200" />
            </NavLink>
        
        <Nav className='nav-bar' categorias = { categorias }/> 
        <NavLink to="cart"><CartWidget/></NavLink>
         


        </header> 
        </>
    )
};



export default NavBar;