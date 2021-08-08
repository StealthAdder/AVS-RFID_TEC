import {
  TextField,
  Container,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import Options from './Options';
import SearchLocation from './SearchLocation';
import UpdateLocation from './UpdateLocation';
import AddLocation from './AddLocation';
const LocationDash = () => {
  const [btns, setBtns] = useState(true);
  // signals
  const [updateLocation, setUpdateLocation] = useState(false);
  const [searchLocation, setSearchLocation] = useState(false);
  const [addLocation, setAddLocation] = useState(false);
  const [result, setResult] = useState([]);
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
  // console.log(result);
  return (
    <div>
      {btns && (
        <Options
          setSearchLocation={setSearchLocation}
          setAddLocation={setAddLocation}
          setBtns={setBtns}
        />
      )}
      {searchLocation && (
        <SearchLocation
          setSearchLocation={setSearchLocation}
          setUpdateLocation={setUpdateLocation}
          setResult={setResult}
          setBtns={setBtns}
        />
      )}
      {updateLocation && (
        <UpdateLocation
          result={result}
          setSearchLocation={setSearchLocation}
          setUpdateLocation={setUpdateLocation}
          setBtns={setBtns}
        />
      )}
      {addLocation && (
        <AddLocation setAddLocation={setAddLocation} setBtns={setBtns} />
      )}
    </div>
  );
};

export default LocationDash;
