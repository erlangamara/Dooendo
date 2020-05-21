import React from 'react';

const RegisterPage = () => {
  return (
    <div className="Register-page-container">
      <div className="Register-page-form-container">
        <div className="Register-page-quote">
          <h1>
            Great Habits Start Here!
          </h1>
        </div>
        <div className="Register-page-form">
          <form>
            <h1>Register</h1>
            <label>Username</label>
            <input type="text"></input>
            {/* <label>Email</label>
            <input type="email"></input> */}
            <label>Password</label>
            <input type="password"></input>
            <label>Re-enter Password</label>
            <input type="password"></input>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;