import { forwardRef } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ModalProps } from "../../interfaces/interfaces";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Modal: React.FC<ModalProps> = ({close , children}) => {


     return (
        <Dialog
        TransitionComponent={Transition}
        keepMounted
        // onClose={close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={close}>Disagree</Button>
          <Button onClick={close}>Agree</Button> */}
        </DialogActions>
      </Dialog>
     )
}

export default Modal;