import { friendsAPI } from '../api/api';
import defAva from './images/avatars/AvaDefault.png';

const SET_FOLLOWED_USERS = 'SET_FOLLOWED_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

type UsersType = {
  name: string,
  id: string | number,
  status: string,
  photos: any,
};

type InitialStateType = {
  users: Array<UsersType>,
  isFetching: boolean,
  followed: boolean,
};

const initialState: InitialStateType = {
  users: [
    {
      name: 'Api rip',
      id: 'nuumbeeeer',
      status: 'stat',
      photos: {
        small: defAva,
      },
    },
  ],
  isFetching: true,
  followed: true,
};

const friendsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FOLLOWED_USERS:
      return {
        ...state,
        users: action.users,
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

type SetFriendsType = {
  type: typeof SET_FOLLOWED_USERS,
  users: UsersType,
};

export const setFriends = (users: UsersType): SetFriendsType => ({
  type: SET_FOLLOWED_USERS,
  users,
});

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};

export const toggleIsFetching = (
  toggleFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: toggleFetching,
});

export const requestFriends = () => {
  return async (dispatch: any) => {
    // dispatch(toggleIsFetching(true));

    const data = await friendsAPI.getUsers(true, 1, 100);
    // dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
  };
};

export default friendsReducer;
