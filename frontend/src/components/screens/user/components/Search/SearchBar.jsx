import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = ({ getData, introStatus, resultPgStatus }) => {
  // states
  const [titleError, setTitleError] = useState(false);

  // custom css
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

  const titleInputRef = useRef();

  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const getSearchedTag = async (rf_tag) => {
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
      getData(data);
      introStatus(false);
      resultPgStatus(true);
    } catch (error) {
      setTitleError(true);
    }

    // Result of search for vehicle.
  };

  function submitHandler(event) {
    event.preventDefault();
    const rf_tag = titleInputRef.current.value;
    setTitleError(false);

    if (rf_tag) {
      console.log('Searching...');
      getSearchedTag({ rf_tag });
    }

    if (rf_tag == '') {
      setTitleError(true);
    }
  }
  return (
    <Container maxWidth='md' className={classes.field}>
      <Container className={classes.btnCenter}>
        <Typography
          className={classes.title}
          variant='h5'
          component='h2'
          gutterBottom
        >
          Search for Records
        </Typography>
      </Container>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <Container maxWidth='sm'>
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
          <Container className={classes.btnCenter}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disableElevation
              endIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Container>
        </Container>
      </form>
    </Container>
  );
};

export default SearchBar;
