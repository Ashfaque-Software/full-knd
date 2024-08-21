import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleSetToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={token ? <HomePage token={token} /> : <LoginPage setToken={handleSetToken} />} />
            </Routes>
        </Router>
    );
};

export default App;
