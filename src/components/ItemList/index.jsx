import { Item } from '../Item'
import '../styles/Header.css'

const ItemList = ({ data = [] }) => {
    return (data.map (product => <Item key={product.id} info={product} />)
    );
} 
    


export {ItemList}


        // <>
        // <div className='item-list-container'>
            
        // </div>
        // </>