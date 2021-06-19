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
const Appbar = ({ children, pageTitle, pageUrl }) => {
  const drawerWidth = 200;

  const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
        // padding: theme.spacing(3),
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
  const history = useHistory();
  return (
    <div>
      {/* app bar */}
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h5' noWrap>
            AVS-RFID_TEC
          </Typography>
          <div className={classes.toolbarRight}>
            <Button
              variant='h6'
              edge='end'
              onClick={() => {
                window.location.reload();
              }}
            >
              {pageTitle}
            </Button>
            {/* <Typography variant='h6' noWrap>
              {pageTitle}
            </Typography> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Appbar;
