import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] =useState('')
function handleSubmit(e) {
  e.preventDefault();

  setTodos (currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed:
      false },
 ]);
}

  return (
    <>
     <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input type="text" id='item' />
        </div>
        <button className='Btn'>Add</button>
     </form>
     <h1 className='header'>Todo List</h1>
     <ul className='list'>
      {todos.map(todo => {
        return (
      
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
        </label>
        <button className='Btn btn-danger'>delete</button>
      </li>
      )
    })}
     </ul>
    </>
  )
}

export default App
