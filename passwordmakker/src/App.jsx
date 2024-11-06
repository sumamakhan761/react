import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // userCallback -> memoization -> optimized the code
  // useCallback is a React Hook that lets you cache a funciton defination between re-render chache mean memory mai load rakh lo 

  // useEffect on load a pages first execute this.

  // useRef is givea refferance

  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]) // usecallback in mai se koi bhi change hoga toh optimaized krke return krega setpossword isliye so that optimized is why not possword bcz of the possword when we get so the infinitly time they optimaized we want every action after the paswword optimized that why 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectRange(0, 999) //is range tak ka hi select hoga 
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className=' w-full max-w-lg h-44 mx-auto rounded-lg shadow-md px-4 py-3  my-8 
    bg-gray-700 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'
          >copy</button>

        </div>
        <div className='flex text-md gap-x-8 justify-center'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
