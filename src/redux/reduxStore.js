import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'
import friendsPanelReducer from './friendsPanelReducer.js';
import usersReducer from "./usersReducer.js";

let reducers = combineReducers({
    profilePage: profileReducer,   // profileReducer : profileReducer,
    messagesPage: dialogsReducer,
    friendsPanel: friendsPanelReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;