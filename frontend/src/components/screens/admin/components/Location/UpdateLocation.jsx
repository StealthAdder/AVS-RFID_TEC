import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const UpdateLocation = ({ setBtns, result }) => {
  console.log(result);
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

  // POST FETCH
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const locationUpdate = async (location, zipcode, speedlimit) => {
    setLocationInputError(false);
    setZipcodeInputError(false);
    setSpeedlimitInputError(false);
    //   try {
    //     // endpoint under admin route
    //     const res = await fetch(`${BackendIp}/admin_sso/updatelocation`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify(location),
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //     setResult(data.result);
    //     if (data.result === 'Not found') {
    //       setTitleError(true);
    //     }
    //   } catch (error) {
    //     setTitleError(true);
    //   }
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
      locationUpdate({ location, zipcode, speedlimit });
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
          type='submit'
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<SearchIcon />}
          className={classes.btn}
        >
          Update
        </Button>
        {/* {addlocationbtn && (
            <Button
              onClick={() => {
                console.log('Add Location');
              }}
              variant='contained'
              color='primary'
              disableElevation
              endIcon={<SearchIcon />}
              className={classes.btn}
            >
              Add Location
            </Button>
          )} */}
      </form>
    </div>
  );
};

export default UpdateLocation;
