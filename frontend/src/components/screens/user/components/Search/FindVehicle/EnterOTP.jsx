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
const EnterOTP = ({
  setVerifyState,
  OTP,
  setVehicleLocState,
  rf_tag,
  setTrackData,
}) => {
  setVerifyState(false);
  const [titleError, setTitleError] = useState(false);
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

  // do the search for vehicle
  // console.log(rf_tag);
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const track = async (rf_tag) => {
    try {
      const res = await fetch(`${BackendIp}/userportal_sso/track`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(rf_tag),
      });
      const data = await res.json();
      setTrackData(data);
      setVehicleLocState(true);
    } catch (error) {
      console.log(error);
    }
  };

  function submitHandler(event) {
    event.preventDefault();
    const enteredOTP = emailInputRef.current.value;
    setTitleError(false);

    if (enteredOTP) {
      if (enteredOTP === OTP.otp) {
        console.log('Verified User');
        console.log(enteredOTP);
        track({ rf_tag });
      } else {
        setTitleError(true);
      }
    }

    // if (email == '') {
    //   setTitleError(true);
    // }
  }

  const classes = useStyles();
  return (
    <>
      <Typography variant='h4'>Find Vehicle</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h6'>Enter OTP</Typography>
          <form noValidate autoComplete='off' onSubmit={submitHandler}>
            <TextField
              className={classes.field}
              color='primary'
              label='One Time Password'
              fullWidth
              required
              variant='outlined'
              error={titleError}
              onInput={(e) =>
                (e.target.value = ('' + e.target.value).toUpperCase())
              }
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

export default EnterOTP;
