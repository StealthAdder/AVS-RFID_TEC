import { Container, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Dashoptions from '../Dashoptions';
import Home from './Home';
import SearchSystem from '../SearchVehicle/SearchSystem';
import SearchBar from '../SearchVehicle/SearchBar';
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
  const [searchVehicleStatus, setSearchVehicleStatus] = useState(false);
  return (
    <Dashoptions
      setHomeStatus={setHomeStatus}
      setSearchVehicleStatus={setSearchVehicleStatus}
    >
      {homeStatus && <Home />}
      {searchVehicleStatus && <SearchBar />}
    </Dashoptions>
  );
};

export default Dashboard;
