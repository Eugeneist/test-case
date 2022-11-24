import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '100px 15px' }}>
      <Stack sx={{ width: '60%', height: '100vh', margin: 'auto' }} spacing={2}>
        <Alert variant="filled" severity="error">
          Error 404. Not found.
        </Alert>
      </Stack>
    </Container>
  );
};

export default NotFound;
