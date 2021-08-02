import Link from 'src/models/Link';
import User from 'src/models/User';
import { UserActionType, userConstants } from './actions';

type State = {
  user: null | User;
  message: string;
}

const initialState: State = {
  user: null,
  message: '',
};

function userReducer(state: State = initialState, action: UserActionType): State {
  switch (action.type) {
    case userConstants.USER_FETCH_SUCCESS: return {
      ...state,
      user: action.payload,
    };
    case userConstants.USER_FETCH_FAILURE: return {
      ...state,
      message: action.payload,
    };
    case userConstants.USER_FETCH_REQUEST: return {
      ...state,
    };
    default: return state;
  }
}
export default userReducer;
