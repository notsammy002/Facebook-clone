import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'
import { Link } from 'react-router-dom'

export const Requests = () => {

  const navigate = useNavigate();

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
      <h4 className={styles.caption}>{0} friend requests</h4>
      <div>
        retquestlike this <br />
        from the backend
      </div>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}
