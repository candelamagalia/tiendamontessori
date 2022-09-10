import React,{useState} from 'react'

export const Usuarios = () => {
    
    const [usuarios, setUsuarios] = useState([{nombre:"Nirvana"},{nombre:"Bianca"}])

    const nicolas = {nombre: "Nicolas"};

    const agregarNicolas = () => {
        setUsuarios ([...usuarios, nicolas]);

    }
    
    return (
        <>
            <h1>Usuarios</h1>
            <button onClick={agregarNicolas}>Agregar usuario</button>
            <ul>
                {usuarios.map( (usuario,indice)=>(
                    <h2 key={indice}>{usuario.nombre}</h2>

                ))
                }
            </ul>
        </>
        
    )
}

export default Usuarios

