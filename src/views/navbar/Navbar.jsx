import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo, sun } from '../../assets';
import { BackgroundContext } from '../../context/BackgroundContext';
import { logoResponsive, logoutResponsive } from '../../assets';
import './Navbar.css'

const Navbar = () => {

    const [activeButton, setActiveButton] = useState('search');
    const [token, setToken] = useState(null);

    const { setThemeBlack, themeBlack } = useContext(BackgroundContext)

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        setToken(null)
        setThemeBlack(false)
    }

    useEffect(() => {
        const localToken = sessionStorage.getItem('token');
        if (localToken) {
            setToken(localToken)
        }
    }, [token])

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt="" />
            <img className='navbar__logo-responsive' src={logoResponsive} alt="" />
            {token && (
                <div className='navbar__loged'>
                    <div className='navbar__position'>
                        <NavLink
                            to='/search'
                            onClick={() => setActiveButton('search')}
                            className={activeButton === 'search' ? 'navbar__link-active' : 'navbar__link'}
                        >
                            Buscar
                        </NavLink>
                        <NavLink
                            to='/albums'
                            onClick={() => setActiveButton('albums')}
                            className={activeButton === 'albums' ? 'navbar__link-active' : 'navbar__link'}
                        >
                            My albums
                        </NavLink>
                        <div />
                        <NavLink
                            onClick={handleLogout}
                            to={'/'}
                            className='navbar__link-logout'
                        >
                            Cerrar sesión
                        </NavLink>
                        <NavLink
                            onClick={handleLogout}
                            to={'/'}
                            className='navbar__link-logout-responsive'
                        >
                            <img src={logoutResponsive} alt="" />
                        </NavLink>
                        <div />
                        <img
                            src={sun}
                            alt="sun"
                            onClick={() => setThemeBlack(!themeBlack)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar