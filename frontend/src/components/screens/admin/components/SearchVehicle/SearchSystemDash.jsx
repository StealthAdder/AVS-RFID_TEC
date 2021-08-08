import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
const SearchSystemDash = ({
  setSearchBar,
  MOCK_DATA,
  setVehicleDetailsPg,
  setVioTable,
  setVDetailState,
}) => {
  const searchResult = MOCK_DATA.searchResult;
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
      {/* Title */}
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Searched RF TAG: {searchResult.rf_tag}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        className={classes.btn}
        onClick={() => {
          // load details
          console.log('load details');
          setVehicleDetailsPg(true);
          setVDetailState(false);
          setVioTable(false);
        }}
      >
        Vehicle Details
      </Button>
      <Button
        variant='contained'
        color='primary'
        className={classes.btn}
        onClick={() => {
          // load details
          console.log('load violations');
          setVehicleDetailsPg(false);
          setVioTable(true);
        }}
      >
        Violations
      </Button>
      {/* <Button
        variant='contained'
        color='primary'
        className={classes.btn}
        onClick={() => {
          // load details
          console.log('load violations');
          setVehicleDetailsPg(false);
          setVioTable(false);
          setLocateVehicle(true);
        }}
      >
        Locate Vehicle
      </Button> */}
    </div>
  );
};

export default SearchSystemDash;
