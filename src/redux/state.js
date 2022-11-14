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
    },

    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', number: 20 },
            { id: 2, message: "It's my first post", number: 15 },
            { id: 3, message: "Let's go!", number: 32 },
        ],
    },

    friendsPanel: {
        friendsList: [
            { id: 4, name: 'Mark', ava: 4},
            { id: 2, name: 'Vasily', ava: 2},
            { id: 6, name: 'Rodri', ava: 6},
        ],
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        number: 0,
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}


export default state;