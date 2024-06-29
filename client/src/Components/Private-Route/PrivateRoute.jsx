import React from "react";
import { Route, Navigate } from "react-router-dom";

const isAuth = true;

const PrivateRoute = ({ children, ...rest }) => {
    return(
        <Route
            render={()=>
                isAuth ? 
                    children
                 : (
                    <Navigate to="/login-page"/>
                )
            }
        />
    );
}

export default PrivateRoute;