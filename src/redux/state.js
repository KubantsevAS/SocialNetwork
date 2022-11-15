import rerenderEntireTree from "../render";

let state = {

    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Leo', ava: 1},
            { id: 2, name: 'Vasily', ava: 2},
            { id: 3, name: 'Gotfried', ava: 3},
            { id: 4, name: 'Mark', ava: 4},
            { id: 5, name: 'Gasdro', ava: 5 },
            { id: 6, name: 'Rodri', ava: 6}
        ],
        messagesData: [
            { id: 1, message: 'Hey' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'And that how it started' },
            { id: 4, message: 'Anyway what it takes' },
            { id: 5, message: 'lol' },
        ],
        newMessageText : ''
    },

    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', number: 20 },
            { id: 2, message: "It's my first post", number: 15 },
            { id: 3, message: "Let's go!", number: 32 },
        ],
        newPostText : 'ReactRedux'
    },

    friendsPanel: {
        friendsList: [
            { id: 4, name: 'Mark', ava: 4},
            { id: 2, name: 'Vasily', ava: 2},
            { id: 6, name: 'Rodri', ava: 6},
        ],
    }
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        number: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newId = state.messagesPage.messagesData[state.messagesPage.messagesData.length - 1].id
    let newMessage = {
        id: newId + 1,
        message: state.messagesPage.newMessageText,
    };

    state.messagesPage.messagesData.push(newMessage);

    state.messagesPage.newMessageText = '';

    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}


export default state;