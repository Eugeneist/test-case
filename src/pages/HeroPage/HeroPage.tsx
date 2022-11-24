import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://i.ibb.co/0t22051/rm175-noon-03b.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '150px 15px',
        height: '100vh',
      }}
    >
      <Typography
        sx={{
          fontSize: '90px',
          color: '#f8f4f2',
          textShadow: '1px 1px 1px #000',
          textAlign: 'center',
        }}
        variant="h1"
        component="div"
        gutterBottom
      >
        News 24
      </Typography>
      <Typography
        sx={{
          fontSize: '25px',
          color: '#f8f4f2',
          textShadow: '1px 1px 1px #000',
          textAlign: 'center',
          marginBottom: '30px',
        }}
        variant="subtitle1"
        component="div"
        gutterBottom
      >
        Read the World Today.
      </Typography>
      <NavLink style={{ textDecoration: 'none' }} to="/news">
        <Button
          sx={{
            backgroundColor: '#2b2d42',
            '&:hover': {
              color: '#b2a997',
              backgroundColor: '#2b2d42',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          variant="contained"
        >
          Get News
        </Button>
      </NavLink>
    </Box>
  );
};

export default HeroPage;
