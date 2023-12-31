import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] =useState([])
function handleSubmit(e) {
  e.preventDefault();
    if (newItem.trim() !== ''){
      setTodos (currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed:
      false },
     ]);
     setNewItem('');
    }
}

  return (
    <>
     <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input type="text" id='item' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        </div>
        <button className='Btn' type='submit' >Add</button>
     </form>
     <h1 className='header'>Todo List</h1>
     <ul className='list'>
      {todos.map(todo => {
        return (
      
      <li key={todo.id}>
        {todo.title}
        <label>
          <input type="text" id='item' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        </label>
        <button className='Btn btn-danger' onClick={() => setTodos(currentTodos=> currentTodos.filter(t=> t.id!== todo.id))} >delete</button>
      </li>
      )
    })}
     </ul>
    </>
  )
}

export default App
