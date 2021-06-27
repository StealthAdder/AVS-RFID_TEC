import SearchBar from './SearchBar';
import { useState } from 'react';
const SearchSystem = () => {
  const [vehicleData, setVehicleData] = useState([]);
  console.log(vehicleData);
  return (
    // close Dashboard Home using introstatus prop
    <>
      <SearchBar setVehicleData={setVehicleData} />
    </>
  );
};

export default SearchSystem;
