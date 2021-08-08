import {
  Typography,
  Container,
  Card,
  TextField,
  makeStyles,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
const VehicleLocation = ({ setEnterOTPState, userdata, vehicleData }) => {
  setEnterOTPState(false);
  console.log(userdata);
  const vehicle = userdata.data;
  const time = new Date(vehicle.eventTime).toLocaleString();
  console.log(time);
  const useStyles = makeStyles({
    title: {
      marginBottom: 20,
    },
    root: {
      minWidth: 540,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
    },
  });
  const classes = useStyles();

  return (
    <>
      <Typography variant='h4'>Find Vehicle</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h5'>Approximated Location of Vehicle</Typography>
          <Typography className={classes.title} variant='h6' color='error'>
            {`Location: ${vehicle.location}, ${vehicle.zipcode}`}
          </Typography>
          <Typography
            color='error'
            variant='h6'
            className={classes.title}
            gutterBottom
          >{`Event Time: ${time}`}</Typography>
          <Typography variant='h6'>VEHICLE DETAILS:</Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            variant='h6'
          >
            RC: {vehicleData.RC}
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            variant='h6'
          >
            DL: {vehicleData.DL}
          </Typography>
          <Typography className={classes.title} color='primary' variant='h6'>
            RF-TAG: {vehicle.rf_tag}
          </Typography>
          <Typography variant='h6' color='primary' className={classes.title}>
            MODEL: {`${vehicleData.vehicleModel} - ${vehicleData.yom}`}
          </Typography>
          <Typography className={classes.title} color='primary' variant='h6'>
            ENGINE TYPE: {vehicleData.engineType}
          </Typography>
          <Typography className={classes.title} variant='h6' color='primary'>
            MAKER: {`${vehicleData.manufacturer}`}
          </Typography>
          <Typography className={classes.title} color='primary' variant='h6'>
            REGD. OWNER: {vehicleData.regdOwner}
          </Typography>
          <Typography className={classes.title} color='primary' variant='h6'>
            REGD. ADDRESS: {vehicleData.address}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default VehicleLocation;
