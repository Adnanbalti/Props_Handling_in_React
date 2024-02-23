import { useState } from 'react';
import Items from './Items'

let FoodItems = ({ items }) => {
    let [activeItems, setActiveItems] = useState([])
    
    let onBuyButton = (item, event) => {
        let newItems = [...activeItems, item]
        setActiveItems(newItems)
    }

    return (
    <ul className="list-group">
        {items.map((item) => (
        <Items 
        key={item} 
        foodItem={item} 
        bought={activeItems.includes(items)} 
        BuyButtonHandler={(event) => onBuyButton(item, event)}>
        </Items>))}
    </ul>
    );
}

export default FoodItems;