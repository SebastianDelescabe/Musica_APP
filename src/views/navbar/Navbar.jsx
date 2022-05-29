import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { logo, sun } from '../../assets';
import { BackgroundContext } from '../../context/BackgroundContext';
import { logoResponsive, logoutResponsive } from '../../assets';
import './Navbar.css'

const Navbar = () => {

    //Estado para manejar el control del logo En Login
    const location = useLocation()
    const [loginIcon, setLoginIcon] = useState(false)

    //Estado para activar y desactivar botones de acuerdo cual esta clickeado
    const [activeButton, setActiveButton] = useState('search');

    //Estado para manajer si el usuario esta authenticado
    const [token, setToken] = useState(null);

    //Estado para manejar el boton de cambio de tema
    const { setThemeBlack, themeBlack } = useContext(BackgroundContext)

    //Funcion para deslogearse.
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        setToken(null)
        setThemeBlack(false)
    }

    //Control sobre el icono de login, si estoy en /login que salga normalmente independientemente de si es responsive o no
    useEffect(() => { // eslint-disable-line
        if (location.pathname === '/') {
            setLoginIcon(true)
        } else {
            setLoginIcon(false)
        }
    })

    //Esta atento al cambio en el token, para cerrar session si no hay
    useEffect(() => {
        const localToken = sessionStorage.getItem('token');
        if (localToken) {
            setToken(localToken)
        }
    }, [token])

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt="" />
            {
                loginIcon ?
                    <img className='navbar__logo-responsive' src={logo} alt="" />
                    :
                    <img className='navbar__logo-responsive' src={logoResponsive} alt="" />
            }
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