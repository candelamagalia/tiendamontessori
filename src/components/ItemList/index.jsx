import { Item } from '../Item'
import '../../index.css'

const ItemList = ({ item = [] }) => {



    return (item.map (product => 
    <div key={product.id}><Item className='item-list' product={product} /></div>)
    );
} 
    


export {ItemList}


