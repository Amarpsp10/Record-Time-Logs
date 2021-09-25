import React,{useState, useEffect, useContext} from 'react'
import './Header.css'
import AddModal from '../AddTimeLog/AddModal'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'

export default function Header() {
    const [open, setOpen] = useState(false);

    const showModal = () =>{
        setOpen(true);
    }

    return (
        <div className='header'>
             <Button onClick={()=>showModal()} variant="outlined" endIcon={<AddIcon />}>
                 Add Time Log
            </Button>
            <Button variant="outlined" endIcon={<AddIcon />}>
                 Add Time Log
            </Button>
            <AddModal open={open} setOpen={setOpen}/>
        </div>
    )
}
