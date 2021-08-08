import { useState } from 'react';
import { Container } from '@material-ui/core';
import UserDetail from './Container/UserDetail';
import ResultLayout from './Container/ResultLayout';
import ViolationTable from './Violation/ViolationTable';
import FindVehicle from './FindVehicle';
import ViolationDetailed from './Violation/ViolationDetailed';
import InAppPay from './Violation/InAppPay';
import PHHome from './PaidHistory/PHHome';
const ResultPage = ({ fwd, introStatus, resultPgStatus }) => {
  const [userDetails, setUserDetails] = useState(true);
  const [vioTable, setVioTable] = useState(false);
  const [findVehicleState, setFindVehicleState] = useState(false);
  const [vDetailState, setVDetailState] = useState(false);
  const [vInAppPayState, setVInAppPayState] = useState(false);
  const [vPaidHistory, setVPaidHistory] = useState(false);
  const [vDetailFor, setVDetailFor] = useState([]);
  return (
    <ResultLayout
      userCompStatus={setUserDetails}
      vioCompStatus={setVioTable}
      findVehicleState={setFindVehicleState}
      vDetailState={setVDetailState}
      introStatus={introStatus}
      resultPgStatus={resultPgStatus}
      setVInAppPayState={setVInAppPayState}
      setVPaidHistory={setVPaidHistory}
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
      {vDetailState && (
        <ViolationDetailed
          violationData={vDetailFor}
          setVInAppPayState={setVInAppPayState}
        />
      )}
      {vInAppPayState && (
        <InAppPay vDetailState={setVDetailState} violationData={vDetailFor} />
      )}
      {vPaidHistory && <PHHome MOCK_DATA={fwd} />}
      {findVehicleState && <FindVehicle MOCK_DATA={fwd} />}
    </ResultLayout>
  );
};

export default ResultPage;
