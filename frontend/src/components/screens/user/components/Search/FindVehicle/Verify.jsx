import {
  Typography,
  Container,
  Card,
  TextField,
  makeStyles,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import { useRef, useState } from 'react';
const Verify = ({
  setFVHomeState,
  userData,
  verifiedEmail,
  OTP,
  setEnterOTPState,
  setVerifyState,
}) => {
  setFVHomeState(false);
  const [titleError, setTitleError] = useState(false);
  const [verifyTitleStatus, setVerifyTitleStatu] = useState(false);
  const emailInputRef = useRef();
  const useStyles = makeStyles({
    btn: {
      '&:hover': {
        backgroundColor: 'none',
      },
    },
    title: {
      marginBottom: 20,
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
    },
    btnCenter: {
      textAlign: 'center',
    },
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
    pos: {
      marginBottom: 12,
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
    },
  });

  // verification fetch
  const verify = async (email, userData) => {
    // console.log(email);
    setTitleError(false);
    // fetch
    const BackendIp = process.env.REACT_APP_BACKEND_IP;
    try {
      const res = await fetch(`${BackendIp}/userportal_sso/verify`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, userData }),
      });
      const data = await res.json();
      // console.log(data);
      OTP(data);
      setEnterOTPState(true);
      // sent otp now enter it
    } catch (error) {
      console.log('Error Verifing...');
    }
  };

  function submitHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    setTitleError(false);

    if (email) {
      if (verifiedEmail == email) {
        console.log('Sending OTP...');
        console.log(email);
        verify(email, userData);
      } else {
        setTitleError(true);
      }
    }

    if (email == '') {
      setTitleError(true);
    }
  }

  const classes = useStyles();
  return (
    <>
      <Typography variant='h4'>Find Vehicle</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h6'>Email Verification</Typography>
          <form noValidate autoComplete='off' onSubmit={submitHandler}>
            <TextField
              className={classes.field}
              color='primary'
              label='Verified E-Mail ID'
              fullWidth
              required
              variant='outlined'
              error={titleError}
              inputRef={emailInputRef}
            />
            <Button
              type='submit'
              size='small'
              variant='contained'
              color='primary'
            >
              Send OTP
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Verify;
