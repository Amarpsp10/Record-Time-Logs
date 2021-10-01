import * as React from 'react';
import './Modal.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUpModal({open,setOpen}) {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTimeLog = () =>{

  }

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{textAlign:'center'}}>Welcome to Time Logs</DialogTitle>
        <DialogContent className='dialog-content'>
            <TextField 
                style={{marginBlock:8}}
                label='Useranme' 
                size='small'
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}
                variant="outlined" 
            />
            <TextField 
                style={{marginBlock:8}}
                label='Email' 
                size='small'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                variant="outlined" 
            />
            <TextField
                style={{marginBlock:8}}
                id="outlined-multiline-flexible"
                label='Password'
                size='small'
                value={password}
                security={true}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </DialogContent>
        <div style={{display:'flex',flexDirection:'row',marginBlock:'15px',justifyContent:'center'}}>
          <Button variant='outlined' onClick={handleClose}>Cancel</Button>
          <Button style={{marginLeft:'15px'}} variant='contained' onClick={handleClose}>Sign Up</Button>
        </div>
      </Dialog>
    
  );
}
