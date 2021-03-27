import { useState } from 'react';
import AddManufacturedCar from '../AddManufacturedCar';

const ManufacturerHome = () => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  console.log(BackendIp);
  const addVehicle = async (vehicle) => {
    console.log(vehicle);

    const res = await fetch(`${BackendIp}/`, {
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

  const [showAdd, setshowAdd] = useState(false);

  return (
    <>
      <nav className='manuf-dash'>
        <p
          className='avs manuf-dash-title'
          onClick={() => setshowAdd(!showAdd)}
        >
          Add Vehicle
        </p>

        <p href='' className='avs manuf-dash-title'>
          Update Information
        </p>
      </nav>
      {showAdd && <AddManufacturedCar onAdd={addVehicle} />}
    </>
  );
};

export default ManufacturerHome;
