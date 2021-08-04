import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
const SearchSystemDash = ({ setSearchBar, vehicleSearchRes }) => {
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

  return (
    <div>
      {/* Title */}
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Searched RF TAG: {vehicleSearchRes.rf_tag}
      </Typography>
      <Button variant='contained'>Default</Button>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' color='primary' href='#contained-buttons'>
        Link
      </Button>
    </div>
  );
};

export default SearchSystemDash;
