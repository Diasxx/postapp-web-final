import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes,publicRoutes} from "../router/router";
import Login from "../pages/Login";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (

        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}/>
                )}
                <Route path="/*" element={<Posts />} />
            </Routes>

        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}/>
                )}
                <Route path="/*" element={<Login />} />
            </Routes>

    );
};
export default AppRouter;