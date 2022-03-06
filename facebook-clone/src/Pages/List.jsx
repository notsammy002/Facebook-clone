import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'
import SearchIcon from "@material-ui/icons/Search";
import { AuthContext } from '../context/AuthContext';
import { FriendsList } from '../components/FriendsList';

export const List = () => {

  const navigate = useNavigate();
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
    <div style={{textAlign:"center",width:"100%",margin:"1rem",backgroundColor:"wheat",position:"fixed",top:"0rem"}}>I Am a Tempbar</div>
    <div className={styles.sidebar}>
    <section className={styles.heading}>
        <span className={styles.leftarrow} onClick={()=>navigate(-1)}></span>
          <section>
          <Link to="/friends"><p>Friends</p></Link>
          <h2>All Friends</h2>
          </section>
        </section>
        <section className={styles.searchbox}>
          <SearchIcon />
          <input type="text" placeholder="Search Friends" />
        </section>
        <hr />
        <h3 className={styles.caption}>{haveFriends ? friends.length : 0} friends</h3>
        <div>
          {haveFriends ? friends.map((user)=><FriendsList key={user.uid} user={user}/>): null}
        </div>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}
