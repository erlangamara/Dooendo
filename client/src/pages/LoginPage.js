import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="Login-page-container">
      <div className="Login-form-container">
        <div className="Login-form">
          <form>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
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