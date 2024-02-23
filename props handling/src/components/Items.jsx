import style from './item.module.css'
const Items = ({ foodItem, bought, BuyButtonHandler }) => {

  // const BuyButtonHandle = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`)
  // }
  
return (
  <li className={`${style["item-list"]} list-group-item item-list ${bought && "active"}`}>
    <span className={style["kg-span"]}>{foodItem}</span>
    <button 
    className={`${style.button} btn btn-success`}
    onClick={BuyButtonHandler}>
      Buy
    </button>
  </li>
)}

export default Items;