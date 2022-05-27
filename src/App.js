import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Navbar, Home } from './components';

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/search' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App