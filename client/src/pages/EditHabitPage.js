import React, {useState, useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  useParams
} from 'react-router-dom'

import {getHabitById} from '../store/actions/habitAction';

const EditHabitPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const habit = useSelector(state => state.habitReducer.habit);

  useEffect(() => {
    dispatch(getHabitById(params.id));
    setTitle(habit.title);
    setDescription(habit.description);
  }, [dispatch, params.id, habit.description, habit.title])

  const updateHabit = async (event) => {
    event.preventDefault();

    let dataUpdateHabit = {
      title,
      activity: habit.activity,
      description
    }

    const url = 'http://localhost:3001';

    let request = await fetch(`${url}/habits/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(dataUpdateHabit),
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    })

    let result = await request.json();
    console.log(result);
  }

  return (
    <div className="Edit-habit-page-container">
      <h1>Edit Your Habit</h1>
        <div className="Edit-habit-page-form-container">
          <form className="Edit-habit-form" onSubmit={updateHabit}>
            <label>Title:</label>
            <input type="text" defaultValue={habit.title} onChange={event => setTitle(event.target.value)}></input>
            <label>Description:</label>
            <textarea defaultValue={habit.description} onChange={event => setDescription(event.target.value)}></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
    </div>
  )
}

export default EditHabitPage;