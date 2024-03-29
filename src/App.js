import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage, Navbar, Home, Albums } from './views';
import { BackgroundContext } from './context/BackgroundContext';
import { Favorites } from './context/Favorites';
import './App.css'

const App = () => {

    const [themeBlack, setThemeBlack] = useState(true);
    const [favorites, setFavorites] = useState([])


    return (
        <BackgroundContext.Provider
            value={{ themeBlack, setThemeBlack }}>
            <Favorites.Provider
                value={{ favorites, setFavorites }}>
                <Navbar />
                <div className='animate__animated animate__fadeIn'>
                    <Routes>
                        <Route exact path='/' element={<LandingPage />} />
                        <Route path='/search' element={<Home />} />
                        <Route path='/albums' element={<Albums />} />
                        <Route path='/*' element={<LandingPage />} />
                    </Routes>
                </div>
            </Favorites.Provider>
        </BackgroundContext.Provider >
    )
}

export default App