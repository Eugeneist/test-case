import { useForm, Resolver } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addToPostsResponse } from '../../actions/postsActions';
import { axios } from '../../helpers';
import { FormProps } from '../../interfaces/interfaces';
import { ErrorMessage } from '../Form';
import Box from '@mui/material/Box';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string | number;
  title: string;
  body: string;
  news: boolean;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
          },
          lastName: {
            type: 'required',
          },
          email: {
            type: 'required',
          },
          userId: {
            type: 'required',
          },
          title: {
            type: 'required',
            minLength: 3,
          },
          body: {
            type: 'required',
          },
        }
      : {},
  };
};

const Form = ({ handleClose }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver });

  const dispatch = useDispatch();

  const onSubmit = (data: FormValues) => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        dispatch(addToPostsResponse(response));
      })
      .catch((error) => {
        console.error('Something went wrong!', error);
      })
      .finally(() => {
        reset();
        handleClose();
      });
  };

  return (
    <Box sx={{ padding: '15px' }}>
      <form
        style={{
          width: '80%',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          margin: 'auto',
          backgroundColor: '#cac5b1',
          color: '#14213d',
          fontSize: '19px',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{ display: 'flex', gap: '40px', justifyContent: 'space-between' }}
        >
          <label style={{ paddingBottom: '20px' }}>
            First name:
            <input
              style={{
                width: '100%',
                height: '25px',
                border: '2px solid #14213d',
              }}
              type="text"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <ErrorMessage>First name is a required!</ErrorMessage>
            )}
          </label>

          <label style={{ paddingBottom: '20px' }}>
            Last name:
            <input
              style={{
                width: '100%',
                height: '25px',
                border: '2px solid #14213d',
              }}
              type="text"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <ErrorMessage>Last name is a required!</ErrorMessage>
            )}
          </label>
        </Box>

        <Box
          sx={{ display: 'flex', gap: '40px', justifyContent: 'space-between' }}
        >
          <label style={{ paddingBottom: '10px' }}>
            E-mail:
            <input
              style={{
                width: '100%',
                height: '25px',
                border: '2px solid #14213d',
              }}
              type="email"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && <ErrorMessage>E-Mail is a required!</ErrorMessage>}
          </label>
          <label style={{ paddingBottom: '10px' }}>
            Nickname:
            <input
              style={{
                width: '100%',
                height: '25px',
                border: '2px solid #14213d',
              }}
              type="userId"
              {...register('userId', { required: true })}
            />
            {errors.userId && (
              <ErrorMessage>Nickname is a required!</ErrorMessage>
            )}
          </label>
        </Box>

        <label style={{ paddingBottom: '20px' }}>
          Article title:
          <input
            style={{
              width: '100%',
              height: '25px',
              border: '2px solid #14213d',
            }}
            type="text"
            {...register('title', { required: true, minLength: 3 })}
          />
          {errors.title && <ErrorMessage>Title is a required!</ErrorMessage>}
        </label>

        <label htmlFor="body" style={{ paddingBottom: '10px' }}>
          Article text:
        </label>
        <textarea
          style={{ minHeight: '250px' }}
          {...register('body', {
            required: true,
            max: 1000,
            min: 10,
            maxLength: 10000,
          })}
        />
        {errors.body && (
          <ErrorMessage>Article body is a required!</ErrorMessage>
        )}

        <label style={{ paddingBottom: '20px' }}>
          <input
            type="checkbox"
            placeholder="Subscribe to Newsletter"
            id="news"
            {...register('news')}
          />
          <label htmlFor="news"> Subscribe to Newsletter</label>
        </label>

        <Box
          sx={{ display: 'flex', gap: '40px', justifyContent: 'space-between' }}
        >
          <button
            onClick={handleClose}
            style={{
              padding: '10px',
              marginBottom: '10px',
              width: '120px',
              alignContent: 'center',
              color: '#fff',
              backgroundColor: '#14213d',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            type="reset"
          >
            Close
          </button>
          <button
            style={{
              padding: '10px',
              marginBottom: '10px',
              width: '120px',
              alignContent: 'center',
              color: '#fff',
              backgroundColor: '#14213d',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Submit
          </button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
