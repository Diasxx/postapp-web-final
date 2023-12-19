import React, {useEffect, useState} from 'react';
import './styles/App.css';
import './styles/Profile.css';
import './styles/About.css';
import './styles/Login.css';
import './styles/PostId.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
            localStorage.setItem('auth','true')
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
