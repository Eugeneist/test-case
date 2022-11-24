import { ADD_TO_POSTS } from '../actionTypes/postsTypes';
import { ADD_TO_POSTS_RESPONSE } from '../actionTypes/postsTypes';

export const addToPosts = (data: any) => {
  return {
    type: ADD_TO_POSTS,
    payload: data,
  };
};

export const addToPostsResponse = (response: any) => {
  return {
    type: ADD_TO_POSTS_RESPONSE,
    payload: response,
  };
};
