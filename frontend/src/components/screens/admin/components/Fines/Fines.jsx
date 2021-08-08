import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SVFine from './SVFine';
import TSVFine from './TSVFine';
const Fines = () => {
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

  // useState
  const [svfine, setSVFine] = useState(false);
  const [tsvfine, setTSVFine] = useState(false);
  const [svFineData, setSVFineData] = useState({});
  const [tsvFineData, setTSVFineData] = useState({});

  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const fetchFines = async () => {
    try {
      const res = await fetch(`${BackendIp}/admin_sso/fines`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchFines();
  return (
    <div>
      <Typography
        className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Update Fines
      </Typography>

      <Button
        onClick={() => {
          console.log('Speed Violation');
          setSVFine(true);
          setTSVFine(false);
        }}
        variant='contained'
        color='primary'
        disableElevation
        startIcon={<EditLocationIcon />}
        className={classes.btn}
      >
        Speeding Violation
      </Button>
      <Button
        onClick={() => {
          console.log('Traffic Signal Violation');
          setSVFine(false);
          setTSVFine(true);
        }}
        variant='contained'
        color='primary'
        disableElevation
        endIcon={<AddLocationIcon />}
        className={classes.btn}
      >
        Traffic Signal Violation
      </Button>
      {/* components */}
      {svfine && <SVFine />}
      {tsvfine && <TSVFine />}
    </div>
  );
};

export default Fines;
