// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
// import AddManufacturedCar from './components/screens/AddManufacturedCar';
import MainNavigation from './components/layout/MainNavigation';
import ManufacturerHome from './components/screens/manufacturer/ManufacturerHome';
import UserHome from './components/screens/user/UserHome';
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          {/* Add some Home Landing PAGE */}
        </Route>
        <Route path='/manufacturer_sso' exact>
          <ManufacturerHome />
        </Route>
        <Route path='/userportal' exact>
          <UserHome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
