import { useEffect, useState } from "react";
import { axios } from "../../helpers";
import { PostListProps } from "../../interfaces/interfaces"
import { Post } from "../Post"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
 
const PostList: any = (): any => {
  const [posts, setPosts] = useState<any | undefined>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`/posts`)
      .then((data) => {
        setPosts(() => data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);


  return (
    <TableContainer>
          <Table sx={{ minWidth: 650, borderSpacing: "30px", }}>
            <TableBody>
              {posts.map((post:PostListProps) => (
                <TableRow
                  key={post.id}
                  sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <Post key={post.id} userId={post.userId} title={post.title} body={post.body}/>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
  };

export default PostList;