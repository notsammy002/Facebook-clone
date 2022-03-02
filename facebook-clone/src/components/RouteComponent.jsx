import React, { Profiler, useEffect } from 'react'
import { useContext } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Friends } from '../Pages/Friends'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from './Signup'

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
        <Route path='/login' element={<Login/>}/>
        <Route path='reg' element={<Signup/>}/>
    </Routes>
  )
}
