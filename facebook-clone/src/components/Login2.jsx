import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import styles from './login2.module.css'
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const Login2 = () => {
  return (<>
         <div className={styles.logindiv}>
             <div className={styles.banner}>
                 <h1>facebook</h1>
             </div>
             <div>
                 <Card sx={{ maxWidth: 400, height: 310, m:"auto",boxShadow: 8 }}>
                     <CardActions>
                         <CardContent>
                             <p>Log in to Facebook</p>
                             <LoginForm/>
                            <span>
                            <Link to='/login/forgot_password'>Forgotten account?</Link>
                            &nbsp;
                            &nbsp;
                            <Link to='/reg'>Sign up for Facebook</Link>
                            </span>
                         </CardContent>
                     </CardActions>
                 </Card>
             </div>
       </div>
       <Footer/>
       </>)
}


// import React, { useContext, useState } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { CardActions } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import styles from './login.module.css'
// import { AuthContext } from '../context/AuthContext';
// import SignupModel from '../components/SignupModel';
// import { Footer } from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { LoginForm } from '../components/LoginForm';


// export const Login = () => {

//   return (<>
//     <div className={styles.logindiv}>
//         <div className={styles.banner}>
//             <h1>facebook</h1>
//             <p>Facebook helps you connect and share<br/>with the people in your life.</p>
//         </div>
//         <div>
//             <Card sx={{ maxWidth: 400, height: 370, m:"auto"}}>
//                 <CardActions>
//                     <CardContent>
//                         <LoginForm/>
//                         <Link to='/login/forgot_password'style={{marginBottom:'1.2rem'}}>Forgotten password?</Link>
//                         <hr />
//                         <SignupModel/>
//                     </CardContent>
//                 </CardActions>
//             </Card>
//         </div>
//   </div>
//   <Footer/>
//   </>)
// }