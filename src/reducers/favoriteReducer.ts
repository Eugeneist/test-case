import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from '../actionTypes/favoriteTypes';
import { PostListProps } from '../interfaces/interfaces';

const favoriteList: any = [];

const favoriteReducer = (state = favoriteList, action: any) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const article = action.payload;

      const isArticleExist = state.find(
        (item: PostListProps) => item.id === article.id,
      );

      if (isArticleExist) {
        return state;
      } else {
        const article = action.payload;
        return [
          ...state,
          {
            ...article,
            amount: 1,
          },
        ];
      }
    }

    case REMOVE_FROM_FAVORITE:
      const article = action.payload;

      const isArticleExistDel = state.find(
        (item: PostListProps) => item.id === article.id,
      );

      if (isArticleExistDel.amount === 1) {
        return state.filter(
          (item: PostListProps) => item.id !== isArticleExistDel.id,
        );
      } else {
        return state.map((item: any) =>
          item.id === article.id ? { ...item, amount: item.amount - 1 } : item,
        );
      }

    default: {
      return state;
    }
  }
};

export default favoriteReducer;
