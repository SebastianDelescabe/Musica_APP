import React from 'react';
import { logo } from '../../assets';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
        </div>
    )
}

export default Navbar