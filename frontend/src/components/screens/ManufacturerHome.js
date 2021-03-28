import { useState } from 'react';
import AddManufacturedVehicle from '../AddManufacturedVehicle';
import UpdateVehicle from '../UpdateVehicle';

const ManufacturerHome = () => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  // API Interactions -> addVehicle for first time
  const addVehicle = async (vehicle) => {
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

  // useState
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <nav className='manuf-dash'>
        <p
          className='avs manuf-dash-title'
          onClick={() => {
            setShowAdd(!showAdd);
            setShowUpdate(false);
          }}
        >
          Add Vehicle
        </p>

        <p
          href=''
          className='avs manuf-dash-title'
          onClick={() => {
            setShowUpdate(!showUpdate);
            setShowAdd(false);
          }}
        >
          Update Information
        </p>
      </nav>
      {showAdd && <AddManufacturedVehicle onAdd={addVehicle} />}
      {showUpdate && <UpdateVehicle />}
    </>
  );
};

export default ManufacturerHome;
