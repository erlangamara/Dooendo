import React, {useEffect, useState} from 'react';

import Card from '../components/Card';
import ProfilePicture from '../assets/person-outline.svg';

const ProfilePage = () => {
  const [profile, setProfile] = useState('');
  const [userHabit, setUserHabit] = useState('');

  const url = 'http://localhost:3001';

  const getProfile = async () => {

    let requestProfile = await fetch(`${url}/users`, {
        method: 'GET',
        headers: {
          'token': localStorage.getItem('token')
        }
      });

    let result = await requestProfile.json();
    setProfile(result);
  }

  const getUsersHabit = async () => {
    let requestUserHabit = await fetch(`${url}/habits/userHabit`, {
      method: 'GET',
      headers: {
        'token': localStorage.getItem('token')
      }
    });
    
    let result = await requestUserHabit.json();
    setUserHabit(result);
  }

  useEffect(() => {
    getProfile()
    getUsersHabit()
  }, [])

  if(!userHabit) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div className="Profile-page-container">
      <div className="Profile-page-upper">
        <img src={ProfilePicture} alt="profile big"></img>
        <div className="Profile-data">
          <h1>{profile.username}</h1>
          <h2>Name</h2>
          <p>Bio</p>
        </div>
      </div>
      <div className="Profile-page-bellow">
        <div className="Profile-page-side-bar">

        </div>
        <div className="Profile-page-list">
          <h3>My Habit</h3>
          <div className="Profile-page-list-container">
            <Card habitList={userHabit} page={'profilePage'}></Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;