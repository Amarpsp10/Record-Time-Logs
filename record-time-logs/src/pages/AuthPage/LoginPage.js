import React from 'react'
import './LoginPage.css'
import Logo from '../../assets/logo.png'
import { Button } from '@mui/material'

import SignInModal from '../../components/AuthModal/SignInModal'
import SignUpModal from '../../components/AuthModal/SignUpModal'

export default function LoginPage() {
    const [openSignIn, setSignIn] = React.useState(false);
    const [openSignUp, setSignUp] = React.useState(false);
    return (
        <div className='login-page'>
            <div className='head'>
                <img width={70} src={Logo} alt='logo'/>
                <text>Welcome to Time Logs</text>
            </div>     
            <text style={{fontSize:'15px',fontWeight:'bold',marginTop:20}}>Record Time Logs with start datetime, end datetime and description</text>      
            <div className='buttons'>
                <Button onClick={()=>setSignIn(true)} variant='contained'>Sign In</Button>
                <Button onClick={()=>setSignUp(true)} variant='contained' style={{marginLeft:15}}>Sign Up</Button>
            </div>
                <SignInModal open={openSignIn} setOpen={setSignIn}/>
                <SignUpModal open={openSignUp} setOpen={setSignUp}/>
        </div>
    )
}
