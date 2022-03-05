import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'

export const Suggestions = () => {

  const navigate = useNavigate();

  return (<>
    <div style={{textAlign:"center",width:"100%",margin:"1rem",backgroundColor:"wheat",position:"fixed",top:"0rem"}}>I Am a Tempbar</div>
    <div className={styles.sidebar}>
      <section className={styles.heading}>
        <span className={styles.leftarrow} onClick={()=>navigate(-1)}></span>
          <section>
          <Link to="/friends"><p>Friends</p></Link>
          <h2>Suggestions</h2>
          </section>
        </section>
        <h3 className={styles.caption}>People you may know</h3>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}