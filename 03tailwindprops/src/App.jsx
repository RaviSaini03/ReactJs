import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-red-400 text-blue p-4 rounded-xl'>Ravi Saini</h1>
    </>
  )
}

export default App
