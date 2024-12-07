
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{background: color}}>test
        <div>
          <button onClick={()=> setColor("red")}> Red</button>
          <button onClick={()=> setColor("green")}> Green</button>
          <button onClick={()=> setColor("blue")}> Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
