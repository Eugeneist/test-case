export interface PostListProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  news?: boolean;
  article: any;
}

export interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
  article?: PostListProps;
  amount?: number;
}

export interface ModalProps {
  children?: React.ReactNode;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export interface ButtonProps {
  open: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface FormProps {
  handleClose: () => void;
}

export interface ErrorMessageProps {
  children?: string;
}

export interface useAxiosGetProps {
  state: PostListProps[];
  isLoading: boolean;
  error?: boolean;
  setLimit: any;
  limit: number;
}
