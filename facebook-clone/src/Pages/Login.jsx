import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './login.module.css'
import { AuthContext } from '../context/AuthContext';
import SignupModel from '../components/SignupModel';
import { Footer } from '../components/Footer';


export const Login = () => {
    const {login} = useContext(AuthContext);
    const [data , setData] = useState({});

    const inputData = (e) =>{
       let {name,value} = e.currentTarget;
       setData({
           ...data,
           [name]:value
       })
    }

  return (<>
    <div className={styles.logindiv}>
        <div className={styles.banner}>
            <h1>facebook</h1>
            <p>Facebook helps you connect and share<br/>with the people in your life.</p>
        </div>
        <div>
            <Card sx={{ maxWidth: 400, height: 370, m:"auto"}}>
                <CardActions>
                    <CardContent>
                        <Box
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
                            <div style={{marginBottom:'1.2rem'}}>Forgotten password?</div>
                            <hr />
                            <SignupModel/>
                        </Box>
                </CardContent>
                </CardActions>
            </Card>
        </div>
  </div>
  <Footer/>
  </>)
}