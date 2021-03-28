import { useState } from 'react';
const SearchVehicle = ({ onSearch }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    // check if he has entered all the fields
    onSearch({ rf_tag });
    setTag('');
  };
  let [rf_tag, setTag] = useState('');
  return (
    <div className='amc-div-form'>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>RFID Tag</label>
          <input
            type='text'
            placeholder='RFID Tag Number'
            value={rf_tag}
            onChange={(event) => setTag(event.target.value.toUpperCase())}
            required
          />
        </div>

        <input type='submit' value='Search Tag' className='btn btn-block' />
      </form>
    </div>
  );
};

export default SearchVehicle;
