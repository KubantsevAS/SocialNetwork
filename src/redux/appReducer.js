import { getLogin } from './authReducer';

const INIT_SUCCESS = 'INIT_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initSuccess = () => ({ type: INIT_SUCCESS });

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getLogin());

  promise.then(() => {
    dispatch(initSuccess());
  });
};

export default appReducer;
