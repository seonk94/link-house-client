import User from 'src/models/User';

export const userConstants = {
  USER_FETCH_SUCCESS: 'user/USER_FETCH_SUCCESS' as const,
  USER_FETCH_FAILURE: 'user/USER_FETCH_FAILURE' as const,
  USER_FETCH_REQUEST: 'user/USER_FETCH_REQUEST' as const,
};

const userActions = {
  userFetchSuccess: (user: User) => ({
    type: userConstants.USER_FETCH_SUCCESS,
    payload: user,
  }),
  userFetchRequest: (input: { email: string, password: string }) => ({
    type: userConstants.USER_FETCH_REQUEST,
    payload: input,
  }),
  userFetchFailure: (message: string) => ({
    type: userConstants.USER_FETCH_FAILURE,
    payload: message,
  }),
};

export type UserActionType =
  | ReturnType<typeof userActions.userFetchSuccess>
  | ReturnType<typeof userActions.userFetchRequest>
  | ReturnType<typeof userActions.userFetchFailure>;

export default userActions;
