import React from 'react';
import { Card, CardActions, CardContent } from '@mui/material';
import styles from './signup.module.css'
import { SignUpForm } from './SignUpForm';
import { Footer } from './Footer';
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
      <>
      <div className={styles.main}>
          <h1>facebook</h1>
      <Card sx={{ maxWidth: 450, height:530, m:"auto",pt:0,pb:0 }}>
            <CardActions>
                <CardContent sx={{m:"auto",p:0}}>
                    <div className={styles.heading}>
                        <h2>Create a new account</h2>
                        <p>It's quick and easy</p>
                        <hr className={styles.line}/>
                    </div>
                    <SignUpForm/>
                    <Link to='/login2'>Already have an account?</Link>
                </CardContent>
            </CardActions>
        </Card>
    </div>
    <Footer/>
    </>
  )
}
