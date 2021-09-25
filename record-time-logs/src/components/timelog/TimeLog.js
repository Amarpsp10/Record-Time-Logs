import React, { useState } from 'react'
import './TimeLog.css'
import  Delete  from '@mui/icons-material/Delete'
import { Divider } from '@mui/material'
import DeleteModal from '../deleteTimeLog/DeleteModal'
export default function TimeLog() {
    const [open, setOpen] = useState(false);

    return (
        <div className='timelog'>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <text className='title'>Here is the title of timelog</text>
                <Delete onClick={()=>setOpen(true)} className='delete-icon' style={{color:'blueviolet',fontSize:'25px'}}/>
            </div>
            <Divider/>
            <div className='date-times'>
                <text>Start Time : 2018-01-01T00:00:00.000Z</text>
                <text>End Time : 2018-01-01T00:00:00.000Z</text>
            </div>
            <Divider style={{marginBottom:'5px'}}/>
            <text>here is sdjk the description about this time logs</text>
            <DeleteModal open={open} setOpen={setOpen}/>
        </div>
    )
}
