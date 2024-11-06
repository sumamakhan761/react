import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  let addValue = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // idher sb counter ko hi update kr rhe hai ager hum expect kre counter 1 hai to onclick pe 4 nhi hoga 2 hi hoga bcz use effect bataches mai bharta hai ek saath is wajh se ek baari mai ek hi kaam hota hai isliye hum fetch function ka use krte hai .

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)//using this prevsounter updated state ko fetch krke mangwai hai 

  }
  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value :{counter}</h2>
      <button
        onClick={addValue}
      >
        Add Value {counter}
      </button>
      <button onClick={removeValue}>
        Remove Value {counter}
      </button>
    </>
  )
}

export default App
