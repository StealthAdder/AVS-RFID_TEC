import { Container, Typography, Button } from '@material-ui/core';

const InAppPay = ({ vDetailState, violationData }) => {
  vDetailState(false);
  console.log(violationData);
  const userData = violationData.userData;
  const ticketId = violationData.violation._id;
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
    } catch (error) {}
  };
  return (
    <Container>
      <Typography variant='h5'>Payment Page</Typography>
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
    </Container>
  );
};

export default InAppPay;
