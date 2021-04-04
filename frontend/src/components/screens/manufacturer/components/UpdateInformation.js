import { useState } from 'react';
import SearchVehicle from './SearchVehicle';
import ShowDetails from './ShowDetails';
// Update Vehicle by searching with RFID Tag and display the data.

const UpdateInformation = () => {
  const [searchResult, SetSearchResult] = useState([]);
  // console.log(searchResult);
  return (
    <>
      <h3 className='amc-title'>Register Vehicle</h3>
      <SearchVehicle result={SetSearchResult} />
      <div>
        {searchResult.map((search) => (
          <ShowDetails
            key={search.searchResult.rf_tag}
            data={search.searchResult}
          />
        ))}
      </div>
    </>
  );
};

export default UpdateInformation;
