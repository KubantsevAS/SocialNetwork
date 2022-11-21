const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', number: 20 },
        { id: 2, message: "It's my first post", number: 15 },
        { id: 3, message: "Let's go!", number: 32 },
    ],
    newPostText: 'ReactRedux'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newId = state.postsData[state.postsData.length - 1].id
            return {
                ...state,
                postsData : [...state.postsData, {id: newId + 1, message: state.newPostText, number: 0,} ],
                newPostText : ''
            }
            
        case UPDATE_NEW_POST_TEXT : 
            return {
                ...state, 
                newPostText : action.newText
            }
        default:
            return state;
    }
    
    
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;