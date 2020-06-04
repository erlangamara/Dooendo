import React, {useEffect} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {getHabit} from '../store/actions/habitAction'
import Card from '../components/Card';

const MainPage = () => {
  let dispatch = useDispatch();
  let habitList = useSelector(state => state.habitReducer.habitList)

  useEffect(() => {
    dispatch(getHabit())
  }, [dispatch])

  return (
    <div>
      <div className="Main-page-container">
        <div className="Main-page-header">
          <div className="Main-page-header-create-button">
            <Link to="/createHabit">Create New Habit</Link>
          </div>
          <div className="Main-page-header-filter">

          </div>
        </div>
        <div className="Main-page-card-container">
          <Card habitList={habitList} page={'mainPage'}></Card>
        </div>
      </div>
    </div>
  )
}

export default MainPage;