import React, {useState} from 'react';
import { 
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';
import {
  useDispatch
} from 'react-redux';
import {userLogin} from '../store/actions/loginAction';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  
  const history = useHistory();
  
  const login = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001';
    
    const loginData = {
      username: username,
      password: password
    }
    
    let request = await fetch(`${url}/users/login`, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: { 
        'Content-Type': 'application/json'
      }
    })
    
    let result = await request.json()
    let { from } = location.state || { from: { pathname: "/main" } };

    if(!result.message) {
      localStorage.setItem('token', result.access_token);
      dispatch(userLogin());
      history.push(from.pathname);
    }
  }

  return (
    <div className="Login-page-container">
      <div className="Login-form-container">
        <div className="Login-form">
          <form onSubmit={login}>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" onChange={event => setUsername(event.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={event => setPassword(event.target.value)}></input>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="Register-redirect">
          <h3>Don't have an account?</h3>
          <Link className="Redirect-link" to="/register">Create One Here!</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;