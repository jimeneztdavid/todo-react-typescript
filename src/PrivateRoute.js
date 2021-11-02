import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const bool = false;
  const {isLogged} = useAuth()

  useEffect(() => {
    alert(isLogged)
  },[])

  return (
    <Route {...rest} render={props => (
      isLogged ? <Component {...props} />: <Redirect to="/login" /> 
    )} />
  )
}

export default PrivateRoute