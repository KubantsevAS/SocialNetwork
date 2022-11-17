import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'
import friendsPanelReducer from './friendsPanelReducer.js';



let store = {

    _callSubscriber () {
        console.log('state changed')
    },
    _state: {

        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Leo', ava: 1 },
                { id: 2, name: 'Vasily', ava: 2 },
                { id: 3, name: 'Gotfried', ava: 3 },
                { id: 4, name: 'Mark', ava: 4 },
                { id: 5, name: 'Gasdro', ava: 5 },
                { id: 6, name: 'Rodri', ava: 6 }
            ],
            messagesData: [
                { id: 1, message: 'Hey' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'And that how it started' },
                { id: 4, message: 'Anyway what it takes' },
                { id: 5, message: 'lol' },
            ],
            newMessageText: ''
        },

        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', number: 20 },
                { id: 2, message: "It's my first post", number: 15 },
                { id: 3, message: "Let's go!", number: 32 },
            ],
            newPostText: 'ReactRedux'
        },

        friendsPanel: {
            friendsList: [
                { id: 4, name: 'Mark', ava: 4 },
                { id: 2, name: 'Vasily', ava: 2 },
                { id: 6, name: 'Rodri', ava: 6 },
            ],
        }
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
    
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.friendsPanel = friendsPanelReducer(this._state.friendsPanel, action);

    
    
        this._callSubscriber(this._state);
    
    }
    
}




export default store;