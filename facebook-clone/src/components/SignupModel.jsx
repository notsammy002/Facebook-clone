import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { SignUpForm } from './SignUpForm';
import { Card, CardActions, CardContent } from '@mui/material';
import styles from './signup.module.css'

export default function SignupModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button variant="contained" disableElevation color='success' sx={{ height: 50, mt:2, mb:2, bgcolor:"rgba(66,183,42,255)"}} onClick={handleOpen}>
            Create New Account
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{position:'absolute',left:50,top:100}}
        >
          <Card sx={{ maxWidth: 450, height:530, m:"auto",pt:0,pb:0 }}>
            <CardActions>
                <CardContent sx={{m:"auto",p:0}}>
                    <div className={styles.heading}>
                        <h2>Sign Up</h2>
                        <p>It's quick and easy</p>
                        <hr className={styles.line}/>
                    </div>
                    <div>
                      <SignUpForm/>
                    </div>
                </CardContent>
            </CardActions>
        </Card>
          
        </Modal>
        
    </div>
        
  );
}

                
                