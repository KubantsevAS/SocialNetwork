import { friendsAPI } from "../api/api";
import defAva from './images/avatars/AvaDefault.png'

const SET_FOLLOWED_USERS = 'SET_FOLLOWED_USERS'; 
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [
        {
            name: "Api rip",
            id: "nuumbeeeer",
            status: "stat",
            photos: {
                small: defAva
            }
        }
    ],
    isFetching: true,
    followed: true,

}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {  
        case SET_FOLLOWED_USERS:
            return {
                ...state,
                users: action.users
            }
            
        case TOGGLE_IS_FETCHING:
            
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const setFriends = (users) => ({ type: SET_FOLLOWED_USERS, users });
export const toggleIsFetching = (toggleFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: toggleFetching });

export const requestFriends = () => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));

        let data = await friendsAPI.getUsers(true, 100);
        dispatch(toggleIsFetching(false));
        dispatch(setFriends(data.items));
    }
}

export default friendsReducer;