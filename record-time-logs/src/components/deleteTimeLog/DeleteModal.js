import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddModal({open,setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete Time Log</DialogTitle>
        <DialogContent className='dialog-content'>
          <DialogContentText className='dialog-content-text'>Do you really want to delete this timelog permanantly?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    
  );
}
