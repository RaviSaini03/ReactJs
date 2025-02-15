import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div class="flex items-center justify-end h-screen w-screen pr-[7vw]" style={{background: color}} >
      <div class="flex flex-col items-center justify-center bg-white w-[6%] min-w-[60px] h-[80%] rounded-3xl p-2 shadow-lg space-y-3">
        <button class="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer" onClick={() => {setColor("blue")}} >
          Blue
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer" onClick={() => {
          setColor("green")}} >
          Green
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer" onClick={() => {
          setColor("red")}} >
          Red
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-yellow-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer" onClick={() => {
          setColor("yellow")}} >
          Yellow
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer" onClick={() => {
          setColor("pink")}} >
          Pink
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer" onClick={() => {
          setColor("orange")}} >
          Orange
        </button>
        <button class="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-2xl text-sm font-semibold transition duration-300 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer" onClick={() => {
          setColor("purple")}} >
          Amber
        </button>
      </div>
    </div>
  )
}

export default App
