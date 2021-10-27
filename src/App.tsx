import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


const firebase = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
