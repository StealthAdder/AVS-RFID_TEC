import {
  Typography,
  Container,
  Card,
  makeStyles,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
const FindVehicle = ({ MOCK_DATA }) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  return (
    <Container>
      <Typography variant='h4'>Find Vehicle</Typography>
      <Card>
        <CardContent>
          <Typography variant='h6'>Verification</Typography>
          <Typography variant='h7' color='error'>
            To Prevent Privacy Leaks This Verification Process Is Implemented.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' variant='contained'>
            Verify Me
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default FindVehicle;
