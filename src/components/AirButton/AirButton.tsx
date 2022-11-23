
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';



const AirButton = () => {

  return (
      <SpeedDial
        ariaLabel="Add new article"
        sx={{ position: 'fixed', bottom: 16, right: 16, '& .MuiFab-primary': { backgroundColor: "#2b2d42"} }}
        icon={<SpeedDialIcon sx={{backgroundColor: "#2b2d42"}} />}
      >
      </SpeedDial>
  );
}

export default AirButton;