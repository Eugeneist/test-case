import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addToPosts } from '../../actions/postsActions';

const useAxiosGet = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.postsReducer);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/posts?_limit=${limit}&_page=${currentPage} `)
      .then((data: any) => {
        dispatch(addToPosts(data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, dispatch, limit]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      let nextUpdate = +limit + 5;
      setLimit(nextUpdate);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return { state, error, isLoading, setLoading, limit, setLimit };
};

export default useAxiosGet;
