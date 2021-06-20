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
const PHDetailed = ({ vPHTable, vPHDetailFor, vPHDetailStatus }) => {
  vPHTable(false);
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
  const paid = vPHDetailFor.paid;
  const userData = vPHDetailFor.userData;
  const classes = useStyles();
  return (
    <Container>
      <Typography variant='h5'>Reciept/Fine Payment Details: </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            {paid.violationType}
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
                {paid._id}
              </Typography>
            }
          </Typography>
          {/* <Typography className={classes.pos} color='textSecondary'>
            {violation.violationType}
          </Typography> */}
          <Typography color='textSecondary'>
            {`Receipt ID: ${paid.receiptId}`}
          </Typography>
          <Typography color='textSecondary'>
            {`Location: ${paid.location}, ${paid.zipcode}`}
          </Typography>
          <Typography color='textSecondary'>
            {`Event Time: ${paid.eventTime}`}
          </Typography>
          <Typography color='textSecondary'>
            {paid.violationType == 'Speeding Violation' ? (
              <Typography color='textSecondary'>
                {`Evaluation : ${paid.notes}`}
              </Typography>
            ) : (
              <Typography color='textSecondary'>
                {`Evaluation: ${paid.notes}`}
              </Typography>
            )}
          </Typography>
          <Typography color='textSecondary' gutterBottom>
            {`Fine Amount: ₹${paid.fineAmount}/-`}
          </Typography>
          <Button
            size='small'
            className={classes.btn}
            variant='contained'
            color='primary'
            onClick={() => {
              vPHDetailStatus(false);
              vPHTable(true);
            }}
          >
            EXIT
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PHDetailed;
