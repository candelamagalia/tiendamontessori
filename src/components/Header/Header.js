import React from "react"
import logo from "../../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return ( <>
        <header style = { styles.container } >
            <img style = { styles.imagen } src = { logo } alt = "logo"/>
                <h1> Tienda Montessori </h1>   
                <nav>
                    <a style = { styles.links }href = "" > Inicio </a>  
                    <a style = { styles.links }href = "" > Productos </a>    
                    <a style = { styles.links }href = "" > Contacto </a> 
                </nav> 
                <ShoppingCartIcon />
        </header>

        </>
    )
};

const styles = {
    container: {
        display: 'flex',
        alingItems: 'center',
        justifycontent: 'space-between'

    },
    imagen: {
        width: '10%',
    },

    links: {
        padding: '10',
        margin: '10',
    },


}

export default Header;