import React,{createContext} from 'react'
import { useState,useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
   const [isLoggedIn, setIsLoggedIn] = useState();

   useEffect(()=>{
       let json = localStorage.getItem("facebook-clone")
       json = JSON.parse(json);
       json.loginStatus === "true" ? setIsLoggedIn(true) : setIsLoggedIn(false)
   },[])

   const setLogin = () =>{
        setIsLoggedIn(true)
        const data = JSON.stringify({loginStatus:"true"});
        localStorage.setItem("facebook-clone",data)
        console.log(localStorage)
   }

   const login = ({contact,password}) =>{
       const validate = async () =>{
            const res = await fetch(`https://facebook-json-server.herokuapp.com/users/?_contact=${contact}`)
            const json = await res.json();
            console.log(json)
            password === json.password ? setLogin() : setIsLoggedIn(false)
       }
       console.log(contact,password)
       validate();
   }

   const logout = ()=>{
    setIsLoggedIn(false)
    const data = JSON.stringify({loginStatus:"false"});
    localStorage.setItem("facebook-clone",data)
    console.log(localStorage)
   }

   const signup = async (data) =>{
       const res = await fetch('https://facebook-json-server.herokuapp.com/users',{
           method: 'POST',
           headers:{
               'Content-type' : 'application/json'
           },
           body: JSON.stringify(data)
       })
       const json = await res.json();
       console.log('Success')
   }

  return (
    <AuthContext.Provider value={{login,isLoggedIn,signup,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
