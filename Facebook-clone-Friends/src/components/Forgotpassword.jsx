import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ForgotpasswordNavbar } from './ForgotpasswordNavbar'
import styles from './forgotpassword.module.css'
import { Footer } from './Footer';
import { AuthContext } from '../context/AuthContext';

export const Forgotpassword = () => {

    const [data , setData] = useState({});
    const {forgotpassword} = useContext(AuthContext);
    const navigate = useNavigate();

    const inputData = (e) =>{
       let {name,value} = e.currentTarget;
       setData({
           ...data,
           [name]:value
       })
    }

  return (<>
    <div className={styles.main}>
        <ForgotpasswordNavbar/>
        <Card sx={{ maxWidth: 550, height:330, width:450, m:"auto",pt:0,position:'absolute',left:"35rem",top:"10rem",pb:0,boxShadow: 4 }}>
            <CardActions>
                <CardContent sx={{m:"auto",p:0}}>
                    <div className={styles.heading}>
                        <p>Find Your Account</p>
                    </div>
                    <hr />
                    <div className={styles.guidline}>
                        <p>
                            Please enter your email address or mobile number to search
                            <br/>for your account.
                        </p>
                        <div className={styles.loginform}>
                            <TextField id="outlined-basic" name='contact' fullWidth variant="outlined" placeholder='Email address or phone number' value={data.name} onChange={inputData} sx={{mt:0}}/>
                            {data.contact ? <TextField id="outlined-basic" name='password' fullWidth variant="outlined" value={data.name} onChange={inputData} placeholder='New password' sx={{mt:0}}/> : null }
                            
                            <div className={styles.buttondiv}>
                                <Button variant="contained" size='small' disableElevation sx={{height:50, mt:1.2, mb:2,color:'black', bgcolor:"whitesmoke"}} onClick={()=>navigate('/login2')}>
                                    Cancel
                                </Button>
                                <Button variant="contained" size='small' disableElevation sx={{height:50, mt:1.2, mb:2, bgcolor:"rgba(24,119,242,255)"}} onClick={()=>{forgotpassword(data)}}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardActions>
        </Card>
        
    </div>
    <Footer/>
 </>
  )
}
