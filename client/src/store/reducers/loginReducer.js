const defaultState = {
  logedin: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGEDIN':
      let statusLogin = action.payload.loginStatus
      return {...state, logedin: statusLogin}
    case 'LOGOUT':
      let statusLogout = action.payload.loginStatus
      return {...state, logedin: statusLogout}
    default:
      return state
  }
}

export default reducer;