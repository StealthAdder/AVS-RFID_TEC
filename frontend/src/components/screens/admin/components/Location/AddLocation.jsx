import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const AddLocation = () => {
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
  });
  const classes = useStyles();
  // states
  const [locationError, setLocationError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);
  const [speedLimitError, setSpeedLimitError] = useState(false);
  // Ref
  const locationInputRef = useRef();
  const zipcodeInputRef = useRef();
  const speedLimitInputRef = useRef();

  // Fetch Endpoint
  // const fetchTag = async (rf_tag) => {
  //   setTitleError(false);
  //   try {
  //     const res = await fetch(`${BackendIp}/admin_sso/addlocation`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify(rf_tag),
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     setVehicleSearchRes(data.searchResult);
  //     setSearchBar(false);
  //     setSearchSystemDash(true);
  //   } catch (error) {
  //     setTitleError(true);
  //   }
  // };

  function submitHandler(event) {
    event.preventDefault();

    const location = locationInputRef.current.value.toUpperCase();
    const zipcode = zipcodeInputRef.current.value.toUpperCase();
    const speedlimit = speedLimitInputRef.current.value.toUpperCase();

    console.log(location);
    console.log(zipcode);
    console.log(speedlimit);
    setLocationError(false);
    setZipcodeError(false);
    setSpeedLimitError(false);

    // initiate endpoint request
    if (location && zipcode && speedlimit != '') {
      // fetchTag({ rf_tag });
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
          label='Zip Code'
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
          type='submit'
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<SearchIcon />}
        >
          Add Location
        </Button>
      </form>
    </div>
  );
};

export default AddLocation;
