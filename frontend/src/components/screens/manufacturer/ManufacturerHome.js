import { useState } from 'react';
import AddManufacturedVehicle from './components/AddManufacturedVehicle';
import UpdateInformation from './components/UpdateInformation';
import Success from './components/Success';
const ManufacturerHome = () => {
  // useState
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <>
      <nav className='manuf-dash'>
        <p
          className='avs manuf-dash-title'
          onClick={() => {
            setShowAdd(!showAdd);
            setShowUpdate(false);
            setShowSuccess(false);
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
            setShowSuccess(false);
          }}
        >
          Update Information
        </p>
      </nav>
      {showAdd && (
        <AddManufacturedVehicle closer={setShowAdd} success={setShowSuccess} />
      )}
      {showUpdate && (
        <UpdateInformation closer={setShowUpdate} success={setShowSuccess} />
      )}
      {showSuccess && <Success />}
    </>
  );
};

export default ManufacturerHome;
