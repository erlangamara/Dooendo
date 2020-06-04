const defaultState = {
  habitList: [],
  habit: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_HABIT':
      let getHabit = action.payload.habit;
      return {...state, habitList: getHabit}
    case 'GET_HABIT_BY_ID':
      let getHabitById = action.payload.habitById;
      return {...state, habit: getHabitById}
    default:
      return state
  }
}

export default reducer;