import React,{useEffect,useContext,useState} from 'react'
import './Navigation.css'

import Menu from '../../components/HomeMenu/Menu'
import Logo from '../../assets/logo.png'
import Hero from '../../assets/user.svg'

export default function Navigation() {
    return (
        <div className='navigation-bar'>
                <div className='logo'>
                    <img width={50} src={Logo} alt='logo'/>
                    <text>Time Logs</text>
                </div>
                <div className='navigation-items'>
                    <Menu/>
                </div>
        </div>
    )
}
