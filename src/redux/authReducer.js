import { usersAPI, authAPI, securityAPI } from './../api/api'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_ERROR = "auth/SET_ERROR"
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: false,
    captchaUrl: null        // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                ...action.errorMessage,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setErrorMessage = () => ({ type: SET_ERROR, errorMessage: true })
export const setAuthUserData = (id, email, login, isAuth, errorMessage, captchaUrl) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth, errorMessage, captchaUrl } });

const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getLogin = () => async (dispatch) => {
    let response = await usersAPI.getLogin();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getLogin());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch(setErrorMessage())
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, false));
    }
}

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;