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
import Form from 'react-bootstrap/Form';
import { toFiat } from 'libs/monify';
import { Row, Col } from 'react-bootstrap';

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
        <Row>
          <Col>
            <Form.Group controlId="approvedBudget_2023" className="tw-mt-2">
              <Form.Label>Approved Budget (2023)</Form.Label>
              <Typography className="tw-text-xl tw-text-green-500">
                {toFiat(Number(mda.approvedBudget_2023))}
              </Typography>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="expenditureTotal" className="tw-mt-2">
              <Form.Label>Total Expenditure</Form.Label>
              <Typography className="tw-text-xl tw-text-red-500">
                {toFiat(Number(mda.expenditureTotal))}
              </Typography>
            </Form.Group>
          </Col>
        </Row>
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
          <Row>
            <Col>
              <Form.Group controlId="fullYearActual_2021" className="tw-mt-2">
                <Form.Label>Full Year Actuals (2021)</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.fullYearActual_2021))}
                </Typography>
              </Form.Group>
              <Form.Group controlId="approvedBudget_2022" className="tw-mt-2">
                <Form.Label>Approved Budget (2022)</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.approvedBudget_2022))}
                </Typography>
              </Form.Group>
              <Form.Group
                controlId="performanceBudget_2022"
                className="tw-mt-2"
              >
                <Form.Label>Performance (2022) Jan-Sep</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.performanceBudget_2022))}
                </Typography>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="personalTotal" className="tw-mt-2">
                <Form.Label>Personal Expenditure</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.personalTotal))}
                </Typography>
              </Form.Group>
              <Form.Group controlId="overheadTotal" className="tw-mt-2">
                <Form.Label>Overhead Expenditure</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.overheadTotal))}
                </Typography>
              </Form.Group>
              <Form.Group controlId="recurrentTotal" className="tw-mt-2">
                <Form.Label>Recurrent Expenditure</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.recurrentTotal))}
                </Typography>
              </Form.Group>
              <Form.Group controlId="capitalTotal" className="tw-mt-2">
                <Form.Label>Capital Expenditure</Form.Label>
                <Typography className="tw-text-xl">
                  {toFiat(Number(mda.capitalTotal))}
                </Typography>
              </Form.Group>
            </Col>
          </Row>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MdaCard;
