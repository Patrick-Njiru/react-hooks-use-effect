import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect( () => {
    console.log("useEffect called")
    document.title = text
  }, [text]

    // // 1st argument: side effect(callback function)
    // () => console.log("useEffect called"),
    // // 2nd argument: dependencies array
    // [count]
  )

  useEffect(() => setTimeout(() => setCount(0), 5000), [])

  console.log("Component rendering");

  return (
    <div>
      <button
      onClick={() => setCount(count => count + 1)}
      >
        I've been clicked {count} times
      </button>;
      <input 
      type="text" 
      placeholder="Type away..."
      value={text}
      onChange={e => setText(e.target.value)} 
      />
      <DogPics />
    </div>
  )
}

export default App;
