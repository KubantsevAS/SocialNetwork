import { usersAPI, authAPI } from './../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = "SET_ERROR"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: false,
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
        default:
            return state;
    }
}


export const setErrorMessage = () => ({ type: SET_ERROR, errorMessage: true })
export const setAuthUserData = (id, email, login, isAuth, errorMessage) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth, errorMessage } });

export const getLogin = () => (dispatch) => {
    return usersAPI.getLogin()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getLogin());
                } else {
                    dispatch(setErrorMessage())
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false, false));
                }
            })
    }
}

export default authReducer;