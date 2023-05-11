import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import friendsReducer from './friendsReducer.js';
import usersReducer from './usersReducer.js';
import authReducer from './authReducer.js';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer.js';

const reducers = combineReducers({
  profilePage: profileReducer, // profileReducer : profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  friendsPage: friendsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.Storage = store;

export default store;
