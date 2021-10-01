import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Header from '../../components/Header/Header'
import TimeLogs from '../../components/TimeLogs'
import './Home.css'
export default function Home() {
    return (
        <div className='home-page'>
            <Navigation/>
            <Header/>
            <TimeLogs/>
        </div>
    )
}
