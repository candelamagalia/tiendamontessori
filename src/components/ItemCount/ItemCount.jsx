import React, {useState} from 'react'
import '../../index.css'

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


    return (
        <>
            <div className="contador">                
                    <div className='botonesSumarRestar'>                
                        <button className="btn" onClick= {clickAgregar}>+</button>
                            <h1 className="contador">{contador}</h1>
                        <button className="btn" onClick={clickQuitar}>-</button> 
                    </div>
                    <div className='agregar'>

                <button className="btn" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
                    </div>
            </div>         
        </>
    )
}

export default ItemCount;