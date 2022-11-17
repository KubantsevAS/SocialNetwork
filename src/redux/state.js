const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                number: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(store);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(store);
        } else if (action.type === ADD_MESSAGE) {
            let newId = this._state.messagesPage.messagesData[this._state.messagesPage.messagesData.length - 1].id
            let newMessage = {
                id: newId + 1,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(store);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(store);
        }
    }
    
}


export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageText = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
})
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export default store;