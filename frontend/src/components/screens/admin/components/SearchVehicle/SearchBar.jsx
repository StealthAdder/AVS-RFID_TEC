import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = ({ setVehicleData }) => {
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
  const [titleError, setTitleError] = useState(false);
  // Ref
  const titleInputRef = useRef();

  // POST FETCH
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const fetchTag = async (rf_tag) => {
    setTitleError(false);
    try {
      const res = await fetch(`${BackendIp}/userportal_sso/searchTag`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(rf_tag),
      });
      const data = await res.json();
      console.log(data);
      // getData(data);
      // introStatus(false);
      // resultPgStatus(true);
    } catch (error) {
      setTitleError(true);
    }

    // Result of search for vehicle.
  };
  function submitHandler(event) {
    event.preventDefault();
    const rf_tag = titleInputRef.current.value.toUpperCase();
    console.log(rf_tag);
    setTitleError(false);

    // if (rf_tag) {
    //   // search for vehicle data.
    //   fetchTag({ rf_tag });
    // }

    // if (rf_tag === '') {
    //   setTitleError(true);
    // }
  }
  return (
    <div>
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Search for Records
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          color='primary'
          label='Vehicle No./RF_TAG'
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
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
