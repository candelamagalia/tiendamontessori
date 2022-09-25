import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Nav = ({ categorias }) => {
    return ( 
        <nav className='nav'>
            {categorias.map( (categoria) => {
                return <Link className="links" key={categoria.id} to={categoria.ruta}>{categoria.nombre}</Link>
                
            })}
        </nav>
    )
} 

