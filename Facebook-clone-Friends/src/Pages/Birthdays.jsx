import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { BirthdayCard } from '../components/BirthdayCard';
import styles from '../components/friends.module.css'
import { AuthContext } from '../context/AuthContext';


export const Birthdays = () => {

  const {userdata} = useContext(AuthContext);
  const [friends,setFriends] = useState();
  const [haveFriends,setHaveFriends] = useState(false);
  
  useEffect(()=>{
    const getFriends = async (uid) =>{
      console.log(uid)
      const res = await fetch(`https://facebook-json-server.herokuapp.com/friends/?uid=${uid}`)
      const json = await res.json();
      setFriends(json[0].friendslist)
      setHaveFriends(true)
    }
    
    userdata.uid ? getFriends(userdata.uid) : console.log("no uid")
  },[userdata])

  return (<>
    <div className={styles.sidebar}>
      <section>
        <h1>Friends</h1>
      </section>
      <div>
      <Link to='/friends'>
      <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReuh}></span></span>
        Home</Link>
      </div>
      <div>
        <Link to='/friends/requests'>
          <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReu}></span></span>
          Friend requests
          <span className={styles.arrowsection}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/suggestions'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMRe}></span></span>
          Suggestions
          <span className={styles.arrowsection2}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/list'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMR}></span></span>
          All Friends
          <span className={styles.arrowsection3}><span className={styles.arrow}></span></span>
          </Link>
      </div>
      <div>
        <Link to='/friends/birthdays'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzM}></span></span>
          Birthdays</Link>
      </div>
    </div>
    <div className={styles.content}>
      {haveFriends ? friends.map((user)=><BirthdayCard key={user.uid} user={user}/>) : null}
    </div>
  </>
  )
}
