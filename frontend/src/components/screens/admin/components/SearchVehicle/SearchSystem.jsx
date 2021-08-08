import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchSystemDash from './SearchSystemDash';
import VehicleDetails from './VehicleDetails';
import ViolationTable from '../../../user/components/Search/Violation/ViolationTable';
import ViolationDetailed from './ViolationDetailed';
const SearchSystem = () => {
  const [MOCK_DATA, setMOCK_DATA] = useState([]);
  const [searchBar, setSearchBar] = useState(true);
  const [searchSystemDash, setSearchSystemDash] = useState(false);
  // console.log(MOCK_DATA);

  const [vehicleDetailsPg, setVehicleDetailsPg] = useState(false);

  // importers
  const [vioTable, setVioTable] = useState(false);
  const [vDetailState, setVDetailState] = useState(false);
  const [vDetailFor, setVDetailFor] = useState([]);
  return (
    // close Dashboard Home using introstatus prop
    <>
      {searchBar && (
        <SearchBar
          setSearchBar={setSearchBar}
          setMOCK_DATA={setMOCK_DATA}
          setSearchSystemDash={setSearchSystemDash}
          setVehicleDetailsPg={setVehicleDetailsPg}
        />
      )}
      {searchSystemDash && (
        <SearchSystemDash
          setSearchBar={setSearchBar}
          MOCK_DATA={MOCK_DATA}
          setVehicleDetailsPg={setVehicleDetailsPg}
          setVioTable={setVioTable}
          setVDetailState={setVDetailState}
        />
      )}
      {/* Vehicle Details comp */}
      {vehicleDetailsPg && <VehicleDetails MOCK_DATA={MOCK_DATA} />}
      {/* violations comp */}
      {vioTable && (
        <ViolationTable
          MOCK_DATA={MOCK_DATA}
          vDetailFor={setVDetailFor}
          vDetailState={setVDetailState}
          setVioTable={setVioTable}
        />
      )}
      {vDetailState && (
        <ViolationDetailed
          violationData={vDetailFor}
          setVDetailState={setVDetailState}
          setVioTable={setVioTable}
        />
      )}
    </>
  );
};

export default SearchSystem;
