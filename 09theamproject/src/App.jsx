import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const defaultTheme = document.querySelector('html');
    defaultTheme.classList.remove("light", "dark")

    defaultTheme.classList.add(themeMode)

  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-400 ">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4 w-[98.7vw] h-fit pl-5 pr-5 p-2 bg-gray-400  dark:bg-gray-800">
              <h1 className='flex items-center justify-center text-2xl font-bold dark:text-white'>RaviMart</h1>
              <div className='flex items-center justify-between w-[30vw]'>
                <h3 className='flex items-center justify-center font-bold dark:text-white '>Home</h3>
                <h3 className='flex items-center justify-center font-bold dark:text-white'>About</h3>
                <h3 className='flex items-center justify-center font-bold dark:text-white'>Contact</h3>
                <h3 className='flex items-center justify-center font-bold dark:text-white'>Cart</h3>
              </div>
              <ThemeBtn/>
          </div>

          <div className="w-80vw h-fit p-[5vw]">
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
