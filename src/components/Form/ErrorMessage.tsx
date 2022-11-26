import Typography from '@mui/material/Typography';
import { ErrorMessageProps } from '../../interfaces/interfaces';

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
}: ErrorMessageProps) => {
  return (
    <Typography sx={{ color: 'red' }} variant="body1" gutterBottom>
      {children}
    </Typography>
  );
};

export default ErrorMessage;
