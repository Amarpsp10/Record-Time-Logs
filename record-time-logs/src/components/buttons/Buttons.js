import React from 'react'
import './Buttons.css'
import Logout from '../../assets/logout.svg'

export default function Buttons() {
    return (
        <div className='button'>
            <img src={Logout} alt='logout'/>
            <text>Log Out!</text>
        </div>
    )
}
