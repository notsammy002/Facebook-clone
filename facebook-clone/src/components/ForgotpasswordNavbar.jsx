import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import styles from './forgotpassword.module.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const ForgotpasswordNavbar = () => {

    const {login} = useContext(AuthContext);
    const [data , setData] = useState({});

    const inputData = (e) =>{
       let {name,value} = e.currentTarget;
       setData({
           ...data,
           [name]:value
       })
    }

  return (
    <div className={styles.navbar}>
        <div className={styles.icondiv}>facebook</div>
        <div className={styles.logindiv}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" name='contact' size='small' variant="outlined" placeholder='Email or phone' sx={{mt:0}} value={data.name} onChange={(e)=>inputData(e)}/>
        <TextField id="outlined-basic" name='password' size='small' variant="outlined"  placeholder='Password' sx={{mt:1.2}} value={data.name} onChange={(e)=>inputData(e)}/>
        
        </Box>
        <Button variant="contained" size='small' disableElevation sx={{height:40,width: 10,mt:1.2, mb:1.3, bgcolor:"rgba(24,119,242,255)"}} onClick={()=>login(data)}>
                Log In
        </Button>
        <Link to='/login/forgot_password'>Forgotten account?</Link>
        </div>
    </div>
  )
}
