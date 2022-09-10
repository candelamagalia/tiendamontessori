import React, {useState} from 'react'
import Swal from 'sweetalert2'

const MiComponente = ({stock, funcion}) => {

    const [contador, setContador]= useState(1);

    const clickAgregar = () => {
        setContador (contador + 1);
    }
    const clickQuitar = () => {
        setContador (contador - 1);
    }

    const reset = () => {
        setContador (1);
        funcion (contador);
        if (contador>stock) {
            Swal.fire('No hay más productos en stock')
        } else {
            Swal.fire(
                'Su producto ha sido agregado con éxito',
                ' ',
                'success'
              )
        }
    }

    return (
        <>
            <div className="itemCount">Mi Carrito
                <h1 className="contador">{contador}</h1>
                <div className='botonesSumarRestar'>
                <button className="btnSumar" onClick= {clickAgregar}>Agregar</button>
                    <button className="btnRestar" onClick={clickQuitar}>Quitar</button>                
                </div>
                    
            <button className="btnAgregar" onClick={reset}>Agregar al carrito</button>   
            </div>         
        </>
    )
}

export default MiComponente