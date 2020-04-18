import React, { useState, useEffect } from "react";
import "./App.css";
import store from "./store";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import jwt from "jsonwebtoken";
import { setIsAuthenticated } from "./actions/authActions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  if (localStorage.jwtToken) {
    store.dispatch(setIsAuthenticated(jwt.decode(localStorage.jwtToken)));
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
