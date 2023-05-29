import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_FORMDATA_ERROR = 'SET_FORMDATA_ERROR';

type PostsDataType = {
  id: number,
  message: string,
  number: number,
};

type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
};

type PhotosType = {
  small: string | null;
  large: string| null;
};

type ProfileType = {
  userId: number,
  aboutMe: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: ContactsType,
  photos: PhotosType,
};

const initialState = {
  postsData: [
    { id: 1, message: "It's a hard code on a hard drive!", number: 20 },
    { id: 2, message: 'My first post', number: 15 },
    { id: 3, message: "Let's celebrate and create some app", number: 32 },
    // eslint-disable-next-line prettier/prettier
  ] as Array<PostsDataType>,
  profile: null as ProfileType | null,
  status: '' as string,
  formError: false as boolean,
};

export type InitialStateType = typeof initialState;

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

export const setStatus = (status) => ({ type: SET_USER_STATUS, status });

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

const setFormErrorMessage = (formError) => ({
  type: SET_FORMDATA_ERROR,
  formError,
});

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const uploadPhoto = (file) => async (dispatch) => {
  const response = await profileAPI.uploadPhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setFormErrorMessage(false));
    dispatch(getUserInfo(userId));
  } else {
    dispatch(setFormErrorMessage(response.data.messages[0]));
  }
};

export const getUserInfo = (userId) => async (dispatch) => {
  try {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  } catch (error) {}
};

export default profileReducer;
