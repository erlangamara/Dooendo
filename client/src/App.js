import React from 'react';

//Style
import './scss/main.css';
import './scss/LandingPage.css';
import './scss/MainPage.css';
import './scss/LoginPage.css';
import './scss/RegisterPage.css';
import './scss/DetailPage.css';
import './scss/CreateHabitPage.css';
import './scss/ProfilePage.css';
import './scss/MainPageCard.css';
import './scss/EditHabitPage.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import store from './store';

//Components
import Navbar from './components/Navbar';
import PrivateRoot from './components/PrivateRoute';

//Pages
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import CreateHabitPage from './pages/CreateHabitPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import EditHabitPage from './pages/EditHabitPage';

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
          <Route path="/detail/:id">
            <DetailPage></DetailPage>
          </Route>
          <PrivateRoot path="/createHabit">
            <CreateHabitPage></CreateHabitPage>
          </PrivateRoot>
          <PrivateRoute path="/profile">
            <ProfilePage></ProfilePage>
          </PrivateRoute>
          <PrivateRoute path="/editHabit/:id">
            <EditHabitPage></EditHabitPage>
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
