import React, {useState} from 'react';
import {
  useHistory
} from 'react-router-dom'

const CreateHabitPage = () => {
  //Main form input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //Activity input
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  const history = useHistory();

  const submitNewHabit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001';
    const dataCreateHabit = {
      title,
      activity: activities,
      description
    }

    let request = await fetch(`${url}/habits`, {
      method: 'POST',
      body: JSON.stringify(dataCreateHabit),
      headers: { 
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    })

    let result = await request.json();
    if(result.message === 'Habit created') {
      history.push("/main")
    }
  }

  const addActivity = (event) => {
    event.preventDefault();

    let newActivity = {
      name: activity,
      time
    };

    setActivities([...activities, newActivity])
  }

  return (
    <div className="Create-habit-page-container">
      <h1>Create Your New Habit Now</h1>
      <div className="Create-section">
        <div className="Create-habit-form-section">
          <form className="Create-habit-main-form" onSubmit={submitNewHabit}>
            <label>Title:</label>
            <input type="text" onChange={event => setTitle(event.target.value)}></input>
            <label>Description:</label>
            <textarea onChange={event=> setDescription(event.target.value)}></textarea>
            <button type="submit">Create</button>
          </form>
          <form className="Create-habit-activity-form" onSubmit={addActivity}>
            <label>Activity:</label>
            <input type="text" onChange={event => setActivity(event.target.value)}></input>
            <label>Time:</label>
            <input type="time" onChange={event => setTime(event.target.value)}></input>
            <button type="submit">Add Activty</button>
          </form>
        </div>
        <div className="Create-habit-list-section">
          <h3>Activities</h3>
          <table className="Activity-list">
            <tr className="Activity-list-header">
              <th>
                Name
              </th>
              <th>
                Time
              </th>
            </tr>
            {
              activities.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <p key={index}>{item.name}</p>
                    </td>
                    <td>
                      <p>{item.time}</p>
                    </td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default CreateHabitPage;