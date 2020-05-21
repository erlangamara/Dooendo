import React from 'react';
import {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-content-1">
        <Link to="/">
          <p>Dooendo</p>
        </Link>
      </div>
      <div className="Navbar-content-2">
        
      </div>
      <div className="Navbar-content-3">
          <div>
            <Link className="Nav-3-content" to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar;