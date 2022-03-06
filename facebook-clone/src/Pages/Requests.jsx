import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { RequestList } from '../components/RequestList'


export const Requests = () => {

  const navigate = useNavigate();
  const {userdata} = useContext(AuthContext);
  const [request,setRequest] = useState();
  const [haveRequests,setHaveRequests] = useState(false);
  
  useEffect(()=>{
    const getrequests = async (uid) =>{
      console.log(uid)
      const res = await fetch(`https://facebook-json-server.herokuapp.com/friends/?uid=${uid}`)
      const json = await res.json();
      setRequest(json[0].requests)
      setHaveRequests(true)
    }

    userdata.uid ? getrequests(userdata.uid) : console.log("no uid")
  },[userdata])

  return (<>
    <div style={{textAlign:"center",width:"100%",margin:"1rem",backgroundColor:"wheat",position:"fixed",top:"0rem"}}>I Am a Tempbar</div>
    <div className={styles.sidebar}>
      <section className={styles.heading}>
      <span className={styles.leftarrow} onClick={()=>navigate(-1)}></span>
        <section>
        <Link to="/friends"><p>Friends</p></Link>
        <h2>Friend requests</h2>
        </section>
      </section>
      <hr />
      <h4 className={styles.caption}>{haveRequests ? request.length : 0} friend requests</h4>
      <div>
        {haveRequests ? request.map((user)=> <RequestList key={user.uid} user={user}/>): null}
      </div>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}
