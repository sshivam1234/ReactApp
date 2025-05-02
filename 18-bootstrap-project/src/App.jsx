import { useState } from 'react'
import AppName from './component/Appname';
import AddTodo from "./component/AddTodo";
//import './App.css'

function App() {
  return <center className='todo-container'>
    <AppName />
   <AddTodo />

    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          Buy Milk
          
        </div>
        <div class="col-4">
         4/10/2023
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>


    <div class="container text-center">
      <div class="row">
        <div class="col-6">
         Go to college
        </div>
        <div class="col-4">
        5/10/2025
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </center>

}

export default App
