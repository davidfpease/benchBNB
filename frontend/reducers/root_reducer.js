import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import session_reducer from './session_reducer';
import errors_reducer from './errors_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: session_reducer,
  errors: errors_reducer 
});

export default rootReducer;