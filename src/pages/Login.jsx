// Login component
import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
    };

    return (
        <div className="login-container"> {/* Add a class name to the main container */}
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Insert Login" />
                <MyInput type="password" placeholder="Insert Password" />
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;
