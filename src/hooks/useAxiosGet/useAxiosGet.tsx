import { useEffect, useState } from 'react';
import { axios } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addToPosts } from '../../actions/postsActions';

const useAxiosGet = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.postsReducer);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/posts`)
      .then((data) => {
        dispatch(addToPosts(() => data));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return { state, error, isLoading, setLoading };
};

export default useAxiosGet;
