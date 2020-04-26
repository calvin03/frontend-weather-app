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
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Footer from "./components/Footer/Footer"
toast.configure({
  autoClose: 2000,
  draggable: false,
  //etc you get the idea
});

function App() {
  return (
    <Provider store={store}>
      <LoadingScreen />
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
