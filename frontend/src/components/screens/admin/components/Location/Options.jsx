import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const Options = ({ setAddLocation, setSearchLocation, setBtns }) => {
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
  return (
    <div>
      <Button
        onClick={() => {
          console.log('Update Location');
          setSearchLocation(true);
          setAddLocation(false);
          setBtns(false);
        }}
        variant='contained'
        color='primary'
        disableElevation
        endIcon={<SearchIcon />}
        className={classes.btn}
      >
        Update Location
      </Button>
      <Button
        onClick={() => {
          console.log('Add Location');
          setAddLocation(true);
          setSearchLocation(false);
          setBtns(false);
        }}
        variant='contained'
        color='primary'
        disableElevation
        endIcon={<SearchIcon />}
        className={classes.btn}
      >
        Add Location
      </Button>
    </div>
  );
};

export default Options;
