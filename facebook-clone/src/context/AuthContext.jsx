import React,{createContext} from 'react'
import { useState,useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
   const [isLoggedIn, setIsLoggedIn] = useState();
   const [userdata,setUserdata] = useState();

   useEffect(()=>{
       let json = localStorage.getItem("facebook-clone")
       json = JSON.parse(json);
       json.loginStatus === "true" ? setIsLoggedIn(true) : setIsLoggedIn(false)
   },[])

   const setLogin = (userdata) =>{
        setIsLoggedIn(true)
        setUserdata(userdata)
        const data = JSON.stringify({loginStatus:"true"});
        localStorage.setItem("facebook-clone",data)
   }

   const login = ({contact,password}) =>{
       const validate = async () =>{
            const res = await fetch(`https://facebook-json-server.herokuapp.com/users?contact=${contact}`)
            const json = await res.json();
            console.log(json)
            password === json[0].password ? setLogin(json[0]) : setIsLoggedIn(false)
       }
       validate();
   }

   const logout = ()=>{
    setIsLoggedIn(false)
    const data = JSON.stringify({loginStatus:"false"});
    localStorage.setItem("facebook-clone",data)
    console.log(localStorage)
   }

   const forgotpassword = async ({contact,password}) =>{
    const res = await fetch(`https://facebook-json-server.herokuapp.com/users?contact=${contact}`,{
        method: 'PATCH',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({password:password})
    })
    const json = await res.json();
    console.log(json)
   }

   const signup = async (data) =>{
       console.log('hi')
       const res = await fetch('https://facebook-json-server.herokuapp.com/users',{
           method: 'POST',
           headers:{
               'Content-type' : 'application/json'
           },
           body: JSON.stringify(data)
       })
       const json = await res.json();
       setLogin(json)
   }

  return (
    <AuthContext.Provider value={{login,isLoggedIn,signup,logout,forgotpassword,userdata}}>
        {children}
    </AuthContext.Provider>
  )
}
