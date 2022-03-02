import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Signup } from './Signup';

export default function SignupModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button variant="contained" disableElevation color='success' sx={{ height: 50, mt:2, mb:2, bgcolor:"rgba(66,183,42,255)"}} onClick={handleOpen}>
            Create New Account
        </Button>
        
    </div>
        
  );
}

                
                