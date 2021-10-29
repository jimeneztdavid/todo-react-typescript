import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({component: Component, ...rest}) => {
  const bool = false;
  return (
    <Route {...rest} render={props => (
      bool ? <Component /> : <Redirect to="/login" />
    )} />
  )
}

export default PrivateRoute