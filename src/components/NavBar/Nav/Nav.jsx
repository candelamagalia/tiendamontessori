import React from 'react'
import { NavLink } from 'react-router-dom'


export const Nav = ({ categorias }) => {
    return ( 
        <nav className='nav'>
            {categorias.map( (categoria) => {
                return <NavLink className="links" key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
                
            })}
        </nav>
    )
} 

