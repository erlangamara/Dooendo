import React from 'react';
import {
  Link
} from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <div className="Main-page-container">
        <div className="Main-page-header">
        </div>
        <div className="Main-page-card-container">
          <Link className="Main-page-card">
            <div className="Main-page-card-content-1">
              <img alt="profileImage"></img>
              <h3>My daily routine</h3>
            </div>
            <div className="Main-page-card-content-description">
              <p>This is my new daily habit that i've been develop.</p>
            </div>
          </Link>
          <Link className="Main-page-card">
            <div className="Main-page-card-content-1">
              <img alt="profielImage"></img>
              <h3>My daily routine</h3>
            </div>
            <div className="Main-page-card-content-description">
              <p>This is my new daily habit that i've been develop.</p>
            </div>
          </Link>
          <Link className="Main-page-card">
            <div className="Main-page-card-content-1">
              <img alt="profileImage"></img>
              <h3>My daily routine</h3>
            </div>
            <div className="Main-page-card-content-description">
              <p>This is my new daily habit that i've been develop.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage;