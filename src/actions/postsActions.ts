import {
  ADD_TO_POSTS,
  ADD_TO_POSTS_RESPONSE,
  ADD_TO_POSTS_FAILTURE,
} from '../actionTypes/postsTypes';
import { AxiosResponse } from 'axios';

export const addToPosts = (data: AxiosResponse) => {
  return {
    type: ADD_TO_POSTS,
    payload: data,
  };
};

export const addToPostsResponse = (response: AxiosResponse) => {
  return {
    type: ADD_TO_POSTS_RESPONSE,
    payload: response,
  };
};

export const addToPostsFailture = (error: AxiosResponse) => {
  return {
    type: ADD_TO_POSTS_FAILTURE,
    payload: error,
  };
};
