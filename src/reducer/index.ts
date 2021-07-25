import { combineReducers } from 'redux';
import link from './link';

const rootReducer = combineReducers({
  link,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
