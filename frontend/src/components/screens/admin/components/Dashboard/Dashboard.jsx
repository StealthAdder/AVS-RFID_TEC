import { Container, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Dashoptions from '../Dashoptions';
import Home from './Home';
import SearchSystem from '../SearchVehicle/SearchSystem';
import SearchBar from '../SearchVehicle/SearchBar';
import UpdateLocation from '../Location/UpdateLocation';
import LocationDash from '../Location/LocationDash';
import Fines from '../Fines/Fines';
const Dashboard = () => {
  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block',
    },
  });
  const classes = useStyles();
  const [homeStatus, setHomeStatus] = useState(true);
  const [searchSystem, setSearchSystem] = useState(false);
  const [updateSpeedLimit, setupdateSpeedLimit] = useState(false);
  const [fineSystem, setFineSystem] = useState(false);
  // use to close the dashoptions or colapse the whole page
  const [closeDashoptions, setDashoptions] = useState(true);
  return (
    <>
      {closeDashoptions && (
        <Dashoptions
          setHomeStatus={setHomeStatus}
          setSearchSystem={setSearchSystem}
          setupdateSpeedLimit={setupdateSpeedLimit}
          setFineSystem={setFineSystem}
        >
          {homeStatus && <Home />}
          {searchSystem && <SearchSystem />}
          {/* speedLimit update page */}
          {updateSpeedLimit && <LocationDash />}
          {fineSystem && <Fines setFineSystem={setFineSystem} />}
        </Dashoptions>
      )}
    </>
  );
};

export default Dashboard;
