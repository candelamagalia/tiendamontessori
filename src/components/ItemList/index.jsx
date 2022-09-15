import { Item } from '../Item'
import '../styles/Header.css'

const ItemList = ({ listProducts }) => {
    return (
        <>
        <div className='item-list-container'>
            {listProducts.map((prod, i) => <Item key={`${prod.product}-${i}`} product = {prod} /> )}
        </div>
        </>
    )
}


export {ItemList}