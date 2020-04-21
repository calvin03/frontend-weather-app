import React, { useState, useEffect } from "react";
import store from "./store";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage"
import jwt from "jsonwebtoken";
import { setIsAuthenticated } from "./actions/authActions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import './App.scss'

function App() {
  if (localStorage.jwtToken) {
    store.dispatch(setIsAuthenticated(jwt.decode(localStorage.jwtToken)));
  }

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
