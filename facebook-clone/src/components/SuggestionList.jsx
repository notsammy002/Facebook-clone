import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './list.module.css'
export const SuggestionList = ({user}) => {

    const [userDetails,setUserDetails] = useState();
    const {userdata} = useContext(AuthContext)

    useEffect(()=>{
        const getdetail = async (uid) =>{
          const res = await fetch(`https://facebook-json-server.herokuapp.com/users/?uid=${uid}`)
          const json = await res.json();
          setUserDetails(json[0])
        }
        
        user.uid ? getdetail(user.uid) : console.log("no uid")
      },[user])

      let userDetail = userDetails

      const handledelete = () =>{
        
        userDetail = false;  //temp delete function
        setUserDetails();
      }

  return userDetail ?(
    <div className={styles.card}>
          <img className={styles.profilepic} src={userDetail.profile}/>
          <div>
          <p>{userDetails.firstname} {userDetail.lastname}</p>
          <button className={styles.requestbutton} style={{backgroundColor:'#1378fc',color:"white"}}>Add Friend</button>
          <button className={styles.requestbutton} onClick={handledelete}>Remove</button>
          </div>
    </div>
  ):null
}
