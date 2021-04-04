import React from 'react';
import { useState } from 'react';
// {
//     rf_tag,
//     manufacturer,
//     model,
//     yr of manufactue,
//     type:Elec,petrol,diesel,cng,
//     engine No
//     chassis No
//     }
const AddManufacturedVehicle = () => {
  const [rf_tag, setTag] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [yom, setYom] = useState('');
  const [type, setType] = useState('');
  const [chassisNum, setChassisNum] = useState('');
  const [engineNum, setEngineNum] = useState('');

  const onSubmit = (e) => {
    const BackendIp = process.env.REACT_APP_BACKEND_IP;

    e.preventDefault();
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

    // check if he has entered all the fields

    addVehicle({
      rf_tag,
      manufacturer,
      model,
      yom,
      type,
      engineNum,
      chassisNum,
    });

    // clear the form after submitting
    setTag('');
    setManufacturer('');
    setModel('');
    setYom('');
    setType('');
    setEngineNum('');
    setChassisNum('');
  };

  return (
    <>
      <h3 className='amc-title'>Add New Vehicle Information</h3>
      <div className='amc-div-form'>
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>RFID Tag</label>
            <input
              type='text'
              placeholder='RFID Tag Number'
              value={rf_tag}
              onChange={(e) => setTag(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Manufacturer</label>
            <input
              type='text'
              placeholder='Manufacturer name'
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Vehicle Model</label>
            <input
              type='text'
              placeholder='Vehicle Model'
              value={model}
              onChange={(e) => setModel(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Year Of Manufacture</label>
            <input
              type='text'
              placeholder='Vehicle Manufacture Date'
              value={yom}
              onChange={(e) => setYom(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Vehicle Type</label>
            <input
              type='text'
              placeholder='Type of Vehicle'
              value={type}
              onChange={(e) => setType(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Engine Number</label>
            <input
              type='text'
              placeholder='Engine Number'
              value={engineNum}
              onChange={(e) => setEngineNum(e.target.value.toUpperCase())}
              required
            />
          </div>
          <div className='form-control'>
            <label>Chassis Number</label>
            <input
              type='text'
              placeholder='Chassis Number'
              value={chassisNum}
              onChange={(e) => setChassisNum(e.target.value.toUpperCase())}
              required
            />
          </div>

          <input type='submit' value='Save Details' className='btn btn-block' />
        </form>
      </div>
    </>
  );
};

export default AddManufacturedVehicle;
