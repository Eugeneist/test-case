import { PostListProps } from '../../interfaces/interfaces';
import { Post } from '../Post';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const PostList: React.FC = () => {
  const favorite = useSelector((state: RootState) => state.favoriteReducer);

  if (favorite.length === 0) {
    return (
      <Container
        sx={{
          alignContent: 'center',
          padding: '10px',
          height: '100vh',
          backgroundColor: '#cac5b1',
        }}
        maxWidth="lg"
      >
        <Stack sx={{ width: '60%', margin: 'auto' }} spacing={2}>
          <Alert variant="filled" severity="info">
            You don't have favorite articles!
          </Alert>
        </Stack>
      </Container>
    );
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
              Your favorite articles:
            </Typography>
          </TableHead>
          {favorite.map((post: PostListProps) => (
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
