import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchSystemDash from './SearchSystemDash';
const SearchSystem = () => {
  const [vehicleSearchRes, setVehicleSearchRes] = useState([]);
  const [searchBar, setSearchBar] = useState(true);
  const [searchSystemDash, setSearchSystemDash] = useState(false);
  // console.log(vehicleSearchRes);
  return (
    // close Dashboard Home using introstatus prop
    <>
      {searchBar && (
        <SearchBar
          setSearchBar={setSearchBar}
          setVehicleSearchRes={setVehicleSearchRes}
          setSearchSystemDash={setSearchSystemDash}
        />
      )}
      {searchSystemDash && (
        <SearchSystemDash
          setSearchBar={setSearchBar}
          vehicleSearchRes={vehicleSearchRes}
        />
      )}
    </>
  );
};

export default SearchSystem;
