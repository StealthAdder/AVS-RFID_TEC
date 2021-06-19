// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ManufacturerHome from './components/screens/manufacturer/ManufacturerHome';
import UserPortal from './components/screens/user/UserPortal';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Appbar from './components/screens/user/layout/Appbar';

const App = () => {
  const [pageName, setPageName] = useState('');
  const [pageRoute, setPageRoute] = useState('');
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
      <Appbar pageTitle={pageName} pageUrl={pageRoute}>
        <Route path='/' exact>
          {/* Add some Home Landing PAGE */}
        </Route>
        <Route path='/manufacturer_sso' exact>
          <ManufacturerHome pageTitle={setPageName} pageUrl={setPageRoute} />
        </Route>
        <Route path='/userportal' exact>
          <UserPortal pageTitle={setPageName} pageUrl={setPageRoute} />
        </Route>
      </Appbar>
    </ThemeProvider>
  );
};

export default App;
