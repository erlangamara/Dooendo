import React from 'react';
import {
  Link
} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className="Landing-page-container">
        <div className="Landing-page-introduction">
          <h1>Hello there...</h1>
          <p>
            Have you ever been in that situation where you don't know what to do for today? <br />
            Well worry no more because <b>Dooendo</b> got plenty of things for you to full fill your day.
          </p>
          <Link className="Landing-page-start-button" to="/main">
            <div className="Landing-page-go-button">
              <h3>Find Your New Habit Here!</h3>
            </div>
          </Link>
        </div>
        <div className="Landing-page-about">
          <div className="Landing-page-about-content-1">
            <h1>What is Dooendo?</h1>
            <p>
              <b>Dooendo</b> is a platform to share your great habit to other people, so they can do your daily routine habit.
              You can also follow other people daily routine habit, and so there is no reason for you to not doing anything right now.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;