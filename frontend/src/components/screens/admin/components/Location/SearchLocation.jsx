import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchLocation = ({
  setBtns,
  setResult,
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

  const [titleError, setTitleError] = useState(false);

  const titleInputRef = useRef();

  // POST FETCH
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const fetchLocation = async (location) => {
    setTitleError(false);
    try {
      // endpoint under admin route
      const res = await fetch(`${BackendIp}/admin_sso/location`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(location),
      });
      const data = await res.json();
      // console.log(data);
      if (data.result != 'Not found') {
        setSearchLocation(false);
        setUpdateLocation(true);
        setResult(data.result);
      }

      if (data.result === 'Not found') {
        setTitleError(true);
      }
    } catch (error) {
      setTitleError(true);
    }
  };

  // Submit Handler
  function submitHandler(event) {
    event.preventDefault();
    const location = titleInputRef.current.value.toUpperCase();
    console.log(location);
    setTitleError(false);

    // initiate endpoint request
    if (location) {
      fetchLocation({ location });
    }

    if (location === '') {
      setTitleError(true);
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
        Search Location
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          color='primary'
          label='Pincode/Location'
          fullWidth
          required
          variant='outlined'
          onInput={(e) =>
            (e.target.value = ('' + e.target.value).toUpperCase())
          }
          error={titleError}
          inputRef={titleInputRef}
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<SearchIcon />}
          className={classes.btn}
        >
          Search
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

export default SearchLocation;
