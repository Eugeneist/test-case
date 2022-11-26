import { PostListProps } from '../../interfaces/interfaces';
import { Post } from '../Post';
import { Loader } from '../Loader';
import { Error } from '../Error';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useAxiosGet } from '../../hooks';
import { useAxiosGetProps } from '../../interfaces/interfaces';

const PostList: React.FC = () => {
  const { state, isLoading, error, setLimit, limit }: useAxiosGetProps =
    useAxiosGet();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, borderSpacing: '30px' }}>
        <TableBody>
          <TableHead
            sx={{
              display: 'flex',
              alignContent: 'baseline',
              justifyContent: 'center',
              gap: '10px',
              paddingBottom: '15px',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Show me
            </Typography>
            <input
              style={{
                width: '5%',
                height: '25px',
                border: '2px solid #14213d',
              }}
              value={limit}
              max="15"
              min="5"
              onChange={(event) => setLimit(event.target.value)}
              type="number"
            />
            <Typography variant="h6" gutterBottom>
              articles
            </Typography>
          </TableHead>
          {state.map((post: PostListProps) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Post
                id={post.id}
                article={post}
                key={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostList;
