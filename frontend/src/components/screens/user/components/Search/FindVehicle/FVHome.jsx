import {
  Typography,
  Container,
  Card,
  makeStyles,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
const FVHome = ({ setVerifyState }) => {
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
  return (
    <>
      <Typography variant='h4'>Find Vehicle</Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h6'>Verification</Typography>
          <Typography variant='body1' color='error'>
            To Prevent Privacy Leaks This Verification Process Is Implemented.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            color='primary'
            onClick={() => {
              setVerifyState(true);
            }}
          >
            Verify Me
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FVHome;
