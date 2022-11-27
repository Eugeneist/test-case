import { useState } from 'react';
import Container from '@mui/material/Container';
import {
  PostList,
  ModalComponent,
  Form,
  GoToTopButton,
} from '../../components';

const NewsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      maxWidth="xl"
      sx={{ padding: '100px 15px', backgroundColor: '#cac5b1' }}
    >
      <PostList />
      <ModalComponent
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      >
        <Form handleClose={handleClose} />
      </ModalComponent>
      <GoToTopButton />
    </Container>
  );
};

export default NewsPage;
