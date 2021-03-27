import { useState } from 'react';

const UpdateVehicle = ({ onUpdate }) => {
  let [rf_tag, setTag] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    // check if he has entered all the fields
    onUpdate({ rf_tag });
    setTag('');
  };
  return (
    <>
      <h3 className='amc-title'>Register Vehicle</h3>
      <div className='amc-div-form'>
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>RFID Tag</label>
            <input
              type='text'
              placeholder='RFID Tag Number'
              value={rf_tag}
              onChange={(event) => setTag(event.target.value.toUpperCase())}
            />
          </div>

          <input type='submit' value='Search Tag' className='btn btn-block' />
        </form>
      </div>
    </>
  );
};

export default UpdateVehicle;
