import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
const UserDetail = ({ user }) => {
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
  console.log(user);
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container maxWidth='md'>
      <Typography variant='h4'>Vehicle Details</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {/* {`****${user.rf_tag.substr(user.rf_tag.length - 4)}`} */}
            RF-TAG: {user.rf_tag}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            REGD. OWNER: {user.regdOwner}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            MODEL: {user.vehicleModel}
          </Typography>
          <Typography variant='h5' component='h2'>
            MAKER: {`${user.manufacturer}`}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            ADDRESS: {user.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' variant='contained'>
            Report/Change
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default UserDetail;
