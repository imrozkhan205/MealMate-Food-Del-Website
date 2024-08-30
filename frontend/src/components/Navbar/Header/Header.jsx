import React from 'react'
import './Header.css'
import { menu_list } from '../../../assets/assets'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'

const Header = () => {
  return (
    <div className='header' >
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delevtable array of dishes crafted with finest ingredients to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
        </div>
    </div>
  )
}

export default Header