import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'
import friendsPanelReducer from './friendsPanelReducer.js';
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,   // profileReducer : profileReducer,
    messagesPage: dialogsReducer,
    friendsPanel: friendsPanelReducer,
    usersPage: usersReducer,
    auth: authReducer,
    //form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.Storage = store;

export default store;