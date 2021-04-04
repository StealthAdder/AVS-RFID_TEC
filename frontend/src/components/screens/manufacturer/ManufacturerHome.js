import { useState } from 'react';
import AddManufacturedVehicle from './components/AddManufacturedVehicle';
import UpdateInformation from './components/UpdateInformation';

const ManufacturerHome = () => {
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
      {showAdd && <AddManufacturedVehicle />}
      {showUpdate && <UpdateInformation />}
    </>
  );
};

export default ManufacturerHome;
