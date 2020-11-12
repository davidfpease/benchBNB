
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state) => {

  let userId = state.session.id;
  // debugger
  return {
    currentUser: state.entities.users[userId]
  }
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    logout: () => dispatch(logout())
  };
  
};

export default connect( mapStateToProps, mapDispatchToProps)(Greeting);
