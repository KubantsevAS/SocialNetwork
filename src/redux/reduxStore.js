import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'
import friendsPanelReducer from './friendsPanelReducer.js';
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer.js";

let reducers = combineReducers({
    profilePage: profileReducer,   // profileReducer : profileReducer,
    messagesPage: dialogsReducer,
    friendsPanel: friendsPanelReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.Storage = store;

export default store;