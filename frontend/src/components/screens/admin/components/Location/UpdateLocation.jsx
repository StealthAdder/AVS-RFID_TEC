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
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const UpdateLocation = ({
  setBtns,
  result,
  setSearchLocation,
  setUpdateLocation,
}) => {
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

  const [locationInputError, setLocationInputError] = useState(false);
  const [zipcodeInputError, setZipcodeInputError] = useState(false);
  const [speedlimitInputError, setSpeedlimitInputError] = useState(false);

  const [location, setLocation] = useState(result.location);
  const [zipcode, setZipcode] = useState(result.zipcode);
  const [speedlimit, setSpeedlimit] = useState(result.speedlimit);
  const [_id, set_Id] = useState(result._id);

  // Dialog Box
  const [successMsg, setSuccessMsg] = useState(false);

  const handleClose = () => {
    setSuccessMsg(false);
  };

  // POST FETCH
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const locationUpdate = async (payload) => {
    setLocationInputError(false);
    setZipcodeInputError(false);
    setSpeedlimitInputError(false);
    try {
      // endpoint under admin route
      const res = await fetch(`${BackendIp}/admin_sso/updatelocation`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      // console.log(data);

      if (data.msg === 'okay') {
        console.log('update successful');
        setSuccessMsg(true);
      }

      if (data.msg === 'Error') {
        console.log(data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Submit Handler
  function submitHandler(event) {
    event.preventDefault();
    setLocationInputError(false);
    setZipcodeInputError(false);
    setSpeedlimitInputError(false);

    if (location && zipcode && speedlimit != '') {
      // run fetch update
      console.log('running update');
      let payload = {
        _id,
        location,
        zipcode,
        speedlimit,
      };
      setLocation(payload.location);
      setZipcode(payload.zipcode);
      setSpeedlimit(payload.speedlimit);
      locationUpdate({ payload });
    }

    if (location === '') {
      setLocationInputError(true);
    }

    if (zipcode === '') {
      setZipcodeInputError(true);
    }

    if (speedlimit === '') {
      setSpeedlimitInputError(true);
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
        Update Location Information
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          color='primary'
          label='Location'
          fullWidth
          required
          variant='outlined'
          value={location}
          onChange={(e) => setLocation(e.target.value.toUpperCase())}
          error={locationInputError}
        />
        <TextField
          className={classes.field}
          color='primary'
          label='ZipCode'
          fullWidth
          required
          variant='outlined'
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value.toUpperCase())}
          error={zipcodeInputError}
        />
        <TextField
          className={classes.field}
          color='primary'
          label='SpeedLimit'
          fullWidth
          required
          variant='outlined'
          value={speedlimit}
          onChange={(e) => setSpeedlimit(e.target.value.toUpperCase())}
          error={speedlimitInputError}
        />
        <Button
          onClick={() => {
            console.log('exit come to options');
            setSearchLocation(false);
            setUpdateLocation(false);
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
          endIcon={<SearchIcon />}
          className={classes.btn}
        >
          Update
        </Button>
      </form>
      {/* Update Success Message */}
      <div>
        <Dialog open={successMsg} onClose={handleClose}>
          <DialogTitle id='alert-dialog-title'>
            Successfully Updated
          </DialogTitle>
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

export default UpdateLocation;
