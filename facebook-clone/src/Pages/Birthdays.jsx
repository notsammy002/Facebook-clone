import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/friends.module.css'

export const Birthdays = () => {
  return (<>
    <div style={{textAlign:"center",width:"100%",margin:"1rem",backgroundColor:"wheat",position:"fixed",top:"0rem"}}>I Am a Tempbar</div>
    <div className={styles.sidebar}>
      <div>
        <h1>Friends</h1>
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
      {/* birthdatycard */}
    </div>
  </>
  )
}
