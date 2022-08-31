import React from "react"
import logo from "../../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import '../styles/Header.css';

const Header = () => {
    return ( < >
        <header className="container">
            <img className="imagen" src = { logo }alt = "logo" />
            <h1 className="titulo"> Tienda Montessori </h1>    
                <nav>
                        <a className="links" href = "" > Inicio </a>
                        <a className="links" href = "" > Productos </a> 
                        <a className="links" href = "" > Contacto </a> 
                </nav>  
                <div className="carrito">
                    < ShoppingCartIcon sx={{ fontSize: 40 }}/>
                </div>

        </header>
        </>
    )
};



export default Header;