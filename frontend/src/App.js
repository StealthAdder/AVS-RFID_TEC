import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AddManufacturedCar from './components/screens/AddManufacturedCar';
import Header from './components/Header';
import ManufacturerHome from './components/screens/manufacturer/ManufacturerHome';

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
      </div>
    </Router>
  );
}

export default App;
