import User from 'src/models/User';

import { UserActionType, userConstants } from './actions';

type State = {
  user: null | User;
  message: unknown;
};

const initialState: State = {
  user: null,
  message: '',
};

function userReducer(state: State = initialState, action: UserActionType): State {
  switch (action.type) {
    case userConstants.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userConstants.FAIL_USER:
      return {
        ...state,
        message: action.payload,
      };
    case userConstants.FETCH_USER:
      return {
        ...state,
      };
    case userConstants.SIGNIN_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default userReducer;
