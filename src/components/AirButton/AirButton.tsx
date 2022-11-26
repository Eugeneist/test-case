import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ButtonProps } from '../../interfaces/interfaces';

const AirButton: React.FC<ButtonProps> = ({ open }: ButtonProps) => {
  return (
    <Fab
      color="primary"
      onClick={open}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#2b2d42',
        '&:hover': { backgroundColor: '#434068' },
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AirButton;
