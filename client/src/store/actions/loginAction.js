export const userLogin = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGEDIN',
      payload: {
        loginStatus: true
      }
    })
  }
}

export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      payload: {
        loginStatus: false
      }
    })
  }
}