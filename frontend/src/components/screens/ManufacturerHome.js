import { useState } from 'react';
import AddManufacturedVehicle from '../AddManufacturedVehicle';

const ManufacturerHome = () => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  const addVehicle = async (vehicle) => {
    // console.log(vehicle);

    const res = await fetch(`${BackendIp}/manufacturer_sso/newVehicle`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });
    // To display registered cars
    const data = await res.json();
    console.log(data);
  };

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <nav className='manuf-dash'>
        <p
          className='avs manuf-dash-title'
          onClick={() => setShowAdd(!showAdd)}
        >
          Add Vehicle
        </p>

        <p href='' className='avs manuf-dash-title'>
          Update Information
        </p>
      </nav>
      {showAdd && <AddManufacturedVehicle onAdd={addVehicle} />}
      {/* {showUpdate && <>} */}
    </>
  );
};

export default ManufacturerHome;
