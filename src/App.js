import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Navbar, Home, Albums } from './views';
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
                <div>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route path='/search' element={<Home />} />
                        <Route path='/albums' element={<Albums />} />
                    </Routes>
                </div>
        </Favorites.Provider>
        </BackgroundContext.Provider >
    )
}

export default App