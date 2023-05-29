import { usersAPI } from '../api/api';
import { PhotosType, UserType } from '../types/types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type InitialStateType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<boolean | number>,
};

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [false],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};

//    ACTION CREATERS

type acceptFollowActionType = {
  type: typeof FOLLOW,
  userId: number,
};

export const acceptFollow = (userId: number): acceptFollowActionType => ({
  type: FOLLOW,
  userId,
});

type acceptUnfollowActionType = {
  type: typeof UNFOLLOW,
  userId: number,
};

export const acceptUnfollow = (userId: number): acceptUnfollowActionType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>,
};

export const setUsers = (users: Array<UserType>): setUsersActionType => ({
  type: SET_USERS,
  users,
});

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number,
};

export const setCurrentPage = (
  currentPage: number
): setCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  count: number,
};

export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

type toggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};

export const toggleIsFetching = (
  toggleFetching: boolean
): toggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: toggleFetching,
});

type toggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean,
  userId: number,
};

export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): toggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// THUNK CREATERS

export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      acceptFollow
    );
  };
};

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      acceptUnfollow
    );
  };
};

export default usersReducer;
