import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../components/friends.module.css'
import { SuggestionList } from '../components/SuggestionList';
import { AuthContext } from '../context/AuthContext';

export const Suggestions = () => {

  const navigate = useNavigate();
  const {userdata} = useContext(AuthContext);
  const [suggest,setSuggest] = useState();
  const [haveSuggestion,setHaveSuggestion] = useState(false);
  
  useEffect(()=>{
    const getsuggestion = async (uid) =>{
      const res = await fetch(`https://facebook-json-server.herokuapp.com/friends/?uid=${uid}`)
      const json = await res.json();
      setSuggest(json[0].suggestion)
      setHaveSuggestion(true)
    }

    userdata.uid ? getsuggestion(userdata.uid) : console.log("no uid")
  },[userdata])

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
        <div>
          {haveSuggestion ? suggest.map((user)=><SuggestionList key={user.uid} user={user}/>):null}
        </div>
    </div>
    <div className={styles.content}>
     Show me some profile
    </div>
  </>)
}