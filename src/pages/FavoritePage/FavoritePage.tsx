import Container from '@mui/material/Container';
import { FavoriteList } from '../../components';

const FavoritePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: '100px 15px', backgroundColor: '#cac5b1' }}
    >
      <FavoriteList />
    </Container>
  );
};

export default FavoritePage;
