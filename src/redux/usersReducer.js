import { usersAPI } from '../api/api';
import { updateObjInArray } from '../utilities/objectHelper/objectHelper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [false,]
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                }),
                //users: updateObjInArray(state.users, action.userId, 'id', {followed: false}),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)],

            }
        default:
            return state;
    }
}


//    ACTION CREATERS

export const acceptFollow = (userId) => ({ type: FOLLOW, userId });
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (toggleFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: toggleFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

// THUNK CREATERS

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptUnfollow);
    }
}

export default usersReducer;

 // [
    //     { id: 1, photoUrl: 'https://img.freepik.com/premium-vector/sweety-pug-avatar_79416-88.jpg?w=2000', followed: false, fullName: 'Mr Pugls', status: 'I am a boss', location: { city: 'Saint-Petersburg', country: 'Russia' } },
    //     { id: 2, photoUrl: '../../redux/images/avatars/avatar6.jpg', followed: true, fullName: 'Rodri', status: 'Red sun in the sky', location: { city: 'Beijing', country: 'China' } },
    //     { id: 3, photoUrl: '../../redux/images/avatars/avatar4.jpg', followed: false, fullName: 'Gotfried', status: 'Winter is coming', location: { city: 'Leipzig', country: 'Germany' } },
    // ]