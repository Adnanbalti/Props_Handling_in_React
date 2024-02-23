import style from './FoodInput.module.css'

const FoodInput = ({keyDownHandler}) => {
    // const changeHandler = (event) => {
    //     console.log(event.target.value)
    // }
    
    return <>
    <input type="text" placeholder="Enter food item here" className={style.foodInput} onKeyDown={keyDownHandler} />
    </>
}

export default FoodInput;