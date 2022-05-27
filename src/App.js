import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Navbar, Home } from './components';
import { BackgroundContext } from './helpers/BackgroundContext';

import './App.css';

const App = () => {

    const [theme, setTheme] = useState(true);

    return (
        <BackgroundContext.Provider
            value={{ theme, setTheme }}>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/search' element={<Home />} />
                </Routes>
            </div>
        </BackgroundContext.Provider>
    )
}

export default App