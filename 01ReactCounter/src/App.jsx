import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setcounter] = useState(0)
  const addvalue = () =>{
   setcounter(counter + 1)

  }
  const subvalue = () =>{
   setcounter(counter - 1)

  }
  
   


  return (
    <> 
      <h1>Vite + React</h1>
      <h2>Counter</h2>
      <div className="card">
        <button
        onClick={addvalue}
        >Counter is {counter}</button>
           
      </div> 
      <div className="card">
        <button
        onClick={subvalue}
        >Counter is {counter}</button>
           
      </div> 
    </>
  )
}

export default App
