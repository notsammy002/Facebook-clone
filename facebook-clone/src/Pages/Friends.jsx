import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Friends = () => {
  const {logout} = useContext(AuthContext);
  return (<>
    <div>Friends</div>
    <button onClick={()=>logout()}>Logout</button>
  </>)
}
