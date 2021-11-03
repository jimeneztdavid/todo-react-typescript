import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {useAuth} from '../AuthContext.tsx';

const PublicRoute = ({component: Component, ...rest}) => {
  const bool = false;
  const {isLogged} = useAuth()

  return (
    <Route {...rest} render={props => (
      isLogged ? <Redirect to="/" /> : <Component {...props} /> 
    )} />
  )
}

export default PublicRoute