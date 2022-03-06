import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './cards.module.css'
import { CardActionArea } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

export const Cards = ({user,type}) => {
    const [userDetails,setUserDetails] = useState();
    const {userdata} = useContext(AuthContext);

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
    <Card sx={{ maxWidth: 200,height: 280,boxShadow:5,m:1}}>
      <CardActionArea>
        <img className={styles.profilepic} src={userDetail.profile}/>
        <CardContent>
          <h3 className={styles.name}>{userDetail.firstname} {userDetail.lastname}</h3>
          {type !== 'friend' ? (
            <div className={styles.buttondiv}>
              <button className={styles.requestbutton} style={{backgroundColor:'#1378fc',color:"white"}}>Add Friend</button>
              <button className={styles.requestbutton} onClick={handledelete}>Remove</button>
            </div>
          ):(
            <div className={styles.buttondiv}>
              <button className={styles.requestbutton} style={{backgroundColor:'#1378fc',color:"white"}}>Confirm</button>
              <button className={styles.requestbutton} onClick={handledelete}>Delete</button>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  ):null
}
