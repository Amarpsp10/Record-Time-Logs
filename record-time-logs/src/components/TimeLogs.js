import React from 'react'
import TimeLog from './timelog/TimeLog'
export default function TimeLogs() {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:50,paddingInline:25}}>
            <TimeLog/>
            <TimeLog/>
            <TimeLog/>
            <TimeLog/>
            <TimeLog/>
        </div>
    )
}
