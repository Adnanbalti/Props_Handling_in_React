import Items from './Items'

let FoodItems = ({ items }) => {

    return (
    <>
    <ul className="list-group">
        {items.map((item) => (<Items key={item} foodItem={item}></Items>))}
    </ul>
    </>
    );
}

export default FoodItems;