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
import { SubjectOutlined } from '@material-ui/icons';
import FlagIcon from '@material-ui/icons/Flag';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const ResultLayout = ({
  children,
  userCompStatus,
  vioCompStatus,
  theme,
  introStatus,
  resultPgStatus,
  findVehicleState,
  vDetailState,
}) => {
  const drawerWidth = 200;

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
              introStatus(true);
              resultPgStatus(false);
              vDetailState(false);
            }}
            button
          >
            <ListItemIcon>
              <KeyboardArrowLeftIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>

          <ListItem
            key='Vehicle Details'
            onClick={() => {
              userCompStatus(true);
              vioCompStatus(false);
              findVehicleState(false);
              vDetailState(false);
            }}
            button
          >
            <ListItemIcon>
              <SubjectOutlined color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Vehicle Details' />
          </ListItem>
          <ListItem
            key='Violations'
            onClick={() => {
              userCompStatus(false);
              vioCompStatus(true);
              findVehicleState(false);
              vDetailState(false);
            }}
            button
          >
            <ListItemIcon>
              <FlagIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Violations' />
          </ListItem>
          <ListItem
            key='Find Vehicle'
            onClick={() => {
              userCompStatus(false);
              vioCompStatus(false);
              findVehicleState(true);
              vDetailState(false);
            }}
            button
          >
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

export default ResultLayout;
