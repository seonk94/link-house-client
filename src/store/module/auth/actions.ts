import Tag from 'src/models/Tag';
import User from 'src/models/User';

export const userConstants = {
  SET_USER: 'user/SER_USER' as const,
  FAIL_USER: 'user/FAIL_USER' as const,
  FETCH_USER: 'user/FETCH_USER' as const,
  SIGNIN_USER: 'user/SIGNIN_USER' as const,
  SIGNUP_USER: 'user/SIGNUP_USER' as const,
  FETCH_TAGS: 'user/FETCH_TAGS' as const,
  SET_TAGS: 'user/SET_TAGS' as const,
  UPDATE_TAGS: 'user/UPDATE_TAGS' as const,
  DELETE_TAGS: 'user/DELETE_TAGS' as const,
};

const userActions = {
  setUser: (user: User) => ({
    type: userConstants.SET_USER,
    payload: user,
  }),
  fetchUser: () => ({
    type: userConstants.FETCH_USER,
  }),
  signInUser: (input: { email: string; password: string }) => ({
    type: userConstants.SIGNIN_USER,
    payload: input,
  }),
  signUpUser: (input: { email: string; password: string; name: string }) => ({
    type: userConstants.SIGNUP_USER,
    payload: input,
  }),
  failUser: (message: unknown) => ({
    type: userConstants.FAIL_USER,
    payload: message,
  }),
  fetchTags: () => ({
    type: userConstants.FETCH_TAGS,
  }),
  setTags: (tags: string[]) => ({
    type: userConstants.SET_TAGS,
    payload: tags,
  }),
  updateTags: (tags: string[]) => ({
    type: userConstants.UPDATE_TAGS,
    payload: tags,
  }),
  deleteTags: (tags: string[]) => ({
    type: userConstants.DELETE_TAGS,
    payload: tags,
  }),
};

export type UserActionType =
  | ReturnType<typeof userActions.setUser>
  | ReturnType<typeof userActions.signInUser>
  | ReturnType<typeof userActions.signUpUser>
  | ReturnType<typeof userActions.fetchUser>
  | ReturnType<typeof userActions.failUser>
  | ReturnType<typeof userActions.fetchTags>
  | ReturnType<typeof userActions.setTags>
  | ReturnType<typeof userActions.updateTags>
  | ReturnType<typeof userActions.deleteTags>;

export default userActions;
