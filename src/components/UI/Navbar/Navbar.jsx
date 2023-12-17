import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const logout = () =>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Exit</MyButton>
            <div className="navbar__links">
                <Link style={{textDecoration:'none',color:'white'}} to="/about">About</Link>
                <Link style={{textDecoration:'none',color:'white', marginLeft:'20px'}} to="/contacts">Contacts</Link>
                <Link style={{textDecoration:'none',color:'white', marginLeft:'20px'}} to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;