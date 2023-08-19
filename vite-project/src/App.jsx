import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input type="text" id='item' />
        </div>
        <button className='Btn'>Add</button>
     </form>
     <h1 className='header'>Todo List</h1>
     <ul>
      <li>
        <label>
          <input type="checkbox" />
          item1
        </label>
        <button className='Btn btn-danger'>delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          item2
        </label>
         <button className='Btn btn-danger'>delete</button>
      </li>
     </ul>
    </>
  )
}

export default App
