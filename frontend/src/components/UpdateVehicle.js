import { useState, useEffect } from 'react';
import SearchVehicle from './SearchVehicle';

const UpdateVehicle = () => {
  useEffect(() => {}, []);

  // const getSearchedTag = async (tag) => {
  //   const res = await fetch(`${BackendIp}/manufacturer_sso/searchTag`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(tag),
  //   });
  //   // Result of search for vehicle.
  //   const data = await res.json();
  //   console.log(data);
  //   setResults(data);
  // };

  return (
    <>
      <h3 className='amc-title'>Register Vehicle</h3>
      <SearchVehicle />
    </>
  );
};

export default UpdateVehicle;
