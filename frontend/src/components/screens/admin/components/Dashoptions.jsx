import {
  makeStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Container,
  Button,
  Link,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SpeedIcon from '@material-ui/icons/Speed';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MoneyIcon from '@material-ui/icons/Money';
const Dashoptions = ({
  children,
  setHomeStatus,
  setSearchSystem,
  setupdateSpeedLimit,
  setFineSystem,
}) => {
  const drawerWidth = 220;

  const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      root: {
        display: 'flex',
      },
      active: {
        background: '#f4f4f4',
      },
      appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      toolbar: theme.mixins.toolbar,
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      toolbarRight: {
        marginLeft: 'auto',
      },
      contain: {
        marginTop: '2%',
      },
    };
  });
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          {/* Home */}
          <ListItem
            key='Home'
            onClick={() => {
              console.log('Home');
              setHomeStatus(true);
              setSearchSystem(false);
              setupdateSpeedLimit(false);
              setFineSystem(false);
            }}
            button
          >
            <ListItemIcon>
              <KeyboardArrowLeftIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          {/* Search Vehicles */}
          <ListItem
            key='Search'
            onClick={() => {
              console.log('Search Vehicles');
              setHomeStatus(false);
              setSearchSystem(true);
              setupdateSpeedLimit(false);
              setFineSystem(false);
              // still doesnt reset the dom
            }}
            button
          >
            <ListItemIcon>
              <FindInPageIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Search Records' />
          </ListItem>
          {/* SpeedLimits */}
          <ListItem
            key='SpeedLimits'
            onClick={() => {
              setHomeStatus(false);
              setSearchSystem(false);
              setupdateSpeedLimit(true);
              setFineSystem(false);
              console.log('SpeedLimits');
            }}
            button
          >
            <ListItemIcon>
              <SpeedIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='SpeedLimits' />
          </ListItem>
          {/* Fines */}
          <ListItem
            key='Fines'
            onClick={() => {
              console.log('Fines');
              setHomeStatus(false);
              setSearchSystem(false);
              setupdateSpeedLimit(false);
              setFineSystem(true);
            }}
            button
          >
            <ListItemIcon>
              <MoneyIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Fines' />
          </ListItem>
          {/* X */}
          {/* <ListItem
            key='Fines'
            onClick={() => {
              console.log('Find Location');
            }}
            button
          >
            <ListItemIcon>
              <LocationOnIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Find Location' />
          </ListItem> */}
        </List>
      </Drawer>
      <Toolbar />
      <div className={classes.contain}>{children}</div>
    </div>
  );
};

export default Dashoptions;
