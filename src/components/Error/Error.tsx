import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const Error: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '100px 15px' }}>
      <Stack sx={{ width: '60%', height: '100vh', margin: 'auto' }} spacing={2}>
        <Alert variant="filled" severity="error">
          Error! Something get wrong...
        </Alert>
      </Stack>
    </Container>
  );
};

export default Error;
