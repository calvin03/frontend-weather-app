import React, { useState, useEffect } from "react";
import store from "./store";
import LandingPage from "./pages/LandingPage/LandingPage";
import jwt from "jsonwebtoken";
import { setIsAuthenticated } from "./actions/authActions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import { toast } from "react-toastify";


toast.configure({
  autoClose: 2000,
  draggable: false,
  //etc you get the idea
});

function App() {
  if (localStorage.jwtToken) {
    store.dispatch(setIsAuthenticated(jwt.decode(localStorage.jwtToken)));
  }

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
