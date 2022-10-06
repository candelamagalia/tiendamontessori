import { Item } from '../Item'
import '../styles/Header.css'

const ItemList = ({ item = [] }) => {



    return (item.map (product => 
    <div ><Item className='item-list'key={product.id} product={product} /></div>)
    );
} 
    


export {ItemList}


