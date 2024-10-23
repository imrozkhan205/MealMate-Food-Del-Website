import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function AppDownload() {
  return (
    <div className='app-download' id='app-download' >
        <p>For Better Experience Download <br/>MealMate App</p>
        <div className='app-download-platforms' >
            <Link to='/'> <img src= {assets.play_store} alt=''  /></Link>
            <img src={assets.app_store} alt=''/>
        </div>
      
    </div>
  )
}

export default AppDownload
