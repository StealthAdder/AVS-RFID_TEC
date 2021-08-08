import {
  Typography,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
const ViolationDetailed = ({ violationData, setVDetailState, setVioTable }) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 450,
      padding: '10px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    ticketId: {
      color: '#1E88E5',
    },
    btn: {
      // textAlign: 'center',
      // alignItems: 'center',
    },
  });
  // console.log(violationData);

  const violation = violationData.violation;
  const userData = violationData.userData;
  const classes = useStyles();
  return (
    <Container>
      <Typography variant='h6'>Violation Details</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            {violation.violationType}
          </Typography>
          <Typography variant='h5'>
            Ticket ID:
            {
              <Typography
                variant='h5'
                className={classes.ticketId}
                noWrap
                component='span'
              >
                {violation._id}
              </Typography>
            }
          </Typography>
          {/* <Typography className={classes.pos} color='textSecondary'>
            {violation.violationType}
          </Typography> */}
          <Typography color='textSecondary'>
            {`Location: ${violation.location}, ${violation.zipcode}`}
          </Typography>
          <Typography color='textSecondary'>
            {`Event Time: ${violation.eventTime}`}
          </Typography>
          <Typography color='textSecondary'>
            {violation.violationType == 'Speeding Violation' ? (
              <Typography color='textSecondary'>
                {`Evaluation : ${violation.notes}`}
              </Typography>
            ) : (
              <Typography color='textSecondary'>
                {`Evaluation: ${violation.notes}`}
              </Typography>
            )}
          </Typography>
          <Typography color='textSecondary'>
            {`Fine Amount: ₹${violation.fineAmount}/-`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            className={classes.btn}
            variant='contained'
            color='primary'
            onClick={() => {
              console.log('Paying Now');
              setVDetailState(false);
              setVioTable(true);
            }}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ViolationDetailed;
