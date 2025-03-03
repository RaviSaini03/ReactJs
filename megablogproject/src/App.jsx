import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {Outlet} from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser() 
        .then((userData) => {

          if(userData){
            dispatch(login({userData}))
          } else {
            dispatch(logout())
          }

        })
        .finally(() => {setLoading(false)})
      

    },[])
    

  if(!loading) {
    return <div className="min-h-screen min-w-screen flex flex-wrap flex-col items-center justify-center text-2xl text-white bg-gray-800">
      <Header/>
      <main>
       Todo:  <Outlet/>
      </main>
      <Footer/>
    </div>
  } else {
    return null
  }
}

export default App
