import { useState } from 'react';
import { Container } from '@material-ui/core';
import UserDetail from './Container/UserDetail';
import ResultLayout from './Container/ResultLayout';
import BasicTable from './tables/BasicTable';
const ResultPage = ({ fwd }) => {
  const [userDetails, setUserDetails] = useState(true);
  const [basicTable, setBasicTable] = useState(false);
  // const [userDetails, setUserDetails] = useState(true);
  return (
    <ResultLayout userCompStatus={setUserDetails} btCompStatus={setBasicTable}>
      {userDetails && <UserDetail user={fwd.searchResult} />}
      {basicTable && <BasicTable MOCK_DATA={fwd} />}
    </ResultLayout>
  );
};

export default ResultPage;
