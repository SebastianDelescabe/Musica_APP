import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { loginArrow, rigthArrow } from '../../assets';
import queryString from 'query-string';

import './Login.css';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const Login = () => {

    const location = useLocation();

    const { access_token } = queryString.parse(location.hash);
    if (access_token) {
        sessionStorage.setItem('token', access_token)
    }
    const token = sessionStorage.getItem('token')

    return (
        <>
            {token && <Navigate to={'/search'} />}
            {
                !token && (
                    <div className='login'>
                        <img src={loginArrow} alt="Login Arrow" />
                        <div className='login__data'>
                            <span className='login__data-title'>Disfruta de la <span>mejor musica</span></span>
                            <span className='login__data-subtitle'>Accede a tu cuenta para guardar tus albumes favoritos.</span>
                            <div className='login__data-button'>
                                <a
                                    href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}
                                >
                                    Log in con Spotify</a>
                                <img src={rigthArrow} alt="" />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Login