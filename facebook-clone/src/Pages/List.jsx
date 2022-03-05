import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'
import SearchIcon from "@material-ui/icons/Search";

export const List = () => {

  const navigate = useNavigate();

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
        <h3 className={styles.caption}>{3} friends</h3>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}
