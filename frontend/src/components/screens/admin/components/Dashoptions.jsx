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
import FlagIcon from '@material-ui/icons/Flag';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
const Dashoptions = ({ children, setHomeStatus, setSearchVehicleStatus }) => {
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
          <ListItem
            key='Home'
            onClick={() => {
              console.log('Home');
              setHomeStatus(true);
              setSearchVehicleStatus(false);
            }}
            button
          >
            <ListItemIcon>
              <KeyboardArrowLeftIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem
            key='Search'
            onClick={() => {
              console.log('Search Vehicles');
              setHomeStatus(false);
              setSearchVehicleStatus(true);
            }}
            button
          >
            <ListItemIcon>
              <AssignmentIndIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Search Vehicles' />
          </ListItem>
          <ListItem
            key='Violations'
            onClick={() => {
              console.log('Violations');
            }}
            button
          >
            <ListItemIcon>
              <FlagIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Violations' />
          </ListItem>
          <ListItem
            key='Paid History'
            onClick={() => {
              console.log('Paid History');
            }}
            button
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Paid History' />
          </ListItem>
          <ListItem key='Find Vehicle' onClick={() => {}} button>
            <ListItemIcon>
              <LocationOnIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Find Vehicle' />
          </ListItem>
        </List>
      </Drawer>
      <Toolbar />
      <div className={classes.contain}>{children}</div>
    </div>
  );
};

export default Dashoptions;
