import { useState } from 'react';
import { Container } from '@material-ui/core';
import UserDetail from './Container/UserDetail';
import ResultLayout from './Container/ResultLayout';
import ViolationTable from './Violation/ViolationTable';
import FindVehicle from './FindVehicle';
import ViolationDetailed from './Violation/ViolationDetailed';
const ResultPage = ({ fwd, introStatus, resultPgStatus }) => {
  const [userDetails, setUserDetails] = useState(true);
  const [vioTable, setVioTable] = useState(false);
  const [findVehicleState, setFindVehicleState] = useState(false);
  const [vDetailState, setVDetailState] = useState(false);
  const [vDetailFor, setVDetailFor] = useState([]);

  return (
    <ResultLayout
      userCompStatus={setUserDetails}
      vioCompStatus={setVioTable}
      findVehicleState={setFindVehicleState}
      vDetailState={setVDetailState}
      introStatus={introStatus}
      resultPgStatus={resultPgStatus}
    >
      {userDetails && <UserDetail user={fwd.searchResult} />}
      {vioTable && (
        <ViolationTable
          MOCK_DATA={fwd}
          vDetailFor={setVDetailFor}
          vDetailState={setVDetailState}
          setVioTable={setVioTable}
        />
      )}
      {findVehicleState && <FindVehicle MOCK_DATA={fwd} />}
      {vDetailState && <ViolationDetailed violationData={vDetailFor} />}
    </ResultLayout>
  );
};

export default ResultPage;
