import React from 'react';
import { useState } from 'react';
// {
//     rf_tag,
//     manufacturer,
//     model,
//     yr of manufactue,
//     type:Elec,petrol,diesel,cng,
//     chassis No
//     }
const AddManufacturedCar = ({ onAdd }) => {
  const [rf_tag, setTag] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [yom, setYom] = useState('');
  const [type, setType] = useState('');
  const [chassisNum, setChassisNum] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // check if he has entered all the fields

    onAdd({ rf_tag, manufacturer, model, yom, type, chassisNum });

    // clear the form after submitting
    setTag('');
    setManufacturer('');
    setModel('');
    setYom('');
    setType('');
    setChassisNum('');
  };

  return (
    <>
      <h3 className='amc-title'>Add New Vechile Information</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>RFID Tag</label>
          <input
            type='text'
            placeholder='RFID Tag Number'
            value={rf_tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Manufacturer</label>
          <input
            type='text'
            placeholder='Manufacturer name'
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Vehicle Model</label>
          <input
            type='text'
            placeholder='Vehicle Model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Year Of Manufacture</label>
          <input
            type='text'
            placeholder='Vehicle Manufacture Date'
            value={yom}
            onChange={(e) => setYom(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Vehicle Type</label>
          <input
            type='text'
            placeholder='Type of Vehicle'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Chassis Number</label>
          <input
            type='text'
            placeholder='Chassis Number'
            value={chassisNum}
            onChange={(e) => setChassisNum(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Save Tag with Car'
          className='btn btn-block'
        />
      </form>
    </>
  );
};

export default AddManufacturedCar;
