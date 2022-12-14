import { profileAPI, usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', number: 20 },
        { id: 2, message: "It's my first post", number: 15 },
        { id: 3, message: "Let's go!", number: 32 },
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newId = state.postsData[state.postsData.length - 1].id
            return {
                ...state,
                postsData : [...state.postsData, {id: newId + 1, message: action.newPostText, number: 0,} ],
            }
        case SET_USER_STATUS : 
            return {
                ...state, 
                status: action.status
            }
        case SET_USER_PROFILE :
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
    
    
}


// ACTION CREATORS


export const setStatus = (status) => ({type: SET_USER_STATUS, status});

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
        dispatch(setStatus(status));
        }
    })
}

export const getUserInfo = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export default profileReducer;