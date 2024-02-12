import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import style from './App.module.css';

function App() {
  let foodItems = ["Meat", "Milk", "Vegitables", "Fruits", "Daal", "Lassi" ]
  // let foodItems = []

  return (
    <>
      <h1 className={style["heading"]}>Healthy Food</h1>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}/>
    </>
  );
}

export default App
