import Fab from '@mui/material/Fab';
import { AiFillCaretUp } from 'react-icons/ai';

const GoToTopButton: React.FC = () => {
  let rootElement = document.documentElement;

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Fab
      className="GoToTopButton"
      color="primary"
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 90,
        right: 16,
        backgroundColor: '#2b2d42',
        '&:hover': { backgroundColor: '#434068' },
      }}
    >
      <AiFillCaretUp />
    </Fab>
  );
};

export default GoToTopButton;
