import {
  Container,
  Typography,
  Button,
  makeStyles,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { useState } from 'react';
const InAppPay = ({ vDetailState, violationData }) => {
  vDetailState(false);
  console.log(violationData);
  const userData = violationData.userData;
  const ticketId = violationData.violation._id;
  const [exit, setExit] = useState(false);
  const [pay, setPay] = useState(true);
  const [paidDetailed, setPaidDetailed] = useState({});
  const useStyles = makeStyles({
    root: {
      minWidth: 450,
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
  });
  const classes = useStyles();

  const paymentProcess = async (ticketId, userData) => {
    const BackendIp = process.env.REACT_APP_BACKEND_IP;
    try {
      const res = await fetch(`${BackendIp}/userportal_sso/payment`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ ticketId, userData }),
      });
      const data = await res.json();
      console.log(data);
      setPaidDetailed(data);
      if (data.payment === 'completed') {
        setExit(true);
        setPay(false);
      }
    } catch (error) {}
  };
  console.log(paidDetailed);
  return (
    <Container>
      <Typography variant='h5'>Payment Page</Typography>
      {pay && (
        <>
          <Typography variant='h6' color='error'>
            FAKE PAYMENT SYSTEM
          </Typography>
          <Button
            size='small'
            variant='contained'
            color='primary'
            onClick={() => {
              console.log('Complete Payment');
              paymentProcess(ticketId, userData);
            }}
          >
            Complete Payment
          </Button>
        </>
      )}
      {exit && (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>Payment Success</Typography>
              <Typography
                className={classes.title}
                variant='h6'
                color='primary'
              >
                Ticket ID: {paidDetailed.ticketId}
              </Typography>
              <Typography
                className={classes.title}
                color='primary'
                variant='h6'
              >
                Receipt ID: {paidDetailed.receiptId}
              </Typography>
              <Button
                size='small'
                variant='contained'
                color='primary'
                onClick={() => {
                  console.log('exit');
                  window.location.reload();
                }}
              >
                EXIT
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
};

export default InAppPay;
