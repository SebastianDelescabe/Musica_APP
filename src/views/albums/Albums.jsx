import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SlideCard } from '../../components';
import { BackgroundContext } from '../../context/BackgroundContext';
import { Favorites } from '../../context/Favorites';
import { motion } from 'framer-motion';
import './Albums.css'

const Albums = () => {

    const token = sessionStorage.getItem('token');

    const { themeBlack } = useContext(BackgroundContext)
    const { favorites, setFavorites } = useContext(Favorites)

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        if (favorites.length !== 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        } else {
            const localFavorites = JSON.parse(localStorage.getItem('favorites'))
            setFavorites(localFavorites)
        }
    }, [setFavorites])// eslint-disable-line

    useEffect(() => { // eslint-disable-line
        if (favorites.length !== 0) {
            setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth - 100));
        }
    },) 

    return (
        <div className='albums'>
            {!token && <Navigate to={'/'} />}
            {token && (
                <div className={!themeBlack ? 'app__white' : 'app__black'}>
                    <div className='albums__header'>
                        <span className='albums__header-title'>Mis albumes <span>guardados</span></span>
                        <span className='albums__header-subtitle'> Disfruta de tu música a un solo click y descube que discos has guardado dentro de “mis álbumes”</span>
                    </div>
                    {favorites.length !== 0 && (
                        <motion.div ref={carousel} className='albums__slider-container animate__animated animate__fadeIn'>
                            <motion.div className='albums__slider' drag='x' dragConstraints={{ right: 0, left: -width }}>
                                {
                                    favorites && favorites.map((favorite, i) => (
                                        <motion.div key={favorite.id + i} className='albums__slider-item'>
                                            <SlideCard album={favorite} />
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Albums