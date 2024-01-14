import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(0)
  
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=(e)=>{
    counter===0? setCounter(0) :  setCounter(counter-1)
  }

  return (
    <>
     <h1>React</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
     <p>{counter}</p>
    </>
  )
}

export default App
