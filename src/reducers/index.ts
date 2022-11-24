import postsReducer from './postsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
