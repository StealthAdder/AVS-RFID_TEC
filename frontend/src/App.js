import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AddManufacturedCar from './components/screens/AddManufacturedCar';
import Header from './components/Header';
import ManufacturerHome from './components/screens/ManufacturerHome';
// import { useState } from 'react';
// add tag and car to json-server

// verify tag
// const verifyTag = async (tag) => {
//   console.log(tag);
//   // const res = await fetch(
//   //     `http://localhost:5000/vehicle?rf_tag=${tag.rf_tag}`
//   // );
//   const res = await fetch(`http://localhost:5000/vehicle`);

//   const data = await res.json();
//   // ok so it gets all the tags and then checks
//   const tagverified = data.find((p) => p.rf_tag === tag.rf_tag);
//   console.log(data);
//   console.log(tagverified);
//   // if (data.lenght) return true;
//   // else return false;
//   return data;
// };

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
        {/* <Route
          path='/manufacturer_console'
          exact
          render={(props) => (
            <>
              <AddManufacturedCar onAdd={addVehicle} />
            </>
          )}
        /> */}
      </div>
    </Router>
  );
}

export default App;
