import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import style from './App.module.css';
import Container from './components/Container';
import FoodInput from './components/FoodInput'
import { useState } from 'react';

function App() {

  let [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === 'Enter'){
      let newFoodItems = event.target.value
      let newItems = [...foodItems, newFoodItems]
      setFoodItems(newItems);
      }
    };

  return (
    <Container>
      <h1 className={style["heading"]}>Healthy Food</h1>
      <FoodInput keyDownHandler={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}/>
    </Container>
  );
}

export default App
