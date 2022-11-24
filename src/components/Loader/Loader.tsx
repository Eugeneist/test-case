import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Loader = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '100px 15px', height: '100vh' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress sx={{ margin: '0 auto' }} />
      </Box>
    </Container>
  );
};

export default Loader;
