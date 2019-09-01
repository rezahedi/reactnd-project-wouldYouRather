export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setLoginUser = (id) => {
  return {
    type: LOGIN_USER,
    id
  }
}

export const setLogoutUser = () => {
  return {
    type: LOGOUT_USER,
    id: null
  }
}