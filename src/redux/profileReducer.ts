import { profileAPI, usersAPI } from '../api/api';
import { PhotosType, PostsDataType, ProfileType } from '../types/types';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_FORMDATA_ERROR = 'SET_FORMDATA_ERROR';

type InitialStateType = {
  postsData: Array<PostsDataType>,
  profile: ProfileType | null,
  status: string | boolean,
  formError: boolean,
};

const initialState: InitialStateType = {
  postsData: [
    { id: 1, message: "It's a hard code on a hard drive!", number: 20 },
    { id: 2, message: 'My first post', number: 15 },
    { id: 3, message: "Let's celebrate and create some app", number: 32 },
  ],
  profile: null,
  status: '',
  formError: false,
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      const newId = state.postsData[state.postsData.length - 1].id;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: newId + 1, message: action.newPostText, number: 0 },
        ],
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((pId) => pId.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SET_FORMDATA_ERROR:
      return {
        ...state,
        formError: action.formError,
      };
    default:
      return state;
  }
};

// ACTION CREATORS

type SetStatusActionType = {
  type: typeof SET_USER_STATUS,
  status: string,
};

type AddPostActionType = {
  type: typeof ADD_POST,
  newPostText: string,
};

type DeletePostActionType = {
  type: typeof DELETE_POST,
  postId: number,
};

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_USER_STATUS,
  status,
});

export const addPost = (newPostText: string): AddPostActionType => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType,
};

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType,
};

const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type SetFormErrorMessageActionType = {
  type: typeof SET_FORMDATA_ERROR,
  formError: boolean,
};

const setFormErrorMessage = (
  formError: boolean
): SetFormErrorMessageActionType => ({
  type: SET_FORMDATA_ERROR,
  formError,
});

// THUNK CREATOTS

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const uploadPhoto = (file: string) => async (dispatch: any) => {
  const response = await profileAPI.uploadPhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(setFormErrorMessage(false));
      dispatch(getUserInfo(userId));
    } else {
      dispatch(setFormErrorMessage(response.data.messages[0]));
    }
  };

export const getUserInfo = (userId: number) => async (dispatch: any) => {
  try {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  } catch (error) {}
};

export default profileReducer;
