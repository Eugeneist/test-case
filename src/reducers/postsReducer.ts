import {
  ADD_TO_POSTS,
  ADD_TO_POSTS_RESPONSE,
  ADD_TO_POSTS_FAILTURE,
} from '../actionTypes/postsTypes';

const postsList: any = [];

const postsReducer = (state = postsList, action: any) => {
  switch (action.type) {
    case ADD_TO_POSTS: {
      const data = action.payload;

      return [...data];
    }
    case ADD_TO_POSTS_RESPONSE: {
      const response = action.payload;

      const data = state.unshift(response);

      return [...data];
    }
    case ADD_TO_POSTS_FAILTURE: {
      const error = action.payload;

      return [...error];
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
