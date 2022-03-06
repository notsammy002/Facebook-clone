import React, { useEffect, useState } from 'react'
import styles from './list.module.css'

export const RequestList = ({user}) => {

  const [userDetails,setUserDetails] = useState();

    useEffect(()=>{
        const getdetail = async (uid) =>{
          const res = await fetch(`https://facebook-json-server.herokuapp.com/users/?uid=${uid}`)
          const json = await res.json();
          setUserDetails(json[0])
        }
        
        user.uid ? getdetail(user.uid) : console.log("no uid")
      },[user])


      const handledelete = () =>{
        
        userDetail = false;  //temp delete function
        setUserDetails();
      }


      let userDetail = userDetails

  return userDetail ?(
    <div className={styles.card}>
          <img className={styles.profilepic} src={userDetail.profile}/>
          <div>
          <p>{userDetails.firstname} {userDetail.lastname}</p>
          <button className={styles.requestbutton} style={{backgroundColor:'#1378fc',color:"white"}}>Confirm</button>
          <button className={styles.delete, styles.requestbutton} onClick={handledelete}>Delete</button>
          </div>
    </div>
  ):null
}