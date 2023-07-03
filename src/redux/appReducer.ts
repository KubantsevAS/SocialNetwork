import { getLogin } from './authReducer';

const INIT_SUCCESS = 'INIT_SUCCESS';

export interface IInitialStateType {
  initialized: boolean;
}

const initialState: IInitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): IInitialStateType => {
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

interface IInitSuccessActionType {
  type: typeof INIT_SUCCESS;
}

export const initSuccess = (): IInitSuccessActionType => ({
  type: INIT_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getLogin());

  promise.then(() => {
    dispatch(initSuccess());
  });
};

export default appReducer;
