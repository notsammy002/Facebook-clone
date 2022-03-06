import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import styles from './birthdaycard.module.css'

export const BirthdayCard = ({user}) => {

   const [userDetails,setUserDetails] = useState();

    useEffect(()=>{
        const getdetail = async (uid) =>{
          console.log(uid)
          const res = await fetch(`https://facebook-json-server.herokuapp.com/users/?uid=${uid}`)
          const json = await res.json();
          setUserDetails(json[0])
        }
        
        user.uid ? getdetail(user.uid) : console.log("no uid")
      },[user])

      let userDetail = userDetails

  return userDetail ?(
    <Card sx={{ maxWidth: 600,height:180, ml:35,boxShadow:5,borderRadius:3}}>
        <CardActionArea>
        <CardContent className={styles.details}>
            <h3>{userDetail.month}</h3>
            <h3>{userDetails.firstname} {userDetail.lastname}</h3>
          <img className={styles.profilepic} src={userDetail.profile}/>
        </CardContent>
        </CardActionArea>
    </Card>
  ):null
}
