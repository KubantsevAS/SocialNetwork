const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true
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
            }
        case SET_USERS: 
            return {
                ...state, 
                users: action.users}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT: 
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (toggleFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: toggleFetching })

export default usersReducer;

 // [
    //     { id: 1, photoUrl: 'https://img.freepik.com/premium-vector/sweety-pug-avatar_79416-88.jpg?w=2000', followed: false, fullName: 'Mr Pugls', status: 'I am a boss', location: { city: 'Saint-Petersburg', country: 'Russia' } },
    //     { id: 2, photoUrl: '../../redux/images/avatars/avatar6.jpg', followed: true, fullName: 'Rodri', status: 'Red sun in the sky', location: { city: 'Beijing', country: 'China' } },
    //     { id: 3, photoUrl: '../../redux/images/avatars/avatar4.jpg', followed: false, fullName: 'Gotfried', status: 'Winter is coming', location: { city: 'Leipzig', country: 'Germany' } },
    // ]