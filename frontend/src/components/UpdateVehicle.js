import { useState } from 'react';
import SearchVehicle from './SearchVehicle';

const UpdateVehicle = () => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  // Fetch POST to get user information.
  const searchTag = async (tag) => {
    const res = await fetch(`${BackendIp}/manufacturer_sso/searchTag`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(tag),
    });
    // Result of search for vehicle.
    const data = await res.json();
    // console.log(data);
    setResult = data;
    console.log(setResult);
  };
  let [result, setResult] = useState('');
  return (
    <>
      <h3 className='amc-title'>Register Vehicle</h3>
      <SearchVehicle onSearch={searchTag} />
    </>
  );
};

export default UpdateVehicle;
