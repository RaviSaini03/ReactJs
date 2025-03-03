import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = new useDispatch()
    const logOutHandler = () => {
            authService.logout().then(() => {
            dispatch(logout())
        })
    }

  return (
    <Button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</Button>
  )
}

export default LogoutBtn