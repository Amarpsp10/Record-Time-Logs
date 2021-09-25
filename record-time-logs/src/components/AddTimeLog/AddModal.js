import * as React from 'react';
import './AddModal.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddModal({open,setOpen}) {

    const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    const [title, setTitle] = React.useState('');
    const [startDatetime, setStartDatetime] = React.useState(new Date());
    const [endDatetime, setEndDatetime] = React.useState(new Date())
    const [description, setDescription] = React.useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

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
        <DialogTitle>Create Time Log</DialogTitle>
        <DialogContent className='dialog-content'>
          <DialogContentText className='dialog-content-text'>Title</DialogContentText>
          <TextField value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter title for timelog' variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DialogContentText className='dialog-content-text'>Start Datetime</DialogContentText>
              <DesktopDateTimePicker
              value={value}
              onChange={(newValue) => {
                  setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
              />
              <DialogContentText className='dialog-content-text'>End Datetime</DialogContentText>
              <DesktopDateTimePicker
              value={value}
              onChange={(newValue) => {
                  setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
              />
              </LocalizationProvider>
              <DialogContentText className='dialog-content-text'>Description</DialogContentText>
              <TextField
                  id="outlined-multiline-flexible"
                  placeholder='Add Description for timelog'
                  multiline
                  maxRows={4}
                  value={description}
                  onChange={handleChange}
                  />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    
  );
}
