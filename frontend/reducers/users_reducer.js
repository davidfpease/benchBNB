import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        const { user } = action;
        newState = Object.assign({}, state, { [user.id]: user });
        return newState;
      default:
        return state;
    }
};