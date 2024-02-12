import style from './item.module.css'
const Items = ({ foodItem }) => {
  
return (
<>
  <li className= {`${style["item-list"]} list-group-item item-list`}>{foodItem}</li>
</>
)
}

export default Items;