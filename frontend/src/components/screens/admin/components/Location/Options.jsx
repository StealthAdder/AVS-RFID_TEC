import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import AddLocationIcon from '@material-ui/icons/AddLocation';
const Options = ({ setAddLocation, setSearchLocation, setBtns }) => {
  setAddLocation(false);
  setSearchLocation(false);
  const useStyles = makeStyles({
    btn: {
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
        startIcon={<EditLocationIcon />}
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
        endIcon={<AddLocationIcon />}
        className={classes.btn}
      >
        Add Location
      </Button>
    </div>
  );
};

export default Options;
