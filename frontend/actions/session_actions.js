import * as UtilAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = user => {

  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = user => {
  
  return {
    type: LOGOUT_CURRENT_USER,
    user
  }
};

const receiveErrors = errors => {

  return {
    type: RECEIVE_ERRORS,
    errors
  }
};

//thunk action creators

export const login = formUser => {
 debugger
  return (dispatch) => {
    return UtilAPI.login(formUser)
      .then(user => dispatch(receiveCurrentUser(user)))
  }
};


//how does formUser look? nested under user: key or no?
export const signup = formUser => {
debugger
  return (dispatch) => {
    return UtilAPI.signup(formUser)
      .then(user => dispatch(receiveCurrentUser(user)))
  }
};

export const logout = () => dispatch => UtilAPI.logout()
  .then(() => dispatch(logoutCurrentUser()));