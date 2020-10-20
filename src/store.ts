import { createStore, combineReducers } from 'redux';
import { userDetails } from './UserDetails/reducer/userDetails';
import { userList } from './UserList/reducer/userList';

const rootReducer = combineReducers({
  userList,
  userDetails
});

export default createStore(rootReducer);
