import React from 'react'
import Header from '../../components/Header/Header'
import TimeLogs from '../../components/TimeLogs'
import './Home.css'
export default function Home() {
    return (
        <div className='home-page'>
            <Header/>
            <TimeLogs/>
        </div>
    )
}
