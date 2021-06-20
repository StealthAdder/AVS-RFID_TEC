import { Typography, Container } from '@material-ui/core';
import { useState } from 'react';
import PHTable from './PHTable';
const PHHome = ({ MOCK_DATA }) => {
  const [vPHTable, setVPHTable] = useState(true);
  // console.log(MOCK_DATA);
  return (
    <>
      {vPHTable && <PHTable MOCK_DATA={MOCK_DATA} />}
      {/*  */}
    </>
  );
};

export default PHHome;
