import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='hello' >hello world</h1>
      <div className='div' >
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </div>
      <button className='btn' onClick='' >click here</button>
       
    </>
  )
}

export default App
