import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ModalProps } from '../../interfaces/interfaces';
import { AirButton } from '../AirButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: '#cac5b1',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent: React.FC<ModalProps> = ({
  children,
  handleOpen,
  handleClose,
  open,
}: ModalProps) => {
  return (
    <>
      <AirButton open={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComponent;
