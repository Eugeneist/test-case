import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../actions/favoriteActions';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';
import { Box } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { PostProps, PostListProps } from '../../interfaces/interfaces';
import { AppDispatch, RootState } from '../../store/store';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post: React.FC<PostProps> = ({ id, userId, title, body, article }) => {
  const [expanded, setExpanded] = useState(false);
  const [favoriteArticle, setFavoriteArticle] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const addFavoriteArticle = (article: any) => {
    if (favoriteArticle) {
      dispatch(removeFromFavorite(article));
      setFavoriteArticle(false);
    } else {
      dispatch(addToFavorite(article));
      setFavoriteArticle(true);
    }
  };

  const favorite = useSelector((state: RootState) => state.favoriteReducer);

  useEffect(() => {
    if (favorite.find((fav: PostListProps) => fav.id === id)) {
      setFavoriteArticle(true);
    }
  }, [favorite, id]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: '80%',
        margin: '0 auto',
        marginBottom: '30px',
        backgroundColor: '#b2a997',
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgColor: '#2d2b42' }} src="/broken-image.jpg" />}
        action={
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <ToggleButton
              value="check"
              selected={favoriteArticle}
              onChange={() => addFavoriteArticle(article)}
              sx={{ border: 'none' }}
            >
              {!favoriteArticle ? (
                <BookmarkBorderIcon />
              ) : (
                <BookmarkIcon sx={{ color: '#2b2d42' }} />
              )}
            </ToggleButton>
          </Box>
        }
        title={title}
        subheader={`Author:${userId}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ textAlign: 'start' }} paragraph>
            {body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
