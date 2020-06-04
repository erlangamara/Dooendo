import React, {useState} from 'react';
import {
  useDispatch
} from 'react-redux';
import {
  useHistory
} from 'react-router-dom'

import {userLogin} from '../store/actions/loginAction'

const RegisterPage = () => {
  //Register data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState(''); 

  const dispatch = useDispatch();
  const history = useHistory();

  const registerSubmit = async (event) => {
    event.preventDefault();

    if (password === validatePassword) {
      const url = 'http://localhost:3001';

      const registerData = {
        username,
        password
      }

      let request = await fetch(`${url}/users/register`, {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: { 
          'Content-Type': 'application/json'
        }
      })

      let result = await request.json();
      localStorage.setItem('token', result.access_token);
      dispatch(userLogin());
      history.push("/main");
    } else {
      console.log('Pleas re-enter the correct password')
    }

  }

  return (
    <div className="Register-page-container">
      <div className="Register-page-form-container">
        <div className="Register-page-quote">
          <h1>
            Great Habits Start Here!
          </h1>
        </div>
        <div className="Register-page-form">
          <form onSubmit={registerSubmit}>
            <h1>Register</h1>
            <label>Username</label>
            <input type="text" onChange={event => setUsername(event.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={event => setPassword(event.target.value)}></input>
            <label>Re-enter Password</label>
            <input type="password" onChange={event => setValidatePassword(event.target.value)}></input>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;