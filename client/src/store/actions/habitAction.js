const url = 'http://localhost:3001';
// import axios from 'axios';

export const getHabit = () => {
  return async (dispatch) => {
    let result = await fetch(`${url}/habits`);
    let habits = await result.json();
    dispatch({
      type: 'GET_HABIT',
      payload: {
        habit: habits
      }
    })
  }
}

export const getHabitById = (habitId) => {
  return async (dispatch) => {
    let result = await fetch(`${url}/habits/${habitId}`);
    let habit = await result.json();
    dispatch({
      type: 'GET_HABIT_BY_ID',
      payload: {
        habitById: habit
      }
    })
  }
}