import { Typography, Container } from '@material-ui/core';
import { useState } from 'react';
import PHTable from './PHTable';
import PHDetailed from './PHDetailed';
const PHHome = ({ MOCK_DATA }) => {
  const [vPHTable, setVPHTable] = useState(true);
  const [vPHDetailStatus, setVPHDetailStatus] = useState(false);
  const [vPHDetailFor, setVPHDetailFor] = useState({});
  // console.log(MOCK_DATA);
  return (
    <>
      {vPHTable && (
        <PHTable
          MOCK_DATA={MOCK_DATA}
          vPHDetailStatus={setVPHDetailStatus}
          vPHDetailFor={setVPHDetailFor}
        />
      )}
      {vPHDetailStatus && (
        <PHDetailed
          vPHTable={setVPHTable}
          vPHDetailStatus={setVPHDetailStatus}
          vPHDetailFor={vPHDetailFor}
        />
      )}
    </>
  );
};

export default PHHome;
