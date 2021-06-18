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
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
const ResultLayout = ({ children, userCompStatus, btCompStatus, theme }) => {
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
      {/* app bar */}
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            AVS-RFID TEC
          </Typography>
          <div className={classes.toolbarRight}>
            <Button variant='h6' noWrap edge='end'>
              USER-PORTAL
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          <ListItem
            key='Vehicle Details'
            onClick={() => {
              userCompStatus(true);
              btCompStatus(false);
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
              btCompStatus(true);
            }}
            button
          >
            <ListItemIcon>
              <SubjectOutlined color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Violations' />
          </ListItem>
        </List>
      </Drawer>
      <Toolbar />
      <div className={classes.contain}>{children}</div>
    </div>
  );
};

export default ResultLayout;
