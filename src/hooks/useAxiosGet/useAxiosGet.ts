import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToPosts } from '../../actions/postsActions';
import { AppDispatch, RootState } from '../../store/store';

const useAxiosGet = () => {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector((state: RootState) => state.postsReducer);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/posts?_limit=${limit}&_page=${currentPage} `)
      .then((data: AxiosResponse) => {
        dispatch(addToPosts(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, dispatch, limit]);

  useEffect(() => {
    const scrollHandler = (): void => {
      if (
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        let nextUpdate = +limit + 5;
        setLimit(nextUpdate);
      }
    };
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [limit]);

  return { state, error, isLoading, setLoading, limit, setLimit };
};

export default useAxiosGet;
