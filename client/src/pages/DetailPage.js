import React, {useEffect, useState} from 'react';
import {
  useParams,
  useHistory,
  Link
} from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {getHabitById} from '../store/actions/habitAction';
import ProfileImage from '../assets/person-outline.svg';
import DropDownIcon from '../assets/caret-down-outline.svg';

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [deleteNotice, setDeleteNotice] = useState(false);
  
  const habit = useSelector(state => state.habitReducer.habit);

  useEffect(() => {
    dispatch(getHabitById(params.id));
  }, [dispatch, params.id])

  if(!habit.activity){
    return (
      <div>
        Loading...
      </div>
    )
  }

  //Delete
  const deleteHabit = async () => {
    const url = 'http://localhost:3001';
    let requestDelete = await fetch(`${url}/habits/${habit.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    })

    let result = await requestDelete.json();
    if (result.message === 'Habit deleted') {
      history.push('/main');
    }
  }

  //Options
  const NavItem = (props) => {
    return (
      <div>
        <li className="Icon-container">
          <a href="#" className="Icon-button" onClick={(e) =>{
            e.preventDefault()
            setOpen(!open)}}>
            Option
            {/* {props.DropDownIcon} */}
          </a>

          {open && props.children}
        </li>
      </div>
    )
  }

  const DropDownMenu = (props) => {
    return (
      <div className="Dropdown">
        <Link to={`/editHabit/${habit.id}`}>
          Edit
        </Link>
        <Link to="#" onClick={() => deleteHabit()}>
          Delete
        </Link>
      </div>
    )
  }

  return (
    <div className="Detail-page-container">
      <div className="Detail-page-upper">
        <div className="Detail-page-upper-profile">
          <img src={ProfileImage} alt="profile large" />
          <h3>{habit.creator_username}</h3>
        </div>
        <div className="Detail-page-upper-list">
          <div className="Detail-page-upper-list-header">
            <div className="Detail-page-title">
              <h1>{habit.title}</h1>
            </div>
            <div className="Detail-page-option">
              <NavItem icon={DropDownIcon}>
                <DropDownMenu></DropDownMenu>
              </NavItem>
            </div>
          </div>
          <div className="Detail-page-habit-list">
            <div className="Habit-list-content-header">
              <div>
                Activity
              </div>
              <div>
                Time
              </div>
            </div>
              {habit.activity.map((data, index) => {
                return (
                  <div className="Habit-list-content" key={index}>
                    <div className="Habit-list-content-indicator"></div>
                    <div className="Habit-list-content-activity">
                      <p>{data.name}</p>
                    </div>
                    <div className="Habit-list-content-time">
                      <p>{data.time}</p>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className="Detail-page-description">
            <div className="Detail-page-description-header">
              <p>Description</p>
            </div>
            <p>{habit.description}</p>
          </div>
        </div>
      </div>
      {/* <div className="Detail-page-bellow">
        <div>
          <h3>Description</h3>
          <p>{habit.description}</p>
        </div>
      </div> */}
    </div>
  )
}

export default DetailPage;