import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Button from '@mui/material/Button';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';

const Header: React.FC = () => {
  const favorite = useSelector((state: RootState) => state.favoriteReducer);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2b2d42' }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            News 24
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            <NavLink style={{ textDecoration: 'none' }} to="/">
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    color: '#b2a997',
                    backgroundColor: '#2b2d42',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                Main
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/news">
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    color: '#b2a997',
                    backgroundColor: '#2b2d42',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                News
              </Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/favorite">
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    color: '#b2a997',
                    backgroundColor: '#2b2d42',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Badge badgeContent={favorite?.length} color="error"></Badge>
                <BookmarksIcon />
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
