import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state, ownProps) => ({
  
})


const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);