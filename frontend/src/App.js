import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AddManufacturedCar from './components/screens/AddManufacturedCar';
import Header from './components/Header';
import ManufacturerHome from './components/screens/manufacturer/ManufacturerHome';
import UserHome from './components/screens/user/UserHome';
function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route
          path='/manufacturer_sso'
          exact
          render={(props) => (
            <>
              <ManufacturerHome />
            </>
          )}
        />
        <Route
          path='/user_sso'
          exact
          render={(props) => (
            <>
              <UserHome />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
