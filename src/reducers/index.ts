import postsReducer from './postsReducer';
import favoriteReducer from './favoriteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsReducer,
  favoriteReducer,
});

export default rootReducer;
