import { useRef, useState } from 'react';
import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
const TSVFine = ({ tsvFineData }) => {
  console.log(tsvFineData);

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
  const [fineAmountInputError, setfineAmountInputError] = useState(false);
  const [fineAmount, setFineAmount] = useState(tsvFineData.fineAmount);
  const [violationType, setViolationType] = useState(tsvFineData.violationType);

  // Dialog Box
  const [successMsg, setSuccessMsg] = useState(false);

  const handleClose = () => {
    setSuccessMsg(false);
  };

  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const updateAmt = async (payload) => {
    try {
      // endpoint under admin route
      const res = await fetch(`${BackendIp}/admin_sso/updatefine`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
      if (data.msg === 'okay') {
        console.log('update successful');
        setSuccessMsg(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function submitHandler(event) {
    event.preventDefault();
    setfineAmountInputError(false);

    if (fineAmount === '') {
      setfineAmountInputError(true);
    }

    if (fineAmount != '') {
      // update fine amt
      let payload = {
        _id: tsvFineData._id,
        fineAmount: fineAmount,
      };
      updateAmt(payload);
    }
  }
  return (
    <div>
      <Typography
        // className={classes.title}
        variant='h5'
        component='h2'
        gutterBottom
      >
        Update Traffic Signal Violation Fine
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          color='primary'
          label='Violation'
          required
          variant='outlined'
          value={'Traffic Signal Violation'}
          // onChange={(e) => setZipcode(e.target.value.toUpperCase())}
          // error={zipcodeInputError}
        />
        <TextField
          className={classes.field}
          color='primary'
          label='Fine Amount'
          required
          variant='outlined'
          value={fineAmount}
          onChange={(e) => setFineAmount(e.target.value.toUpperCase())}
          error={fineAmountInputError}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disableElevation
          // endIcon={<SearchIcon />}
          className={classes.btn}
        >
          Update
        </Button>
      </form>
      {/* Update Success Message */}
      <div>
        <Dialog open={successMsg} onClose={handleClose}>
          <DialogTitle id='alert-dialog-title'>
            Successfully Updated
          </DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default TSVFine;
