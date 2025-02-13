import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1)
  }

  const removeCounter = () => {
    if(counter <= 0){
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h2> Ravi Saini</h2>
      <p>Counter count = {counter}</p>
      <button onClick={addCounter} >Add Counter</button>
      <br />
      <button onClick={removeCounter}>Remove Counter</button>
    </>
  )
}

export default App
