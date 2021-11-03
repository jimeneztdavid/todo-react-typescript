import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import AuthProvider from './AuthContext';
import PrivateRoute from './routes/PrivateRoute.js';
import PublicRoute from './routes/PublicRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home}/>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/register" component={Register} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
