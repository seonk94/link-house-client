import Tag from 'src/models/Tag';
import User from 'src/models/User';

import { UserActionType, userConstants } from './actions';

type State = {
  user: null | User;
  tags: string[];
  message: unknown;
  tagMap: Map<string, number>;
};

const initialState: State = {
  user: null,
  tags: [],
  message: '',
  tagMap: new Map(),
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
    case userConstants.FETCH_TAGS:
      return {
        ...state,
      };
    case userConstants.SET_TAGS:
      action.payload.forEach((tag) => {
        const value = state.tagMap.get(tag);
        if (value) {
          state.tagMap.set(tag, value + 1);
        } else {
          state.tagMap.set(tag, 1);
        }
      });
      return {
        ...state,
        tags: [...state.tagMap.keys()],
      };
    case userConstants.UPDATE_TAGS:
      action.payload.forEach((tag) => {
        const value = state.tagMap.get(tag);
        if (value) {
          state.tagMap.set(tag, value + 1);
        } else {
          state.tagMap.set(tag, 1);
        }
      });
      return {
        ...state,
        tags: [...state.tagMap.keys()],
      };
    case userConstants.DELETE_TAGS:
      action.payload.forEach((tag) => {
        const value = state.tagMap.get(tag);
        if (value && value > 1) {
          state.tagMap.set(tag, value - 1);
        } else {
          state.tagMap.delete(tag);
        }
      });
      return {
        ...state,
        tags: [...state.tagMap.keys()],
      };
    default:
      return state;
  }
}
export default userReducer;
