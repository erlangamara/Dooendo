import React, {useEffect} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  userLogin,
  userLogout
} from '../store/actions/loginAction';

const Navbar = () => {
  const isLogedin = useSelector(state => state.loginReducer.logedin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(userLogin());
    }
  }, [dispatch])

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(userLogout());
  }

  return (
    <div className="Navbar">
      <div className="Navbar-content-1">
        <Link to="/main">
          <p>Dooendo</p>
        </Link>
      </div>
      <div className="Navbar-content-2">
        
      </div>
      <div className="Navbar-content-3">
          <div>
            <Link to="/">About</Link>
            {
              !isLogedin ? (
                <Link className="Nav-3-content" to="/login">Login</Link>
              ) : (
                <Link className="Nav-3-content" to="/profile">Profile</Link>
              )
            }
            {
              !isLogedin ? (
                <Link to="/register">Register</Link>
              ) : (
                <Link to="/main" onClick={logout}>Logout</Link>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default Navbar;