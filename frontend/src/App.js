// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
// import AddManufacturedCar from './components/screens/AddManufacturedCar';
import MainNavigation from './components/layout/MainNavigation';
import ManufacturerHome from './components/screens/manufacturer/ManufacturerHome';
import UserPortal from './components/screens/user/UserPortal';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1E88E5',
      },
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          {/* Add some Home Landing PAGE */}
        </Route>
        <Route path='/manufacturer_sso' exact>
          <ManufacturerHome />
        </Route>
        <Route path='/userportal' exact>
          <UserPortal />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
