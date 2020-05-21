import React from 'react';
import './scss/main.css';
import './scss/LandingPage.css';
import './scss/MainPage.css';
import './scss/LoginPage.css';
import './scss/RegisterPage.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import store from './store';

import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/main">
            <MainPage></MainPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
