import { getLogin } from './authReducer.ts';

const INIT_SUCCESS = 'INIT_SUCCESS';

export type InitialStateType = {
  initialized: boolean,
};

const initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitSuccessActionType = {
  type: typeof INIT_SUCCESS,
};

export const initSuccess = (): InitSuccessActionType => ({
  type: INIT_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getLogin());

  promise.then(() => {
    dispatch(initSuccess());
  });
};

export default appReducer;
