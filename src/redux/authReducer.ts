import { usersAPI, authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR = 'auth/SET_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

const initialState = {
  // eslint-disable-next-line prettier/prettier
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  errorMessage: false,
  captchaUrl: null as string | null,
  userPhoto: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        ...action.errorMessage,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  errorMessage: boolean,
  captchaUrl: string | null,
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType,
};

const setUserPhoto = (userPhoto: string) => ({
  type: SET_USER_PHOTO,
  payload: { userPhoto },
});

export const setErrorMessage = () => ({ type: SET_ERROR, errorMessage: true });

export const setAuthUserData = (
  id: number,
  email: string,
  login: string,
  isAuth: boolean,
  errorMessage: boolean,
  captchaUrl: string
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth, errorMessage, captchaUrl },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {
    captchaUrl: string,
  },
};

const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getLogin = () => async (dispatch: any) => {
  const response = await usersAPI.getLogin();

  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true, null, null));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getLogin());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      dispatch(setErrorMessage());
    }
  };

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, false, null));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const getUserPhoto = (userId: number) => async (dispatch: any) => {
  const response = await authAPI.getProfile(userId);
  dispatch(setUserPhoto(response.data.photos.large));
};

export default authReducer;
