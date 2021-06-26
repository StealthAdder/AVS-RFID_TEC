import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = () => {
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
      <form noValidate autoComplete='off'>
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
