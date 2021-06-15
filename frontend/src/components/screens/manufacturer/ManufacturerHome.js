import { useState } from 'react';
import AddManufacturedVehicle from './components/AddManufacturedVehicle';
import UpdateInformation from './components/UpdateInformation';
import Success from './components/Success';
import CompanyLogin from './components/CompanyLogin';
import ComapanyLogout from './components/ComapanyLogout';
const ManufacturerHome = () => {
  // useState
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // const [companyName, setCompanyName] = useState('');
  const [companyName, setCompanyName] = useState(
    localStorage.getItem('companyName')
  );

  return (
    <main>
      <h3>Manufacturer Portal</h3>
      <nav className='manuf-dash'>
        {companyName && (
          <>
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
            <p
              onClick={() => {
                setShowAdd(false);
                setShowUpdate(false);
                setShowSuccess(false);
              }}
            >
              <ComapanyLogout compName={setCompanyName} />
            </p>
          </>
        )}
        {!companyName && (
          <p
            className='avs manuf-dash-title'
            onClick={() => {
              setShowLogin(!showLogin);
            }}
          >
            Login
          </p>
        )}
      </nav>
      {showAdd && (
        <AddManufacturedVehicle closer={setShowAdd} success={setShowSuccess} />
      )}
      {showUpdate && (
        <UpdateInformation closer={setShowUpdate} success={setShowSuccess} />
      )}
      {showLogin && (
        <CompanyLogin closer={setShowLogin} compName={setCompanyName} />
      )}

      {showSuccess && <Success />}
    </main>
  );
};

export default ManufacturerHome;
