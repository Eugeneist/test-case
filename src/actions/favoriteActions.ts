import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from '../actionTypes/favoriteTypes';
import { PostListProps } from '../interfaces/interfaces';

export const addToFavorite = (product: PostListProps) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: product,
  };
};

export const removeFromFavorite = (product: PostListProps) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: product,
  };
};
