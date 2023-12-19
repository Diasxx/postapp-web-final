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
            <MyButton style={{marginLeft:30, backgroundColor:"#0065B5FF"}} onClick={logout}>Exit</MyButton>
            <div className="navbar__links">
                <Link style={{textDecoration:'none',color:'white'}} to="/posts">Posts</Link>
                <Link style={{textDecoration:'none',color:'white', marginLeft:'20px'}} to="/contacts">Contacts</Link>
                <Link style={{textDecoration:'none',color:'white', marginLeft:'20px'}} to="/About">About</Link>
                <Link style={{textDecoration:'none',color:'white', marginLeft:'20px',marginRight:30}} to="/profile">Profile</Link>
            </div>
        </div>
    );
};

export default Navbar;