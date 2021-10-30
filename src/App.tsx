import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import AuthProvider from './AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
