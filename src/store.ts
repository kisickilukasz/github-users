import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { userDetails } from './UserDetails/reducer/userDetails';
import { userList } from './UserList/reducer/userList';

// creates logger with collapsed logs in the console
const logger = createLogger({ collapsed: true });

// combines all reducers into global store
const rootReducer = combineReducers({
  userList,
  userDetails
});

// creates global store, connects redux devtools and other middlewares
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
