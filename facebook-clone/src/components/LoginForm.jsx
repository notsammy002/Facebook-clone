import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AuthContext } from '../context/AuthContext';

export const LoginForm = () => {

  const {login} = useContext(AuthContext);
    const [data , setData] = useState({});

    const inputData = (e) =>{
       let {name,value} = e.currentTarget;
       setData({
           ...data,
           [name]:value
       })
    }

  return (<Box
    sx={{
        width: 350,
        maxWidth: '100%',
    }}
    >
        <TextField id="outlined-basic" name='contact' fullWidth variant="outlined" placeholder='Email address or phone number' sx={{mt:0}} value={data.name} onChange={(e)=>inputData(e)}/>
        <TextField id="outlined-basic" name='password' fullWidth variant="outlined"  placeholder='Password' sx={{mt:1.2}} value={data.name} onChange={(e)=>inputData(e)}/>
        <Button variant="contained" disableElevation fullWidth sx={{height:50, mt:1.2, mb:2, bgcolor:"rgba(24,119,242,255)"}} onClick={()=>login(data)}>
            Log In
        </Button>
    </Box>
  )
}
