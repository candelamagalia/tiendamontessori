import { Item } from '../Item'
import '../styles/Header.css'

const ItemList = ({ item = [] }) => {



    return (item.map (product => 
    <div className='item-list'><Item key={product.id} product={product} /></div>)
    );
} 
    


export {ItemList}
