import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
const VehicleDetails = ({ MOCK_DATA }) => {
  const vehicleSearchRes = MOCK_DATA.searchResult;
  const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  // console.log(vehicleSearchRes);
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container maxWidth='md'>
      <Typography variant='h4'>Vehicle Details</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {/* {`****${vehicleSearchRes.rf_tag.substr(vehicleSearchRes.rf_tag.length - 4)}`} */}
            RF-TAG: {vehicleSearchRes.rf_tag}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            REGD. OWNER: {vehicleSearchRes.regdOwner}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            MODEL: {vehicleSearchRes.vehicleModel}
          </Typography>
          <Typography variant='h5' component='h2'>
            MAKER: {`${vehicleSearchRes.manufacturer}`}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            ADDRESS: {vehicleSearchRes.address}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VehicleDetails;
