import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Login = ({ setLoginStatus, setIsLogged }) => {
  const useStyles = makeStyles({
    titleCenter: {
      textAlign: 'center',
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
      maxWidth: '450px',
    },
  });
  const classes = useStyles();
  const adminIdRef = useRef();
  const adminPasswdRef = useRef();
  const [adminIdError, setAdminIdError] = useState();
  const [adminPasswdError, setAdminPasswdError] = useState();

  function submitHandler(event) {
    setAdminPasswdError(false);
    setAdminIdError(false);
    event.preventDefault();
    const adminID = adminIdRef.current.value;
    const adminPasswd = adminPasswdRef.current.value;
    if (adminID && adminPasswd) {
      if (adminID === 'admin' && adminPasswd === 'admin') {
        // set logged in true
        setLoginStatus(false);
        setIsLogged(true);
      } else {
        //
        if (adminID != 'admin') {
          // set Error true
          setAdminIdError(true);
        }
        if (adminPasswd != 'admin') {
          // set Error true
          setAdminPasswdError(false);
        }
      }
    }
    console.log('submit clicked');
  }
  return (
    <Container maxWidth='md' className={classes.field}>
      <Typography variant='h5' className={classes.titleCenter}>
        Login Page
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <Container maxWidth='sm'>
          <TextField
            className={classes.field}
            color='primary'
            label='Admin UserID'
            fullWidth
            required
            variant='outlined'
            onInput={(e) => (e.target.value = '' + e.target.value)}
            error={adminIdError}
            inputRef={adminIdRef}
          />
          <TextField
            className={classes.field}
            color='primary'
            label='Admin Password'
            fullWidth
            required
            variant='outlined'
            onInput={(e) => (e.target.value = '' + e.target.value)}
            error={adminPasswdError}
            inputRef={adminPasswdRef}
          />
          <Container className={classes.titleCenter}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disableElevation
              endIcon={<ExitToAppIcon />}
            >
              Login
            </Button>
          </Container>
        </Container>
      </form>
    </Container>
  );
};

export default Login;
