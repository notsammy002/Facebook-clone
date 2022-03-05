import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Friends } from '../Pages/Friends'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from './Signup'
import {Requests} from '../Pages/Requests'
import { Suggestions } from '../Pages/Suggestions'
import {List} from '../Pages/List'
import { Birthdays } from '../Pages/Birthdays'
import { Forgotpassword } from './Forgotpassword'
import { Login2 } from './Login2'

export const RouteComponent = () => {

    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        isLoggedIn ? navigate('/friends'):navigate('/login')
    },[isLoggedIn])

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="friends/suggestions" element={<Suggestions/>}/>
        <Route path="friends/requests" element={<Requests/>}/>
        <Route path="friends/list" element={<List/>}/>
        <Route path="friends/birthdays" element={<Birthdays/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/forgot_password' element={<Forgotpassword/>}/>
        <Route path='reg' element={<Signup/>}/>
        <Route path='login2' element={<Login2/>}/>
    </Routes>
  )
}
