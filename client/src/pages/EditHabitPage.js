import React from 'react';

const EditHabitPage = () => {
  return (
    <div className="Edit-habit-page-container">
      <h1>Edit Your Habit</h1>
        <div className="Edit-habit-page-form-container">
          <form className="Edit-habit-form">
            <label>Title:</label>
            <input type="text"></input>
            <label>Description:</label>
            <textarea></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
    </div>
  )
}

export default EditHabitPage;