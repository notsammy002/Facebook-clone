import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../components/friends.module.css'
import { Link, Outlet } from 'react-router-dom';

export const Friends = () => {
  const {logout} = useContext(AuthContext);
  return (<>
    <div style={{textAlign:"center",width:"100%",margin:"1rem",backgroundColor:"wheat",position:"fixed",top:"0rem"}}>I Am a Tempbar</div>
    <div className={styles.sidebar}>
      <div>
        <h1>Friends</h1>
      </div>
      <div>
      <Link to='/friends'>Home</Link>
      </div>
      <div>
        <Link to='/friends/requests'>Friend requests</Link>
      </div>
      <div>
        <Link to='/friends/suggestions'>Suggestions</Link>
      </div>
      <div>
        <Link to='/friends/list'>All Friends</Link>
      </div>
      <div>
        <Link to='/friends/birthdays'>Birthdays</Link>
      </div>
    </div>
    <div className={styles.content}>
    </div>
    
    <button onClick={()=>logout()}>Logout</button>
  </>)
}
