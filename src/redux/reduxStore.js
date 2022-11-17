import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'
import friendsPanelReducer from './friendsPanelReducer.js';

let reducers = combineReducers({
    profilePage: profileReducer,   // profileReducer : profileReducer,
    messagesPage: dialogsReducer,
    friendsPanel: friendsPanelReducer
})

let store = createStore(reducers);

export default store;