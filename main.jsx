import './main.css'
import './src/src.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import CityList from './src/CityList/CityList'
import Clock from './src/Clock/Clock'
import DropDown from './src/DropDown/DropDown'
import IncDec from './src/IncDec/IncDec'
import ToDoList from './src/ToDoList/ToDoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityList />
    <Clock />
    <DropDown />
    <IncDec />
    <ToDoList />
  </React.StrictMode>,
)
