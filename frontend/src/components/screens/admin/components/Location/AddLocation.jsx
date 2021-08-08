import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AddLocation = ({ setAddLocation, setBtns }) => {
  const useStyles = makeStyles({
    btn: {
      // '&:hover': {
      //   backgroundColor: 'none',
      // },
      margin: '0px 5px',
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
  });
  const classes = useStyles();
  // states
  const [locationError, setLocationError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [speedLimitError, setSpeedLimitError] = useState(false);
  const [dialogMsg, setDialogMsg] = useState('');
  // Ref
  const locationInputRef = useRef();
  const zipcodeInputRef = useRef();
  const speedLimitInputRef = useRef();

  // Dialog Box
  const [successMsg, setSuccessMsg] = useState(false);

  const handleClose = () => {
    setSuccessMsg(false);
  };

  // Fetch Endpoint
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const addLocation = async (payload) => {
    setLocationError(false);
    setZipcodeError(false);
    setSpeedLimitError(false);
    try {
      const res = await fetch(`${BackendIp}/admin_sso/addlocation`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);

      if (data.msg === 'Added') {
        console.log('success');
        setDialogMsg('Added Location');
        setSuccessMsg(true);
      }
      if (data.msg === 'existing') {
        console.log('existing show warning');
        setDialogMsg('Location Exists');
        setSuccessMsg(true);
      }
    } catch (error) {
      console.log(error);
      // setTitleError(true);
    }
  };

  function submitHandler(event) {
    event.preventDefault();

    const location = locationInputRef.current.value.toUpperCase();
    const zipcode = zipcodeInputRef.current.value.toUpperCase();
    const speedlimit = speedLimitInputRef.current.value.toUpperCase();

    // console.log(location);
    // console.log(zipcode);
    // console.log(speedlimit);
    let payload = {
      location,
      zipcode,
      speedlimit,
    };

    setLocationError(false);
    setZipcodeError(false);
    setSpeedLimitError(false);

    // initiate endpoint request
    if (location && zipcode && speedlimit != '') {
      // fetchTag({ rf_tag });
      addLocation(payload);
    }

    if (location && zipcode && speedlimit === '') {
      setLocationError(true);
      setZipcodeError(true);
      setSpeedLimitError(true);
    }
  }
  return (
    <div>
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Add New Location
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          color='primary'
          label='Location'
          fullWidth
          required
          variant='outlined'
          onInput={(e) =>
            (e.target.value = ('' + e.target.value).toUpperCase())
          }
          error={locationError}
          inputRef={locationInputRef}
        />
        {/*  */}
        <TextField
          className={classes.field}
          color='primary'
          label='Zip Code'
          fullWidth
          required
          variant='outlined'
          onInput={(e) =>
            (e.target.value = ('' + e.target.value).toUpperCase())
          }
          error={zipcodeError}
          inputRef={zipcodeInputRef}
        />
        <TextField
          className={classes.field}
          color='primary'
          label='SpeedLimit Km/H'
          fullWidth
          required
          variant='outlined'
          onInput={(e) =>
            (e.target.value = ('' + e.target.value).toUpperCase())
          }
          error={speedLimitError}
          inputRef={speedLimitInputRef}
        />
        <Button
          onClick={() => {
            console.log('exit come to options');
            // setSearchLocation(false);
            setAddLocation(false);
            setBtns(true);
          }}
          variant='contained'
          color='primary'
          disableElevation
          startIcon={<ArrowBackIcon />}
          className={classes.btn}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<AddLocationIcon />}
        >
          Add Location
        </Button>
      </form>
      <div>
        <Dialog open={successMsg} onClose={handleClose}>
          <DialogTitle id='alert-dialog-title'>{dialogMsg}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AddLocation;
