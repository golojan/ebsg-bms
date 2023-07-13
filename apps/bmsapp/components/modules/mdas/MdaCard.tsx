import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Restore from '@mui/icons-material/Restore';
import AddCircle from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

interface CardProps {
  mda: MdaInfo;
}

export const MdaCard: React.FC<CardProps> = (props: CardProps) => {
  const { mda } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Randomize 'M, D, A'
  const randomLetter = () => {
    const letters = ['M', 'D', 'A'];
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  };

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            {randomLetter()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`ID: ${mda.mdaCode}`}
        subheader={`Updated: ${mda.updatedAt}`}
      />
      <CardContent
        sx={{
          minHeight: 100,
        }}
      >
        <Typography className="tw-text-2xl">{mda.name}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add">
          <AddCircle />
        </IconButton>
        <IconButton aria-label="rebase">
          <Restore />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MdaCard;
