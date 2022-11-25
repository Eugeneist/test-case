import { useState } from 'react';
import { PostListProps } from '../../interfaces/interfaces';
import { Post } from '../Post';
import { Loader } from '../Loader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useAxiosGet } from '../../hooks';

const PostList: any = (): any => {
  const { state, isLoading } = useAxiosGet();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, borderSpacing: '30px' }}>
        <TableBody>
          {state.map((post: PostListProps) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Post
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
