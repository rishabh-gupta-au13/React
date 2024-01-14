import { useState } from 'react'

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 bg-gray-100" style={{ margin: '0', padding: '0', backgroundColor:colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "red" }} onClick={() => setColour("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "green" }} onClick={() => setColour("green")} >Green</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "blue" }} onClick={() => setColour("blue")} >Blue</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "yellow" }} onClick={() => setColour("yellow")} >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
