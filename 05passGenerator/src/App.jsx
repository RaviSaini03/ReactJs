import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("aonfaosd");

  const passwordRef = useRef(null);

  const generator = useCallback( () => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWZYZabckefghijklmnopqrstuvwxyz";

    if(numbers) char += "0123456789";
    if(characters) char += "!@#$%&(){}[]?/><_-+*";

    for(let i = 1; i <= length; i++) {
      let str = Math.floor(Math.random()*char.length + 1)
      pass += char.charAt(str)
    }
    setPassword(pass);

  }, [length, numbers, characters, setPassword])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  const increaseChar = () => {
    if(length >= 15){
      setLength(15)
    } else {
      setLength(length + 1)
    }
  }

  const decreaseChar = () => {
    if(length <= 8){
      setLength(8)
    } else {
      setLength(length - 1)
    }
  }

  useEffect(() => {
    generator();
  }, [length, characters, numbers, generator])

  return (
    <div className="bg-[#fff] w-fit h-fit p-3 rounded-2xl flex flex-col items-center justify-center gap-3">
      <h1 className="text-[1.5vw] font-bold" >Password Generator</h1>
      <div className="flex flex-row items-center justify-evenly w-fit h-20 gap-4">
        <input
        type="text"
        className="bg-[#414141] text-white w-100 h-10 p-3 tracking-wider rounded-2xl"
        value={password}
        id="password"
        readOnly
        ref={passwordRef}
        />
        <div className="flex flex-col items-center justify-center w-fit h-fit" >
          <button onClick={increaseChar} className="border-1 w-8 h-5 flex items-center justify-center hover:bg-[#ebebeb] cursor-pointer">▲</button>
          <input type="text" className="w-8 bg-[#414141] text-white flex item-center justify-center pl-3" value={length} readOnly/>
          <button onClick={decreaseChar} className="border-1 w-8 h-5 flex items-center justify-center hover:bg-[#ebebeb] cursor-pointer">▼</button>
        </div>
        <button onClick={copyPassword} className="bg-[#414141] flex items-center justify-center w-15 h-10 rounded-2xl hover:bg-[#515151] text-white cursor-pointer">Copy</button>
      </div>
      <div className="flex flex-row items-center justify-between w-70 h-fit ">
        <div className="flex flex-row items-center justify-evenly w-25 h-fit">
          <input 
          type="checkbox" 
          className="w-4 h-4 cursor-pointer" 
          onChange={() => {
            setNumbers((prev) => !prev)
          }}/>
          <p>Numbers</p>
        </div>
        <div className="flex flex-row items-center justify-evenly w-25 h-fit">
          <input 
          type="checkbox" 
          className="w-4 h-4 cursor-pointer"
          onChange={() => {
            setCharacters((prev) => !prev)
          }} />
          <p>Characters</p>
        </div>
      </div>
    </div>
  )
}

export default App
