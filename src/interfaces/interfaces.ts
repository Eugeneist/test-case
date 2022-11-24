export interface PostListProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  news?: boolean;
}

export interface PostProps {
  userId: number;
  title: string;
  body: string;
}

export interface ModalProps {
  children?: React.ReactNode;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export interface FormProps {
  handleClose: () => void;
}

export interface ErrorMessageProps {
  children?: string;
}
