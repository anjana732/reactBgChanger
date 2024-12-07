
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{background: color}}>
        <div className="flex flex-wrap justify-center px-2 bg-white bottom-12">
          <button onClick={()=> setColor("red")} style={{background: "red"}}> Red</button>
          <button onClick={()=> setColor("green")} style={{background: "green"}}> Green</button>
          <button onClick={()=> setColor("blue")} style={{background: "blue"}}> Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
