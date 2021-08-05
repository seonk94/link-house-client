import User from 'src/models/User';

export const userConstants = {
  SET_USER: 'user/SER_USER' as const,
  FAIL_USER: 'user/FAIL_USER' as const,
  FETCH_USER: 'user/FETCH_USER' as const,
  LONIN_USER: 'user/LOGIN_USER' as const,
};

const userActions = {
  setUser: (user: User) => ({
    type: userConstants.SET_USER,
    payload: user,
  }),
  fetchUser: () => ({
    type: userConstants.FETCH_USER,
  }),
  loginUser: (input: { email: string, password: string }) => ({
    type: userConstants.LONIN_USER,
    payload: input,
  }),
  failUser: (message: string) => ({
    type: userConstants.FAIL_USER,
    payload: message,
  }),
};

export type UserActionType =
  | ReturnType<typeof userActions.setUser>
  | ReturnType<typeof userActions.loginUser>
  | ReturnType<typeof userActions.fetchUser>
  | ReturnType<typeof userActions.failUser>;

export default userActions;
