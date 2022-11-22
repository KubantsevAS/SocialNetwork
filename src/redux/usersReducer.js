const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


let initialState = {
    users: []
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
                users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users});

export default usersReducer;

 // [
    //     { id: 1, photoUrl: 'https://img.freepik.com/premium-vector/sweety-pug-avatar_79416-88.jpg?w=2000', followed: false, fullName: 'Mr Pugls', status: 'I am a boss', location: { city: 'Saint-Petersburg', country: 'Russia' } },
    //     { id: 2, photoUrl: '../../redux/images/avatars/avatar6.jpg', followed: true, fullName: 'Rodri', status: 'Red sun in the sky', location: { city: 'Beijing', country: 'China' } },
    //     { id: 3, photoUrl: '../../redux/images/avatars/avatar4.jpg', followed: false, fullName: 'Gotfried', status: 'Winter is coming', location: { city: 'Leipzig', country: 'Germany' } },
    // ]