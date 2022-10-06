import React, {useState} from 'react'
// import Swal from 'sweetalert2'

export const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador]= useState(initial);

    const clickAgregar = () => {
        if (contador < stock) {
            setContador (contador + 1);
        }
    }
    const clickQuitar = () => {
        if (contador > initial) {
            setContador (contador - 1);
        }           
    }

    const reset = () => {
        setContador (1);
        onAdd (contador);
        if (contador>stock) {
            setContador(contador + 1)
        } 
    }

    return (
        <>
            <div className="itemCount">                
                    <div className='botonesSumarRestar'>                
                        <button className="btnSumar" onClick= {clickAgregar}>+</button>
                            <h1 className="contador">{contador}</h1>
                        <button className="btnRestar" onClick={clickQuitar}>-</button> 
                    </div>
                <button className="btnAgregar" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
            </div>         
        </>
    )
}

export default ItemCount;