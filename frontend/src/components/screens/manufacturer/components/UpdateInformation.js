import { useState } from 'react';
import SearchVehicle from './SearchVehicle';
import ShowDetails from './ShowDetails';
// Update Vehicle by searching with RFID Tag and display the data.

const UpdateInformation = ({ closer, success }) => {
  const [searchResult, SetSearchResult] = useState([]);
  return (
    <>
      <h3 className='amc-title'>Register Vehicle</h3>
      <SearchVehicle result={SetSearchResult} />
      <div>
        {searchResult.length > 0 &&
          searchResult.map((search) => (
            <ShowDetails
              success={success}
              closer={closer}
              key={search.searchResult.rf_tag}
              data={search.searchResult}
            />
          ))}
      </div>
    </>
  );
};

export default UpdateInformation;
